import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL               = process.env.FROM_EMAIL               || 'info@webscrafting.com'
const ADMIN_EMAIL              = process.env.ADMIN_EMAIL              || 'info@webscrafting.com'
const SITE_URL                 = process.env.SITE_URL                 || 'https://webscrafting.com'
const AUDIENCE_LEADS           = process.env.RESEND_AUDIENCE_LEADS
const AUDIENCE_NEWSLETTER      = process.env.RESEND_AUDIENCE_NEWSLETTER
const LOGO_URL                 = `${SITE_URL}/logo_webscrafting.png`

const SERVICE_LABELS = {
  web:         'Sitio Web',
  ecommerce:   'E-commerce',
  seo:         'Artículos SEO',
  maintenance: 'Mantenimiento',
  other:       'Otro',
}

const BUDGET_LABELS = {
  '500-1000':   '€500 – €1.000',
  '1000-5000':  '€1.000 – €5.000',
  '5000-10000': '€5.000 – €10.000',
  '10000+':     '€10.000+',
}

function esc(str) {
  if (str == null) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function initials(name) {
  return String(name).trim().split(' ').slice(0, 2).map(w => w[0]?.toUpperCase() ?? '').join('')
}

function timestamp() {
  return new Date().toLocaleString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

// ─── TEMPLATE 1: Notificación interna de lead ────────────────────────────────

function buildLeadNotificationHtml(data) {
  const serviceLabel = SERVICE_LABELS[data.service] || data.service
  const budgetLabel  = BUDGET_LABELS[data.budget]   || data.budget || '—'
  const ini          = initials(data.name)

  const row = (label, value, highlight = false) => `
    <tr>
      <td style="padding:0 0 2px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td width="130" style="padding:14px 16px;vertical-align:top;">
              <span style="color:#9ca3af;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">${label}</span>
            </td>
            <td style="padding:14px 16px;background:${highlight ? '#fafafa' : '#ffffff'};border-left:1px solid #f3f4f6;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Lead Nuevo — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;padding:40px 16px;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;width:100%;">

  <!-- LOGO HEADER -->
  <tr>
    <td align="center" style="padding-bottom:24px;">
      <img src="${LOGO_URL}" alt="WebsCrafting" height="28" style="display:block;height:28px;border:0;">
    </td>
  </tr>

  <!-- CARD -->
  <tr>
    <td style="background:#111111;border-radius:16px 16px 0 0;padding:32px 40px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <span style="background:#e8552a;color:#fff;font-size:10px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;padding:4px 12px;border-radius:20px;">Lead nuevo</span>
            <p style="margin:16px 0 4px;color:#ffffff;font-size:22px;font-weight:700;line-height:1.2;">${esc(data.name)}</p>
            <p style="margin:0;color:#6b7280;font-size:13px;">${timestamp()}</p>
          </td>
          <td align="right" style="vertical-align:top;">
            <div style="width:52px;height:52px;background:#e8552a;border-radius:50%;text-align:center;line-height:52px;font-size:18px;font-weight:800;color:#fff;display:inline-block;">${ini}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- SERVICE HIGHLIGHT -->
  <tr>
    <td style="background:#e8552a;padding:12px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <span style="color:rgba(255,255,255,0.7);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Servicio solicitado</span>
            <p style="margin:2px 0 0;color:#fff;font-size:16px;font-weight:800;">${esc(serviceLabel)}</p>
          </td>
          ${data.budget ? `
          <td align="right">
            <span style="color:rgba(255,255,255,0.7);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;display:block;text-align:right;">Presupuesto</span>
            <p style="margin:2px 0 0;color:#fff;font-size:16px;font-weight:800;text-align:right;">${esc(budgetLabel)}</p>
          </td>` : ''}
        </tr>
      </table>
    </td>
  </tr>

  <!-- DATA ROWS -->
  <tr>
    <td style="background:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
        ${row('Email',
          `<a href="mailto:${esc(data.email)}" style="color:#e8552a;font-size:14px;font-weight:600;text-decoration:none;">${esc(data.email)}</a>`
        )}
        ${row('Web actual', data.website
          ? `<a href="${esc(data.website)}" style="color:#111111;font-size:13px;font-family:'Courier New',monospace;text-decoration:underline;" target="_blank">${esc(data.website)}</a>`
          : `<span style="color:#d1d5db;font-size:13px;font-style:italic;">No indicada</span>`
        , true)}
        ${data.phone ? row('Teléfono',
          `<a href="tel:${esc(data.phone)}" style="color:#111111;font-size:14px;font-weight:600;text-decoration:none;">${esc(data.phone)}</a>`
        ) : ''}
      </table>
    </td>
  </tr>

  <!-- MESSAGE -->
  <tr>
    <td style="background:#ffffff;padding:0 40px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="border-top:1px solid #f3f4f6;padding-top:20px;">
            <p style="margin:0 0 10px;color:#9ca3af;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Mensaje</p>
            <p style="margin:0;color:#374151;font-size:14px;line-height:1.8;white-space:pre-wrap;">${esc(data.message)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- CTA -->
  <tr>
    <td style="background:#fafafa;border-top:1px solid #f3f4f6;padding:24px 40px;border-radius:0 0 16px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <a href="mailto:${esc(data.email)}?subject=Re%3A%20Tu%20solicitud%20en%20WebsCrafting"
               style="display:inline-block;background:#111111;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
              Responder al lead →
            </a>
          </td>
          <td align="right" style="vertical-align:middle;">
            <span style="color:#d1d5db;font-size:11px;">Sistema interno</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td align="center" style="padding:24px 0 0;">
      <p style="margin:0;color:#9ca3af;font-size:11px;">webscrafting.com &nbsp;·&nbsp; Notificación interna. No reenvíes este correo.</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── TEMPLATE 2: Auto-respuesta al cliente ───────────────────────────────────

function buildContactAutoReplyHtml(data) {
  const firstName    = esc(data.name.trim().split(' ')[0])
  const serviceLabel = SERVICE_LABELS[data.service] || data.service

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tu solicitud — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;padding:40px 16px;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;width:100%;">

  <!-- LOGO -->
  <tr>
    <td align="center" style="padding-bottom:24px;">
      <img src="${LOGO_URL}" alt="WebsCrafting" height="28" style="display:block;height:28px;border:0;">
    </td>
  </tr>

  <!-- HERO -->
  <tr>
    <td style="background:#111111;border-radius:16px 16px 0 0;padding:48px 48px 40px;">
      <p style="margin:0 0 16px;color:#e8552a;font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;">Agencia de desarrollo web</p>
      <p style="margin:0 0 12px;color:#ffffff;font-size:32px;font-weight:800;line-height:1.15;">Hola, ${firstName}.</p>
      <p style="margin:0;color:#9ca3af;font-size:15px;line-height:1.7;">Tu solicitud ha llegado. La revisamos y respondemos en menos de 24 horas.</p>
    </td>
  </tr>

  <!-- DIVIDER LINE -->
  <tr>
    <td style="background:#e8552a;height:3px;font-size:0;line-height:0;">&nbsp;</td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#ffffff;padding:40px 48px;">

      <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.8;">
        Recibimos tu solicitud para <strong style="color:#111111;">${esc(serviceLabel)}</strong>. Sin rodeos: si encaja con lo que hacemos, te lo decimos directo. Si no, también.
      </p>

      <!-- SUMMARY CARD -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9fafb;border-radius:12px;overflow:hidden;margin-bottom:32px;">
        <tr>
          <td style="padding:18px 24px;border-bottom:1px solid #f3f4f6;">
            <span style="color:#111111;font-size:11px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;">Resumen</span>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="110" style="padding-bottom:14px;vertical-align:top;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:600;">Nombre</span>
                </td>
                <td style="padding-bottom:14px;">
                  <span style="color:#111111;font-size:13px;font-weight:700;">${esc(data.name)}</span>
                </td>
              </tr>
              <tr>
                <td width="110" style="padding-bottom:14px;vertical-align:top;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:600;">Servicio</span>
                </td>
                <td style="padding-bottom:14px;">
                  <span style="color:#111111;font-size:13px;font-weight:700;">${esc(serviceLabel)}</span>
                </td>
              </tr>
              ${data.budget ? `
              <tr>
                <td width="110" style="vertical-align:top;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:600;">Presupuesto</span>
                </td>
                <td>
                  <span style="color:#111111;font-size:13px;font-weight:700;">${esc(BUDGET_LABELS[data.budget] || data.budget)}</span>
                </td>
              </tr>` : ''}
            </table>
          </td>
        </tr>
      </table>

      <p style="margin:0 0 8px;color:#6b7280;font-size:14px;line-height:1.7;">Si tienes más contexto, responde directamente aquí.</p>
      <p style="margin:0 0 36px;color:#6b7280;font-size:14px;line-height:1.7;">Hablaremos pronto.</p>

      <!-- SIGNATURE -->
      <table cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="vertical-align:middle;padding-right:14px;">
            <div style="width:44px;height:44px;background:#111111;border-radius:50%;text-align:center;line-height:44px;font-size:16px;font-weight:800;color:#fff;display:inline-block;">J</div>
          </td>
          <td style="vertical-align:middle;">
            <p style="margin:0;color:#111111;font-size:14px;font-weight:700;">Jordi · WebsCrafting</p>
            <p style="margin:2px 0 0;">
              <a href="mailto:${FROM_EMAIL}" style="color:#e8552a;font-size:12px;text-decoration:none;">${FROM_EMAIL}</a>
            </p>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:#111111;padding:24px 48px;border-radius:0 0 16px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <a href="${SITE_URL}" style="color:#e8552a;font-size:12px;text-decoration:none;font-weight:600;">webscrafting.com</a>
          </td>
          <td align="right">
            <span style="color:#4b5563;font-size:11px;">&copy; ${new Date().getFullYear()} WebsCrafting</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td align="center" style="padding:20px 0 0;">
      <p style="margin:0;color:#9ca3af;font-size:11px;">Madrid, España &nbsp;·&nbsp; Respondemos en menos de 24h</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── TEMPLATE 3: Bienvenida newsletter ───────────────────────────────────────

function buildNewsletterWelcomeHtml(data) {
  const unsubUrl = `${SITE_URL}/baja-newsletter?email=${encodeURIComponent(data.email)}`

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bienvenido — WebsCrafting</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;padding:40px 16px;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;width:100%;">

  <!-- LOGO -->
  <tr>
    <td align="center" style="padding-bottom:24px;">
      <img src="${LOGO_URL}" alt="WebsCrafting" height="28" style="display:block;height:28px;border:0;">
    </td>
  </tr>

  <!-- HERO -->
  <tr>
    <td style="background:#111111;border-radius:16px 16px 0 0;padding:56px 48px 48px;">
      <p style="margin:0 0 20px;color:#e8552a;font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;">Contenido estratégico</p>
      <p style="margin:0 0 16px;color:#ffffff;font-size:36px;font-weight:800;line-height:1.1;">Dentro.<br>Nada de relleno.</p>
      <p style="margin:0;color:#6b7280;font-size:15px;line-height:1.7;max-width:380px;">Análisis, frameworks y decisiones reales de proyectos web. Sin padding. Sin fluff.</p>
    </td>
  </tr>

  <!-- ACCENT BAR -->
  <tr>
    <td style="background:#e8552a;height:3px;font-size:0;line-height:0;">&nbsp;</td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:#ffffff;padding:40px 48px 36px;">

      <p style="margin:0 0 28px;color:#374151;font-size:15px;line-height:1.8;">
        Ya estás en la lista. Recibirás contenido sobre desarrollo web, conversión y estrategia digital desde el punto de vista de quienes lo ejecutan.
      </p>

      <!-- WHAT TO EXPECT -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:36px;">

        <tr>
          <td style="padding-bottom:14px;">
            <table cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="width:32px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#f9fafb;border-radius:6px;text-align:center;line-height:24px;font-size:12px;">→</div>
                </td>
                <td style="padding-left:12px;vertical-align:middle;">
                  <span style="color:#111111;font-size:14px;font-weight:600;">Análisis técnicos de proyectos reales</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding-bottom:14px;">
            <table cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="width:32px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#f9fafb;border-radius:6px;text-align:center;line-height:24px;font-size:12px;">→</div>
                </td>
                <td style="padding-left:12px;vertical-align:middle;">
                  <span style="color:#111111;font-size:14px;font-weight:600;">Frameworks de decisión para webs de negocio</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="width:32px;vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#f9fafb;border-radius:6px;text-align:center;line-height:24px;font-size:12px;">→</div>
                </td>
                <td style="padding-left:12px;vertical-align:middle;">
                  <span style="color:#111111;font-size:14px;font-weight:600;">SEO y conversión sin teoría vacía</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

      <p style="margin:0 0 8px;color:#6b7280;font-size:14px;line-height:1.7;">Periodicidad: cuando haya algo que valga la pena. Sin spam.</p>
      <p style="margin:0 0 36px;color:#6b7280;font-size:14px;line-height:1.7;">Si en algún momento quieres trabajar con nosotros, sabes dónde encontrarnos.</p>

      <!-- SIGNATURE -->
      <table cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="vertical-align:middle;padding-right:14px;">
            <div style="width:44px;height:44px;background:#111111;border-radius:50%;text-align:center;line-height:44px;font-size:16px;font-weight:800;color:#fff;display:inline-block;">J</div>
          </td>
          <td style="vertical-align:middle;">
            <p style="margin:0;color:#111111;font-size:14px;font-weight:700;">Jordi · WebsCrafting</p>
            <p style="margin:2px 0 0;color:#9ca3af;font-size:12px;">webscrafting.com</p>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:#111111;padding:24px 48px;border-radius:0 0 16px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td>
            <a href="${SITE_URL}" style="color:#e8552a;font-size:12px;text-decoration:none;font-weight:600;">webscrafting.com</a>
            <span style="color:#374151;font-size:12px;"> &nbsp;·&nbsp; Madrid, España</span>
          </td>
          <td align="right">
            <a href="${esc(unsubUrl)}" style="color:#4b5563;font-size:11px;text-decoration:underline;">Cancelar suscripción</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td align="center" style="padding:20px 0 0;">
      <p style="margin:0;color:#9ca3af;font-size:11px;">Recibiste este correo porque te suscribiste en webscrafting.com</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Funciones de envío ───────────────────────────────────────────────────────

export async function sendLeadNotification(data) {
  const serviceLabel = SERVICE_LABELS[data.service] || data.service
  const { error } = await resend.emails.send({
    from: `WebsCrafting <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `${data.name} quiere hablar de ${serviceLabel}`,
    tags: [{ name: 'tipo', value: 'lead-contacto' }],
    html: buildLeadNotificationHtml(data),
  })
  if (error) throw new Error(`Resend (lead): ${error.message}`)

  if (AUDIENCE_LEADS) {
    const [firstName, ...rest] = data.name.trim().split(' ')
    await resend.contacts.create({
      audienceId: AUDIENCE_LEADS,
      email: data.email,
      firstName,
      lastName: rest.join(' ') || undefined,
      unsubscribed: false,
    }).catch((err) => console.error('[audience leads]', err.message))
  }
}

