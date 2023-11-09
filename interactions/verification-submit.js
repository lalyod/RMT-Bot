module.exports = {
  name: "verification-modal",
  /**
   * @param {import("discord.js").Interaction} interaction
   */
  run: async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    let name = interaction.fields.getTextInputValue("name");
    let phone_number = interaction.fields.getTextInputValue('phone_number');
    let email = interaction.fields.getTextInputValue('email');

    console.log({name, phone_number, email});
  },
};