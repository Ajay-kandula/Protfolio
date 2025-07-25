require('dotenv').config();
const express = require('express');
const cors = require('cors');
const message=require('./Model/message')
const mongoose=require('./Config/db')

const app = express();
mongoose();

app.use(cors());
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


  app.listen(5000, () => {
    console.log('Backend running on https://my-backend-api-3-crp2.onrender.com');
  });

