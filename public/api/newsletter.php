<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$config = require __DIR__ . '/config.php';

$body  = json_decode(file_get_contents('php://input'), true) ?? [];
$email = trim($body['email'] ?? '');
$name  = trim($body['name']  ?? '');

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'El email es obligatorio.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'El email no tiene un formato válido.']);
    exit;
}

if (!$name) {
    $name = explode('@', $email)[0];
}

try {
    resendSend($config['RESEND_API_KEY'], [
        'from'     => 'WebsCrafting <' . $config['FROM_EMAIL'] . '>',
        'to'       => [$email],
        'reply_to' => $config['FROM_EMAIL'],
        'subject'  => 'Dentro. Nada de relleno. — WebsCrafting',
        'html'     => buildNewsletterWelcomeHtml($email, $name, $config['SITE_URL']),
    ]);
    echo json_encode(['success' => true]);
} catch (Throwable $e) {
    error_log('[api/newsletter] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Error al procesar la suscripción. Inténtalo de nuevo.']);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function e(mixed $s): string {
    return htmlspecialchars((string)($s ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
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

// ─── Template: Bienvenida newsletter ─────────────────────────────────────────

function buildNewsletterWelcomeHtml(string $email, string $name, string $siteUrl): string {
    $emailE   = e($email);
    $unsubUrl = e($siteUrl . '/baja-newsletter?email=' . rawurlencode($email));
    $siteE    = e($siteUrl);

    return <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bienvenido — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#e8ecf2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#e8ecf2;padding:28px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">
  <tr>
    <td style="background:#0a1628;padding:26px 40px 0;border-radius:8px 8px 0 0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <p style="margin:0 0 3px;color:#e8552a;font-size:10px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;">Contenido estratégico</p>
            <p style="margin:0 0 20px;color:#fff;font-size:20px;font-weight:800;letter-spacing:0.05em;">WEBSCRAFTING</p>
          </td>
        </tr>
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr><td style="background:#e8552a;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background:#0a1628;padding:28px 40px 36px;">
      <p style="margin:0 0 10px;color:#fff;font-size:26px;font-weight:800;line-height:1.2;">Dentro.<br>Nada de relleno.</p>
      <p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.65;">Recibirás análisis, frameworks y decisiones reales de proyectos web. Sin padding. Sin fluff.</p>
    </td>
  </tr>
  <tr>
    <td style="background:#fff;padding:38px 40px 30px;">
      <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.75;">
        Ya estás en la lista. A partir de ahora recibirás contenido sobre desarrollo web, conversión y estrategia digital desde el punto de vista de quienes lo ejecutan, no de quienes solo lo escriben.
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f7fa;border-radius:8px;overflow:hidden;margin-bottom:28px;">
        <tr>
          <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;">
            <span style="color:#0a1628;font-size:10px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">Qué vas a recibir</span>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:8px;">
              <tr>
                <td width="20" style="vertical-align:top;padding-top:4px;">
                  <table cellpadding="0" cellspacing="0" role="presentation"><tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td></tr></table>
                </td>
                <td style="padding-left:10px;"><span style="color:#334155;font-size:14px;line-height:1.55;">Análisis técnicos de proyectos reales</span></td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:8px;">
              <tr>
                <td width="20" style="vertical-align:top;padding-top:4px;">
                  <table cellpadding="0" cellspacing="0" role="presentation"><tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td></tr></table>
                </td>
                <td style="padding-left:10px;"><span style="color:#334155;font-size:14px;line-height:1.55;">Frameworks de decisión para webs de negocio</span></td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="20" style="vertical-align:top;padding-top:4px;">
                  <table cellpadding="0" cellspacing="0" role="presentation"><tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td></tr></table>
                </td>
                <td style="padding-left:10px;"><span style="color:#334155;font-size:14px;line-height:1.55;">Estrategia SEO y conversión sin teoría vacía</span></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style="margin:0 0 8px;color:#475569;font-size:14px;line-height:1.65;">
        Periodicidad: cuando haya algo que valga la pena enviar. Sin spam.
      </p>
      <p style="margin:0 0 26px;color:#475569;font-size:14px;line-height:1.65;">
        Si en algún momento quieres trabajar con nosotros, sabes dónde encontrarnos.
      </p>
      <p style="margin:0;color:#0a1628;font-size:14px;font-weight:700;">Jordi &middot; WebsCrafting</p>
    </td>
  </tr>
  <tr>
    <td style="background:#0a1628;padding:18px 40px;border-radius:0 0 8px 8px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <p style="margin:0 0 3px;color:#fff;opacity:0.7;font-size:12px;">
              <a href="{$siteE}" style="color:#e8552a;text-decoration:none;">webscrafting.com</a>
              &nbsp;&middot;&nbsp;
              <a href="mailto:info@webscrafting.com" style="color:#fff;opacity:0.55;text-decoration:none;">info@webscrafting.com</a>
            </p>
            <p style="margin:0;color:#fff;opacity:0.3;font-size:11px;">Madrid, España</p>
          </td>
        </tr>
        <tr>
          <td style="padding-top:14px;border-top:1px solid rgba(255,255,255,0.08);margin-top:14px;">
            <p style="margin:6px 0 0;color:#fff;opacity:0.25;font-size:11px;line-height:1.6;">
              Recibiste este correo porque te suscribiste en webscrafting.com.<br>
              <a href="{$unsubUrl}" style="color:#fff;opacity:0.4;font-size:11px;text-decoration:underline;">Cancelar suscripción</a>
            </p>
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
