import { sendNewsletterWelcome } from "../src/services/emailService.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { email, name } = req.body ?? {};

  if (!email?.trim()) {
    return res.status(400).json({ error: "El email es obligatorio." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res
      .status(400)
      .json({ error: "El email no tiene un formato válido." });
  }

  const data = {
    email: email.trim(),
    name: name?.trim() || email.trim().split("@")[0],
  };

  try {
    await sendNewsletterWelcome(data);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[api/newsletter]", err);
    return res
      .status(500)
      .json({ error: "Error al procesar la suscripción. Inténtalo de nuevo." });
  }
}
