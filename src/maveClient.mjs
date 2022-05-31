import Discord from 'discord.js';

const maveClient = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});

export default maveClient;
