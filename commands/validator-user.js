const {
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("validator-user")
    .setDescription("Create user"),
  admin: true,
  run: async ({ interaction, client }) => {
    const embed = new EmbedBuilder()
      .setTitle("User Validator")
      .setDescription(
        "Klik tombol verifikasi di bawah untuk mulai jual dan beli"
      )
      .addFields({
        name: "Cara Verifikasi ✅",
        value:
          "1. Isi data pada form yang disediakan\n" +
          "2. Tekan submit jika sudah",
      });

    const verification = new ButtonBuilder()
      .setCustomId("verification")
      .setLabel("Verifikasi ✅")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(verification);

    await interaction.channel.send({
      embeds: [embed],
      components: [row],
    });
  },
};
