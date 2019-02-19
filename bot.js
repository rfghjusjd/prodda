const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546476299137318917")
setInterval(function() {
channel.send(`by [مجهول/nasto] GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);