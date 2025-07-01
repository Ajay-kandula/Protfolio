const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./Config/db');
const Message = require('./Model/message');

const app = express();

app.use(cors({
  origin:"*",
  methods:['Get','Post'],
  allowedHeaders:['content-Type']


}));
app.use(express.json());


app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const msg = await Message.create({ name, email, message });
    res.json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(5000,'0.0.0', () => {
    console.log('Backend running on http://192.168.29.157:5000');
  });
});
