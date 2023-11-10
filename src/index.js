import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Привет, я бот-словарь, отправь мне слово и я найду его значение в толковом словаре'));

bot.on(message('text'), async (ctx) => {
  });

bot.launch(); 
console.log('BOT STARTED');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));