const User = require("../models/User");

module.exports = {
  name: "verification-modal",
  /**
   * @param {import("discord.js").Interaction} interaction
   */
  run: async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    let name = interaction.fields.getTextInputValue("name");
    let phone_number = interaction.fields.getTextInputValue("phone_number");
    let email = interaction.fields.getTextInputValue("email");

    let user = await User.find({ userId: interaction.member.id });

    if(!user.length){
      new User({
        userId: interaction.member.id,
        name,
        phoneNumber: phone_number,
        email
      }).save();

      interaction.reply({content: 'Anda berhasil tervifikasi', ephemeral: true});
    }

    interaction.reply({content: 'Anda sudah terifikasi', ephemeral: true});
  },
};
