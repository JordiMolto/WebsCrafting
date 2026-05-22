import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const SITE_URL = process.env.SITE_URL;

const SERVICE_LABELS = {
  web: "Sitio Web",
  ecommerce: "E-commerce",
  seo: "Artículos SEO",
  maintenance: "Mantenimiento",
  other: "Otro",
};

const BUDGET_LABELS = {
  "500-1000": "€500 – €1.000",
  "1000-5000": "€1.000 – €5.000",
  "5000-10000": "€5.000 – €10.000",
  "10000+": "€10.000+",
};

function esc(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function timestamp() {
  return new Date().toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── TEMPLATE 1: Notificación interna de lead ────────────────────────────────

function buildLeadNotificationHtml(data) {
  const serviceLabel = esc(SERVICE_LABELS[data.service] || data.service);
  const budgetLabel = esc(BUDGET_LABELS[data.budget] || data.budget || "—");
  const websiteCell = data.website
    ? `<a href="${esc(data.website)}" style="color:#0a1628;font-size:13px;font-family:'Courier New',monospace;text-decoration:underline;">${esc(data.website)}</a>`
    : `<span style="color:#b0bec5;font-size:13px;font-style:italic;">Sin web actual</span>`;
  const phoneRow = data.phone
    ? `
    <tr>
      <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
        <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Teléfono</span>
      </td>
      <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
        <a href="tel:${esc(data.phone)}" style="color:#0a1628;font-size:14px;font-weight:700;text-decoration:none;">${esc(data.phone)}</a>
      </td>
    </tr>`
    : "";

  return `<!DOCTYPE html>
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

  <!-- HEADER -->
  <tr>
    <td style="background:#0a1628;padding:20px 32px;border-radius:8px 8px 0 0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td><span style="color:#fff;font-size:16px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">WEBSCRAFTING</span></td>
          <td align="right">
            <span style="background:#e8552a;color:#fff;font-size:10px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:0.12em;text-transform:uppercase;">● LEAD NUEVO</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- TIMESTAMP -->
  <tr>
    <td style="background:#e8552a;padding:9px 32px;">
      <span style="color:#fff;font-size:11px;font-weight:600;letter-spacing:0.04em;">${timestamp()}</span>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#fff;padding:28px 32px;">

      <p style="margin:0 0 18px;color:#0a1628;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;padding-bottom:10px;border-bottom:2px solid #e8ecf2;">
        Datos del Lead
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;border-spacing:0 7px;">

        <!-- Nombre -->
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Nombre</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            <span style="color:#0a1628;font-size:15px;font-weight:700;">${esc(data.name)}</span>
          </td>
        </tr>

        <!-- Email -->
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Email</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            <a href="mailto:${esc(data.email)}" style="color:#e8552a;font-size:14px;font-weight:700;text-decoration:none;">${esc(data.email)}</a>
          </td>
        </tr>

        <!-- Web actual -->
        <tr>
          <td width="110" style="background:#f5f7fa;padding:12px 14px;border-radius:6px 0 0 6px;border:1px solid #e2e8f0;border-right:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Web actual</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:1px solid #e2e8f0;border-left:none;background:#fff;">
            ${websiteCell}
          </td>
        </tr>

        <!-- Servicio — highlighted accent -->
        <tr>
          <td width="110" style="background:#e8552a;padding:12px 14px;border-radius:6px 0 0 6px;">
            <span style="color:#fff;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Servicio</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:2px solid #e8552a;border-left:none;background:#fff8f6;">
            <span style="color:#0a1628;font-size:15px;font-weight:800;">${serviceLabel}</span>
          </td>
        </tr>

        <!-- Presupuesto — highlighted navy -->
        <tr>
          <td width="110" style="background:#0a1628;padding:12px 14px;border-radius:6px 0 0 6px;">
            <span style="color:#fff;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Presupuesto</span>
          </td>
          <td style="padding:12px 14px;border-radius:0 6px 6px 0;border:2px solid #0a1628;border-left:none;background:#f5f7fa;">
            <span style="color:#0a1628;font-size:16px;font-weight:800;">${budgetLabel}</span>
          </td>
        </tr>

        <!-- Teléfono (condicional) -->
        ${phoneRow}

      </table>

      <!-- Mensaje -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:18px;">
        <tr>
          <td style="background:#f5f7fa;padding:10px 14px;border-radius:6px 6px 0 0;border:1px solid #e2e8f0;border-bottom:none;">
            <span style="color:#94a3b8;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">Mensaje</span>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 14px;border-radius:0 0 6px 6px;border:1px solid #e2e8f0;border-top:none;background:#fff;">
            <p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;white-space:pre-wrap;">${esc(data.message)}</p>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- CTA -->
  <tr>
    <td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <a href="mailto:${esc(data.email)}?subject=Re%3A%20Tu%20solicitud%20en%20WebsCrafting"
               style="display:inline-block;background:#e8552a;color:#fff;text-decoration:none;padding:11px 22px;border-radius:6px;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">
              Responder al lead
            </a>
          </td>
          <td align="right">
            <span style="color:#94a3b8;font-size:11px;">Sistema interno · WebsCrafting</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:#0a1628;padding:12px 32px;border-radius:0 0 8px 8px;text-align:center;">
      <span style="color:#fff;opacity:0.3;font-size:10px;letter-spacing:0.06em;">webscrafting.com — Notificación interna automatizada. No reenvíes este correo.</span>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── TEMPLATE 2: Auto-respuesta al cliente (lead) ────────────────────────────

function buildContactAutoReplyHtml(data) {
  const firstName = esc(data.name.trim().split(" ")[0]);
  const serviceLabel = esc(SERVICE_LABELS[data.service] || data.service);
  const budgetRow = data.budget
    ? `
    <tr>
      <td style="padding-bottom:10px;">
        <span style="color:#94a3b8;font-size:12px;font-weight:600;display:block;margin-bottom:2px;">Presupuesto indicado</span>
        <span style="color:#0a1628;font-size:13px;font-weight:700;">${esc(BUDGET_LABELS[data.budget] || data.budget)}</span>
      </td>
    </tr>`
    : "";

  return `<!DOCTYPE html>
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

  <!-- HEADER -->
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

  <!-- BODY -->
  <tr>
    <td style="background:#fff;padding:40px 40px 32px;">

      <p style="margin:0 0 6px;color:#0a1628;font-size:26px;font-weight:800;line-height:1.15;">Solicitud recibida.</p>
      <p style="margin:0 0 28px;color:#e8552a;font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">Estamos en ello.</p>

      <p style="margin:0 0 18px;color:#334155;font-size:15px;line-height:1.75;">
        ${firstName}, tu solicitud para <strong style="color:#0a1628;">${serviceLabel}</strong> ha llegado correctamente. Nuestro equipo la analiza y te respondemos con criterio en menos de 24 horas.
      </p>

      <p style="margin:0 0 30px;color:#334155;font-size:15px;line-height:1.75;">
        Sin rodeos: si el proyecto encaja con lo que hacemos, te lo decimos directo. Si no, también.
      </p>

      <!-- DIVIDER -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:26px;">
        <tr><td style="border-top:2px solid #e8ecf2;"></td></tr>
      </table>

      <!-- RESUMEN -->
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
                  <span style="color:#0a1628;font-size:13px;font-weight:700;">${esc(data.name)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:10px;">
                  <span style="color:#94a3b8;font-size:12px;font-weight:600;display:block;margin-bottom:2px;">Servicio solicitado</span>
                  <span style="color:#0a1628;font-size:13px;font-weight:700;">${serviceLabel}</span>
                </td>
              </tr>
              ${budgetRow}
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

  <!-- FOOTER -->
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
            <span style="color:#fff;opacity:0.2;font-size:10px;letter-spacing:0.05em;">&copy; ${new Date().getFullYear()} WebsCrafting</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── TEMPLATE 3: Bienvenida newsletter / lead magnet ─────────────────────────

function buildNewsletterWelcomeHtml(data) {
  const unsubUrl = `${SITE_URL}/baja-newsletter?email=${encodeURIComponent(data.email)}`;

  return `<!DOCTYPE html>
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

  <!-- HEADER -->
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
      <!-- Accent line -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr><td style="background:#e8552a;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>
    </td>
  </tr>

  <!-- HERO (navy) -->
  <tr>
    <td style="background:#0a1628;padding:28px 40px 36px;">
      <p style="margin:0 0 10px;color:#fff;font-size:26px;font-weight:800;line-height:1.2;">Dentro.<br>Nada de relleno.</p>
      <p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.65;">Recibirás análisis, frameworks y decisiones reales de proyectos web. Sin padding. Sin fluff.</p>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#fff;padding:38px 40px 30px;">

      <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.75;">
        Ya estás en la lista. A partir de ahora recibirás contenido sobre desarrollo web, conversión y estrategia digital desde el punto de vista de quienes lo ejecutan, no de quienes solo lo escriben.
      </p>

      <!-- QUÉ RECIBIRÁS -->
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
                <td width="20" style="vertical-align:top;padding-top:1px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;margin-top:5px;">&nbsp;</td></tr>
                  </table>
                </td>
                <td style="padding-left:10px;">
                  <span style="color:#334155;font-size:14px;line-height:1.55;">Análisis técnicos de proyectos reales</span>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:8px;">
              <tr>
                <td width="20" style="vertical-align:top;padding-top:1px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
                  </table>
                </td>
                <td style="padding-left:10px;">
                  <span style="color:#334155;font-size:14px;line-height:1.55;">Frameworks de decisión para webs de negocio</span>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="20" style="vertical-align:top;padding-top:1px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td style="background:#e8552a;width:6px;height:6px;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
                  </table>
                </td>
                <td style="padding-left:10px;">
                  <span style="color:#334155;font-size:14px;line-height:1.55;">Estrategia SEO y conversión sin teoría vacía</span>
                </td>
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

  <!-- FOOTER -->
  <tr>
    <td style="background:#0a1628;padding:18px 40px;border-radius:0 0 8px 8px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <p style="margin:0 0 3px;color:#fff;opacity:0.7;font-size:12px;">
              <a href="${SITE_URL}" style="color:#e8552a;text-decoration:none;">webscrafting.com</a>
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
              <a href="${esc(unsubUrl)}" style="color:#fff;opacity:0.4;font-size:11px;text-decoration:underline;">Cancelar suscripción</a>
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
</html>`;
}

// ─── Funciones de envío públicas ─────────────────────────────────────────────

export async function sendLeadNotification(data) {
  const { error } = await resend.emails.send({
    from: `WebsCrafting Sistema <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[Lead] ${data.name} — ${SERVICE_LABELS[data.service] || data.service}`,
    html: buildLeadNotificationHtml(data),
  });
  if (error)
    throw new Error(`Resend error (lead notification): ${error.message}`);
}

export async function sendContactAutoReply(data) {
  const { error } = await resend.emails.send({
    from: `WebsCrafting <${FROM_EMAIL}>`,
    to: [data.email],
    replyTo: FROM_EMAIL,
    subject: "Tu solicitud en WebsCrafting — En análisis",
    html: buildContactAutoReplyHtml(data),
  });
  if (error) throw new Error(`Resend error (auto-reply): ${error.message}`);
}

export async function sendNewsletterWelcome(data) {
  const { error } = await resend.emails.send({
    from: `WebsCrafting <${FROM_EMAIL}>`,
    to: [data.email],
    replyTo: FROM_EMAIL,
    subject: "Dentro. Nada de relleno. — WebsCrafting",
    html: buildNewsletterWelcomeHtml(data),
  });
  if (error) throw new Error(`Resend error (newsletter): ${error.message}`);
}
