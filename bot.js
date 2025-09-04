// bot.js
const TelegramBot = require('node-telegram-bot-api');

// BotFather token paste කරන්න
const token = '8402815314:AAHjQwTP9NdUaToeuj2Y-JaPbrBi4ZSat00';

// Polling mode
const bot = new TelegramBot(token, { polling: true });

// /start command reply
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}! Bot is running 🚀`);
});

// Simple text reply
bot.on('message', (msg) => {
  if (msg.text.toLowerCase() === 'hi') {
    bot.sendMessage(msg.chat.id, 'Hello! How are you? 😊');
  }
});
