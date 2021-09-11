module.exports = {
    name: "ping",
    aliases: [],
    usage: "HOW TO USE THE COMMAND",
    description: "WHAT THE COMMAND DOES",
    run: async (client, message, args) => {
    
      const Discord = require('discord.js');

      const embed = new Discord.MessageEmbed()
      .setDescription("Test")

    console.log("Hi")

    message.channel.send({ embeds: [embed] })
    
    }
  }