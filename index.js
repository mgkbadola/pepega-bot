const mH = require("./messageHandle")
const Bot = new mH.Discord.Client();
const token = process.env.BOT_TOKEN;

Bot.once("ready", () => {
    console.log("PepegaBot is now online.");
});

Bot.on("message", msg => {
    mH.messageHandler(msg, Bot)
});

Bot.login(token).then(() => {
});
