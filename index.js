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
app.post("/webhook", express.json(), (req, res) => {
  console.log("🎯 Webhook nhận từ Zalo:");
  console.log(JSON.stringify(req.body, null, 2)); // In đẹp dữ liệu JSON

  // Trả về mã 200 để Zalo biết server phản hồi OK
  res.sendStatus(200);
});
app.use(express.json());

// ✅ Route kiểm tra server sống hay chết
app.get("/", (req, res) => {
  res.send("Zalo Webhook is running!");
});

// ... bạn có thể có route POST /webhook ở đây

// Cổng lắng nghe
const PORT = process.env.PORT || 3000;
// Route xác minh domain với Zalo
app.get('/zalo-verification.txt', (req, res) => {
  res.send('zaloverify_LA1xZmFsc2UxMjM0'); // Thay bằng chuỗi thật từ file Zalo
});
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
