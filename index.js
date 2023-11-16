const { Client, GatewayIntentBits, Collection } = require("discord.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { CommandHandler } = require("djs-commander");
const path = require("path");

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ],
});

client.commands = new Collection();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    new CommandHandler({
      client,
      commandsPath: path.join(__dirname, "commands"),
      eventsPath: path.join(__dirname, "events"),
      validationsPath: path.join(__dirname, "validation"),
    });

    client.login(process.env.TOKEN);
  } catch (err) {
    console.log(err);
  }
}

connect();

module.exports = client;
