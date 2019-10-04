const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjI5NzkzNzYwOTA5MTk3MzE0.XZe9iA.2jnMH7Qy2P0Xbf95qO5XjuI9lOc);
