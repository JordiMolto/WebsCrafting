import "dotenv/config";
import express from "express";
import contactHandler from "./api/contact.js";
import newsletterHandler from "./api/newsletter.js";

const app = express();
app.use(express.json());

const wrap = (handler) => (req, res) => handler(req, res);

app.post("/api/contact", wrap(contactHandler));
app.post("/api/newsletter", wrap(newsletterHandler));

app.listen(3001, () => {
  console.log("Dev API server → http://localhost:3001");
});
