const { Client, channels, IntentsBitField } = require('discord.js');
require('dotenv').config();


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


// startup
client.on('ready', client => {
    console.log(`woofwoof`);
});





client.login(process.env.TOKEN);

