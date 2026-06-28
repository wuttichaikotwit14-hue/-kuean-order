import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🍜 Kuean Order</h1>
    <p>เว็บเหมือน Replit แล้ว</p>
  `);
});

app.listen(3000);
