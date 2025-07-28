const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Zalo Webhook Server đang chạy!');
});

app.post('/webhook', (req, res) => {
  console.log('Nhận dữ liệu từ Zalo:', req.body);
  res.sendStatus(200);
});

const express = require("express");
const app = express();

app.use(express.json());

// ✅ Route kiểm tra server sống hay chết
app.get("/", (req, res) => {
  res.send("Zalo Webhook is running!");
});

// ... bạn có thể có route POST /webhook ở đây

// Cổng lắng nghe
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
