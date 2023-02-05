const { Client, IntentsBitField, Partials } = require("discord.js");
const WOK = require("wokcommands");
const path = require("path");
require("dotenv/config");

require("mongoose").set('strictQuery', false);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),
    mongoUri: `mongodb+srv://icyDiscordBot:${process.env.PASS}@bot.haumy.mongodb.net/icyBot?retryWrites=true&w=majority`,
    testServers: ["933407278151909396"],
    botOwners: ["874730179468079159"],
  });
  console.log("The bot is now officialy online and ready!");

  require("./featues/swearingFilter.js")(client);
  require("./featues/linkFilter.js")(client);
  require("./featues/antiPing.js")(client);
});

client.login(process.env.TOKEN);