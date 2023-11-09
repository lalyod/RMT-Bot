const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  async run({ interaction }) {
    await interaction.reply(`Pong!`);
  },
};
