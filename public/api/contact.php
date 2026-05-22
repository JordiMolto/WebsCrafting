<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$config = require __DIR__ . '/config.php';

$body    = json_decode(file_get_contents('php://input'), true) ?? [];
$name    = trim($body['name']    ?? '');
$email   = trim($body['email']   ?? '');
$phone   = trim($body['phone']   ?? '');
$website = trim($body['website'] ?? '');
$service = trim($body['service'] ?? '');
$budget  = trim($body['budget']  ?? '');
$message = trim($body['message'] ?? '');

if (!$name || !$email || !$service || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan campos obligatorios: nombre, email, servicio y mensaje.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'El email no tiene un formato válido.']);
    exit;
}

$data = compact('name', 'email', 'phone', 'website', 'service', 'budget', 'message');

try {
    resendSend($config['RESEND_API_KEY'], [
        'from'    => 'WebsCrafting Sistema <' . $config['FROM_EMAIL'] . '>',
        'to'      => [$config['ADMIN_EMAIL']],
        'subject' => '[Lead] ' . $name . ' — ' . serviceLabel($service),
        'html'    => buildLeadNotificationHtml($data),
    ]);
    resendSend($config['RESEND_API_KEY'], [
        'from'     => 'WebsCrafting <' . $config['FROM_EMAIL'] . '>',
        'to'       => [$email],
        'reply_to' => $config['FROM_EMAIL'],
        'subject'  => 'Tu solicitud en WebsCrafting — En análisis',
        'html'     => buildContactAutoReplyHtml($data),
    ]);
    echo json_encode(['success' => true]);
} catch (Throwable $e) {
    error_log('[api/contact] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el mensaje. Inténtalo de nuevo.']);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function e(mixed $s): string {
    return htmlspecialchars((string)($s ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function serviceLabel(string $key): string {
    return ['web' => 'Sitio Web', 'ecommerce' => 'E-commerce', 'seo' => 'Artículos SEO',
            'maintenance' => 'Mantenimiento', 'other' => 'Otro'][$key] ?? $key;
}

function budgetLabel(string $key): string {
    return ['500-1000' => '€500 – €1.000', '1000-5000' => '€1.000 – €5.000',
            '5000-10000' => '€5.000 – €10.000', '10000+' => '€10.000+'][$key] ?? ($key ?: '—');
}

function timestamp(): string {
    $days   = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    $months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto',
               'septiembre','octubre','noviembre','diciembre'];
    $d = new DateTime();
    return $days[(int)$d->format('w')] . ', ' . $d->format('j') . ' de '
         . $months[(int)$d->format('n') - 1] . ' de ' . $d->format('Y') . ', ' . $d->format('H:i');
}

function resendSend(string $apiKey, array $payload): void {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . $apiKey,
            'Content-Type: application/json',
        ],
    ]);
    $response = curl_exec($ch);
    $status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($status < 200 || $status >= 300) {
        $decoded = json_decode($response, true);
        throw new RuntimeException('Resend error: ' . ($decoded['message'] ?? $response));
    }
}

// ─── Template 1: Notificación interna de lead ────────────────────────────────

function buildLeadNotificationHtml(array $d): string {
    $svcLabel  = e(serviceLabel($d['service']));
    $budLabel  = e(budgetLabel($d['budget']));
    $ts        = e(timestamp());
    $nameE     = e($d['name']);
    $emailE    = e($d['email']);

    $websiteCell = $d['website']
        ? '<a href="' . e($d['website']) . '" style="color:#0a1628;font-size:13px;font-family:\'Courier New\',monospace;text-decoration:underline;">' . e($d['website']) . '</a>'
        : '<span style="color:#b0bec5;font-size:13px;font-style:italic;">Sin web actual</span>';

    $phoneRow = $d['phone'] ? '
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Teléfono</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            <a href="tel:' . e($d['phone']) . '" style="color:#0a1628;font-size:14px;font-weight:700;text-decoration:none;">' . e($d['phone']) . '</a>
          </td>
        </tr>' : '';

    $messageE = e($d['message']);
    $replyHref = e('mailto:' . $d['email'] . '?subject=Re%3A%20Tu%20solicitud%20en%20WebsCrafting');

    return <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Lead Nuevo — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#e8ecf2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#e8ecf2;padding:28px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">
  <tr>
    <td style="background:#0a1628;padding:20px 32px;border-radius:8px 8px 0 0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td><span style="color:#fff;font-size:16px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">WEBSCRAFTING</span></td>
          <td align="right">
            <span style="background:#e8552a;color:#fff;font-size:10px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:0.12em;text-transform:uppercase;">&#9679; LEAD NUEVO</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background:#e8552a;padding:9px 32px;">
      <span style="color:#fff;font-size:11px;font-weight:600;letter-spacing:0.04em;">{$ts}</span>
    </td>
  </tr>
  <tr>
    <td style="background:#fff;padding:28px 32px;">
      <p style="margin:0 0 18px;color:#0a1628;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;padding-bottom:10px;border-bottom:2px solid #e8ecf2;">
        Datos del Lead
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;border-spacing:0 7px;">
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Nombre</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            <span style="color:#0a1628;font-size:15px;font-weight:700;">{$nameE}</span>
          </td>
        </tr>
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Email</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            <a href="mailto:{$emailE}" style="color:#e8552a;font-size:14px;font-weight:700;text-decoration:none;">{$emailE}</a>
          </td>
        </tr>
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Web actual</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            {$websiteCell}
          </td>
        </tr>
        <tr>
          <td width="110" style="background:#e8552a;padding:12px 14px;border-radius:6px 0 0 6px;">
            <span style="color:#fff;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Servicio</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:2px solid #e8552a;border-left:none;background:#fff8f6;">
            <span style="color:#0a1628;font-size:15px;font-weight:800;">{$svcLabel}</span>
          </td>
        </tr>
        <tr>
          <td width="110" style="background:#0a1628;padding:12px 14px;border-radius:6px 0 0 6px;">
            <span style="color:#fff;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Presupuesto</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:2px solid #0a1628;border-left:none;background:#f5f7fa;">
            <span style="color:#0a1628;font-size:16px;font-weight:800;">{$budLabel}</span>
          </td>
        </tr>
        {$phoneRow}
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:18px;">
        <tr>
          <td style="background:#f5f7fa;padding:10px 14px;border-radius:6px 6px 0 0;border:1px solid #e2e8f0;border-bottom:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Mensaje</span>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 14px;border-radius:0 0 6px 6px;border:1px solid #e2e8f0;border-top:none;background:#fff;">
            <p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;white-space:pre-wrap;">{$messageE}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <a href="{$replyHref}" style="display:inline-block;background:#e8552a;color:#fff;text-decoration:none;padding:11px 22px;border-radius:6px;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">
              Responder al lead
            </a>
          </td>
          <td align="right">
            <span style="color:#94a3b8;font-size:11px;">Sistema interno &middot; WebsCrafting</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background:#0a1628;padding:12px 32px;border-radius:0 0 8px 8px;text-align:center;">
      <span style="color:#fff;opacity:0.3;font-size:10px;letter-spacing:0.06em;">webscrafting.com &mdash; Notificación interna automatizada. No reenvíes este correo.</span>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
HTML;
}

