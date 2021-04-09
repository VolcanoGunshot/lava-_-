const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
const axios = require("axios");
module.exports = {
  name: "djs",
  category: "💪 Source-Help",
  aliases: ["discordjs", "djscode", "djshelp"],
  cooldown: 5,
  usage: "djs [QUEURY]",
  description: "DOES SEARCH FOR THE DISCORD.JS DOCS and gives u help",
  run: async (client, message, args, user, text, prefix) => {
    axios.get(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${args.join(" ")}`).then(embed => {
      const {
        data
      } = embed;
      data.color = ee.color
      message.channel.send({
        embed: data
      });
    });
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
