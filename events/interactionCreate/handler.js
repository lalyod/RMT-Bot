const path = require('path');
const fs = require('fs');

/**
 * 
 * @param {import('discord.js').Interaction} interaction 
 */
module.exports = async (interaction) => {
  const files = fs
    .readdirSync(path.join(__dirname, '../../interactions'))
    .filter(file => file.endsWith('.js'));
  
  for(let file of files){
    let interactionFile = require(`../../interactions/${file}`);
    if(interactionFile.name == interaction.customId){
      interactionFile.run(interaction);
    }
  }
};
