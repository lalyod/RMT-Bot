const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  name: "verification",
  /**
   * @param {import("discord.js").Interaction} interaction
   */
  run: async (interaction) => {
    try {
      let modal = new ModalBuilder()
        .setCustomId("verification-modal")
        .setTitle("Verifikasi");

      let nameInput = new TextInputBuilder()
        .setCustomId("name")
        .setLabel("Nama")
        .setPlaceholder("Masukan nama kamu")
        .setStyle(TextInputStyle.Short)
        .setMaxLength(50)
        .setMinLength(4)
        .setRequired(true);

      let numberInput = new TextInputBuilder()
        .setCustomId("phone_number")
        .setLabel("Nomor Telephon")
        .setPlaceholder("628*********")
        .setStyle(TextInputStyle.Short)
        .setMaxLength(14)
        .setMinLength(11)
        .setRequired(true);

      let paymentInput = new TextInputBuilder()
        .setCustomId("email")
        .setLabel("Email")
        .setPlaceholder("*****@gmail.com")
        .setStyle(TextInputStyle.Short)
        .setMaxLength(30)
        .setMinLength(5)
        .setRequired(true);

      let firstActionRow = new ActionRowBuilder().addComponents(nameInput);
      let secondActionRow = new ActionRowBuilder().addComponents(numberInput);
      let thirdActionRow = new ActionRowBuilder().addComponents(paymentInput);

      modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

      await interaction.showModal(modal);
    } catch (err) {
      console.log(err);
    } 
  },
};
