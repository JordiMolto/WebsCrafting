import {
  sendLeadNotification,
  sendContactAutoReply,
} from "../src/services/emailService.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, website, service, budget, message } =
    req.body ?? {};

  if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({
        error: "Faltan campos obligatorios: nombre, email, servicio y mensaje.",
      });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "El email no tiene un formato válido." });
  }

  const data = {
    name: name.trim(),
    email: email.trim(),
    phone,
    website,
    service,
    budget,
    message: message.trim(),
  };

  try {
    await Promise.all([sendLeadNotification(data), sendContactAutoReply(data)]);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[api/contact] ERROR:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
