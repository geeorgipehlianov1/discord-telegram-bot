const axios = require( 'axios' )

const { Client, GatewayIntentBits } = require( 'discord.js' )

const client = new Client( { intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages ] } )

client.on( 'ready', () => {
    console.log( `Logged in!` )
} )

client.on( 'guildMemberAdd', async ( member ) =>
{       
    console.log('member joined', member);
} )

client.login('DISCORD_BOT_TOKEN')
