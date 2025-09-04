const TelegramBot = require('node-telegram-bot-api');

const token = '8402815314:AAHjQwTP9NdUaToeuj2Y-JaPbrBi4ZSat00';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}! Bot is running 🚀`);
});

bot.on('message', (msg) => {
  if (msg.text && msg.text.toLowerCase() === 'hi') {
    bot.sendMessage(msg.chat.id, 'Hello! How are you? 😊');
  }
});
