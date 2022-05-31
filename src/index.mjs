import maveClient from './maveClient.mjs';

import 'dotenv/config';
import './serverInteraction.mjs';

maveClient.once('ready', (bot) => {
  console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});

maveClient.login(process.env.MAVE_TOKEN);
