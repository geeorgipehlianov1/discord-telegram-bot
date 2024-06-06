const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('TELEGRAM_BOT_TOKEN', { polling: true });

bot.on( 'new_chat_members', async ( msg ) => {
  console.log('New user joined!', msg);
  const chatId = msg.chat.id;
  if (msg.new_chat_members) {
      try
      {
     console.log('New user joined! 1', msg);
      let resp = await axios.get('https://api.quotable.io/random');
      const quote = resp.data.content;

      bot.sendMessage(chatId, `Welcome! Here is a quote for you: "${quote}"`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  } else
  {
      bot.sendMessage( chatId, 'Hello!' );
  }
});

console.log('Telegram bot is running...');
