// 引入express框架
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  res.send('登录成功')
})

app.get('/get', (req, res) => {
  res.send({ "name": "xiaoming" })
})

app.listen(3000, function() {
  console.log('启动成功');
})