export async function sendContactAutoReply(data) {
  const firstName = data.name.trim().split(' ')[0]
  const { error } = await resend.emails.send({
    from: `Jordi de WebsCrafting <${FROM_EMAIL}>`,
    to: [data.email],
    replyTo: FROM_EMAIL,
    subject: `${firstName}, hemos recibido tu solicitud`,
    tags: [{ name: 'tipo', value: 'lead-autoreply' }],
    html: buildContactAutoReplyHtml(data),
  })
  if (error) throw new Error(`Resend (auto-reply): ${error.message}`)
}

export async function sendNewsletterWelcome(data) {
  const { error } = await resend.emails.send({
    from: `Jordi de WebsCrafting <${FROM_EMAIL}>`,
    to: [data.email],
    replyTo: FROM_EMAIL,
    subject: 'Ya estás dentro. Bienvenido.',
    tags: [{ name: 'tipo', value: 'newsletter-bienvenida' }],
    html: buildNewsletterWelcomeHtml(data),
  })
  if (error) throw new Error(`Resend (newsletter): ${error.message}`)

  if (AUDIENCE_NEWSLETTER) {
    await resend.contacts.create({
      audienceId: AUDIENCE_NEWSLETTER,
      email: data.email,
      firstName: data.name || undefined,
      unsubscribed: false,
    }).catch((err) => console.error('[audience newsletter]', err.message))
  }
}
