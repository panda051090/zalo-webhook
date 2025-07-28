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

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
