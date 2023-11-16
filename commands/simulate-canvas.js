const { SlashCommandBuilder } = require("discord.js");
const canvas = require('../utils/canvas');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("simulate-canvas")
        .setDescription("Simulate canvas"),
    /**
     * 
     * @param {import("discord.js").Interaction} interaction 
     */
    async run({ interaction, client }) {
        interaction.reply({ files: [await canvas(interaction, client)] });
    },
};
