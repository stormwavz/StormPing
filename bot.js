const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create a variable to track the time of the last message
let lastMessageTime = 0;

client.on('message', (message) => {
  // Get the current time
  const currentTime = Date.now();

  // Calculate the time since the last message was sent
  const timeSinceLastMessage = currentTime - lastMessageTime;

});

client.login('your-bot-token-here');

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const user = newPresence.user;

  // Check if the user is the one we want to ping
  if (timeSinceLastMessage >= 1000) {

    // Update the last message time to the current time
    lastMessageTime = currentTime;

    if (user.id === '256213318060998666') {
      // Check if the user was offline and is now online
      if (oldPresence.status === 'offline' && newPresence.status === 'online') {
        // If the time since the last message is greater than or equal to 1 second
        
          // Get the channel to send the message in
          const channel = client.channels.cache.get('349096556818857995');

          // Send the message
          channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696440`);
      }
      else if (oldPresence.status === 'online' && newPresence.status === 'offline') {

            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
      
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
      }
    }
  }
});

require('dotenv').config()
client.login(process.env.DISCORD_TOKEN);
