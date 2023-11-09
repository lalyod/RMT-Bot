module.exports = (interaction, command) => {
  if (command.admin) {
    if (interaction.member.id !== "793991682310799360") {
      interaction.reply({
        content: "You do not have permission to use this command.",
        ephemeral: true,
      });
      return true;
    }
  }
};
