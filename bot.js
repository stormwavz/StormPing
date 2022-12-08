const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const user = newPresence.user;

  // Check if the user is the one we want to ping
  if (user.id === '256213318060998666') {
    // Check if the user was offline and is now online
    if (oldPresence.status === 'offline' && newPresence.status === 'online') {

      // Get the channel to send the message in
      const channel = client.channels.cache.get('349096556818857995');

      // Send the message
      channel.send(`<@&1019364021746552883> is now online!`);
    }
  }
});

require('dotenv').config()
client.login(process.env.DISCORD_TOKEN);
