const mH = require("./messageHandle")
const {Client, Intents} = require("discord.js");
const token = process.env.BOT_TOKEN;
const intents = new Intents([
    Intents.NON_PRIVILEGED, // include all non-privileged intents, would be better to specify which ones you actually need
    "GUILD_MEMBERS", // lets you request guild members (i.e. fixes the issue)
]);
const Bot = new Client({ws: {intents}});

Bot.once("ready", () => {
    console.log("PepegaBot is now online.");
});

Bot.on("message", msg => {
    mH.messageHandler(msg, Bot)
});

Bot.login(token).then(() => {
});