// ─── Template 2: Auto-respuesta al cliente ───────────────────────────────────

function buildContactAutoReplyHtml(array $d): string {
    $firstName  = e(explode(' ', trim($d['name']))[0]);
    $svcLabel   = e(serviceLabel($d['service']));

    $budgetRow = $d['budget'] ? '
        <tr>
          <td style="padding-bottom:10px;">
            <span style="color:#94a3b8;font-size:12px;font-weight:600;display:block;margin-bottom:2px;">Presupuesto indicado</span>
            <span style="color:#0a1628;font-size:13px;font-weight:700;">' . e(budgetLabel($d['budget'])) . '</span>
          </td>
        </tr>' : '';

    $nameE   = e($d['name']);
    $year    = date('Y');

    return <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tu solicitud — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#e8ecf2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#e8ecf2;padding:28px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">
  <tr>
    <td style="background:#0a1628;padding:26px 40px;border-radius:8px 8px 0 0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <p style="margin:0 0 3px;color:#e8552a;font-size:10px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;">Agencia de desarrollo web</p>
            <p style="margin:0;color:#fff;font-size:20px;font-weight:800;letter-spacing:0.05em;">WEBSCRAFTING</p>
          </td>
          <td align="right" style="vertical-align:bottom;">
            <span style="color:#fff;opacity:0.3;font-size:11px;">webscrafting.com</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background:#fff;padding:40px 40px 32px;">
      <p style="margin:0 0 6px;color:#0a1628;font-size:26px;font-weight:800;line-height:1.15;">Solicitud recibida.</p>
      <p style="margin:0 0 28px;color:#e8552a;font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">Estamos en ello.</p>
      <p style="margin:0 0 18px;color:#334155;font-size:15px;line-height:1.75;">
        {$firstName}, tu solicitud para <strong style="color:#0a1628;">{$svcLabel}</strong> ha llegado correctamente. Nuestro equipo la analiza y te respondemos con criterio en menos de 24 horas.
      </p>
      <p style="margin:0 0 30px;color:#334155;font-size:15px;line-height:1.75;">
        Sin rodeos: si el proyecto encaja con lo que hacemos, te lo decimos directo. Si no, también.
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:26px;">
        <tr><td style="border-top:2px solid #e8ecf2;"></td></tr>
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f7fa;border-radius:8px;overflow:hidden;margin-bottom:30px;">
        <tr>
          <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;">
            <span style="color:#0a1628;font-size:10px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">Resumen de tu solicitud</span>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 20px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="padding-bottom:10px;">
                  <span style="color:#94a3b8;font-size:12px;font-weight:600;display:block;margin-bottom:2px;">Nombre</span>
                  <span style="color:#0a1628;font-size:13px;font-weight:700;">{$nameE}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:10px;">
                  <span style="color:#94a3b8;font-size:12px;font-weight:600;display:block;margin-bottom:2px;">Servicio solicitado</span>
                  <span style="color:#0a1628;font-size:13px;font-weight:700;">{$svcLabel}</span>
                </td>
              </tr>
              {$budgetRow}
            </table>
          </td>
        </tr>
      </table>
      <p style="margin:0 0 8px;color:#475569;font-size:14px;line-height:1.65;">
        Si tienes información adicional relevante, responde directamente a este correo.
      </p>
      <p style="margin:0 0 28px;color:#475569;font-size:14px;line-height:1.65;">
        Hablaremos pronto.
      </p>
      <p style="margin:0;color:#0a1628;font-size:14px;font-weight:700;">Equipo WebsCrafting</p>
    </td>
  </tr>
  <tr>
    <td style="background:#0a1628;padding:18px 40px;border-radius:0 0 8px 8px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <p style="margin:0 0 3px;color:#fff;opacity:0.7;font-size:12px;">
              <a href="mailto:info@webscrafting.com" style="color:#e8552a;text-decoration:none;">info@webscrafting.com</a>
            </p>
            <p style="margin:0;color:#fff;opacity:0.3;font-size:11px;">webscrafting.com &middot; Madrid, España</p>
          </td>
          <td align="right" style="vertical-align:bottom;">
            <span style="color:#fff;opacity:0.2;font-size:10px;letter-spacing:0.05em;">&copy; {$year} WebsCrafting</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
HTML;
}
