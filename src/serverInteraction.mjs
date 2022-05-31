import fetch from 'node-fetch';
import maveClient from './maveClient.mjs';

const functionMap = {
  start: 'start-server',
  stop: 'stop-server',
  status: 'status-server',
}

maveClient.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!mave server')) return;

  const command = message.content.split(' ')[2];

  if (!functionMap[command]) {
    message.reply('No te he entendido :c\ncomandos disponibles: start, stop, status');

    return;
  }

  const response = await fetch(
    `${process.env.API_SERVER_CONTROLLER}/${functionMap[command]}`
  ).then(res => res.json());

  return message.reply(`\`\`\`${JSON.stringify(response, null, 2)}\`\`\``);
});
