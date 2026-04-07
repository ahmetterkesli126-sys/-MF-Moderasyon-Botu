const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot aktif: ${client.user.tag}`);
});

client.login(process.env.TOKEN);

// Render için port açma
http.createServer((req, res) => {
  res.write("Bot çalışıyor");
  res.end();
}).listen(process.env.PORT || 3000);
