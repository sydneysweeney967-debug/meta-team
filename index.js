const express = require("express");
const app = express();

app.use(express.json());
app.use(express.text());

app.post("/webhook", (req, res) => {
  let data;

  try {
    data = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;
  } catch (e) {
    console.log("RAW DATA:", req.body);
    return res.send("OK");
  }

  console.log("DATA MASUK:", data);

  const from = data.form;
  const to = data.to;
  const message = data.chat;

  console.log(`Dari: ${from}`);
  console.log(`Ke: ${to}`);
  console.log(`Pesan: ${message}`);

  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Webhook aktif 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
