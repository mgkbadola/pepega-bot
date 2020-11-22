//pre-login
const Discord = require("discord.js");
const Bot = new Discord.Client();
const fun = require("./functions")
Bot.once("ready", () => {
    console.log("PepegaBot is now online.");
    // Set the client user's activity
    // Bot.user
    //     .setActivity(`Dough videos`, {
    //       type: "WATCHING",
    //     })
    //     .then((presence) =>
    //         console.log(`Activity set to ${presence.activities[0].name}`)
    //     )
    //     .catch(console.error);
});
const token = process.env.BOT_TOKEN;

//check whether string contains these words
function contains(target, pattern) {
    let value = 0;
    pattern.forEach(function (word) {
        value = value + target.includes(word);
    });
    return value >= 1;
}

//ZULUL prompts
let z = [
    "zulul",
    "allo",
    "vj emmie",
    "supa",
    "watafak",
    "action is coming",
    "gwa",
    "know da",
    "commando",
    "i prefer men",
    "poopoo",
    "poo poo",
    "captain alex",
    "subaru",
    "warria",
    "bruce u",
    "uganda",
    "ugandan bruce lee",
    "wakaliwood",
    "v1",
    "vi von",
    "vi won",
    "we won",
    "vroom",
    "expect the unexpectable",
    "y are u gae",
    "🇺🇬",
    "brazil"
];

const prefix = "!";
Bot.on("message", msg => {
    /*if (msg.mentions.users.size > 0) {
      for (let new1 of msg.mentions.members.values()) {
        switch (new1.presence.status) {
          case "idle":
            if (msg.author === Bot.user) return;
            msg.react("🌙");
            break;
          case "dnd":
            if (msg.author === Bot.user) return;
            msg.react("⛔");
            break;
          case "offline":
            if (msg.author === Bot.user) return;
            msg.react("🔴");
            break;
        }
      }
    }*/

    //emotes
    let orange = [];
    orange[0] = Bot.emojis.cache.find(emote => emote.name === 'Flushed_Orange').toString();
    for (let i = 1; i <= 9; i++)
        orange[i] = Bot.emojis.cache.find(emote => emote.name === `Orange${i}`).toString();

    let kekega = [];
    kekega[0] = Bot.emojis.cache.find(emote => emote.name === `Kekega`).toString();
    for (let i = 1; i <= 9; i++)
        kekega[i] = Bot.emojis.cache.find(emote => emote.name === `KEKEGALord${i}`).toString();

    let kektff = [];
    kektff[0] = Bot.emojis.cache.find(emote => emote.name === 'KEKTFF').toString();
    for (let i = 1; i <= 9; i++)
        kektff[i] = Bot.emojis.cache.find(emote => emote.name === `KEKTFF${i}`).toString();

    let gun = [];
    gun[0] = Bot.emojis.cache.get("738769444523737207").toString();
    gun[1] = Bot.emojis.cache.get("738769444091985941").toString();

    let omegaluls = [];
    omegaluls[0] = Bot.emojis.cache.get("700557688022630511").toString(); //OMEGALUL
    omegaluls[1] = Bot.emojis.cache.get("712701478787088524").toString(); //smolOME

    let fat = [];
    fat[0] = Bot.emojis.cache.get("738775043831627947").toString();
    fat[1] = Bot.emojis.cache.get("738775043860988004").toString();
    fat[2] = Bot.emojis.cache.get("738775044070703205").toString();

    let pointup = [];
    pointup[0] = Bot.emojis.cache.find(emote => emote.name === 'invis').toString();
    for (let i = 1; i <= 7; i++)
        pointup[i] = Bot.emojis.cache.find(emote => emote.name === `pointup${i}`).toString();

    let forhd = Bot.emojis.cache.get("711862298196705320").toString(); //4Head
    let zulul = Bot.emojis.cache.get("712738743395811401").toString(); //ZULUL
    let kekw = Bot.emojis.cache.get("700557146697367582").toString(); //KEKW
    let pepelook = Bot.emojis.cache.get("713340037713887272").toString(); //pepeLook
    let mc = Bot.emojis.cache.get("713340037043060766").toString(); //Mega Subscriber Pepeg
    //let ppscoots = Bot.emojis.cache.get("713344557575700530").toString(); //Pepescoots
    let doggie = Bot.emojis.cache.get("713754840865701958").toString(); //Dogege
    let knioY = Bot.emojis.cache.get("714824198299582486").toString(); //Yoink
    let pepeg = Bot.emojis.cache.get("711091239667105842").toString(); //Pepeg
    let gaben = Bot.emojis.cache.get("714826598355828736").toString(); //GabeN
    let bear = Bot.emojis.cache.get("722749179931262997").toString(); //PedoBear
    let wk = Bot.emojis.cache.get("722754412795265106").toString(); //Wraith King GIF
    let pandit = Bot.emojis.cache.get("734405304179228792").toString();//Panditge
    let flushed = Bot.emojis.cache.get("738348662471524472").toString();//Awkward_Flushed
    //let gottem = Bot.emojis.cache.get("746646238354735164").toString()
    let monkaUGun = Bot.emojis.cache.find(emoji => emoji.name === 'monkaUGun');

    let c = msg.content.toString();

    //commands
    if (c[0] === "!") {
        let t = msg.content.substring(prefix.length).split(" ");
        switch (t[0].toLowerCase()) {
            case "elp":
            case "help":
                let command_array = [
                    "!twitch",
                    "avatar",
                    "brazil",
                    "bp",
                    "doggie",
                    "mc",
                    "kektff",
                    "kekega",
                    "bulldog/bdog",
                    "kekw/etu",
                    "choose/prefer",
                    "ome",
                    "allo",
                    "myiq",
                    "leddit/reddit",
                    "yt/youtube",
                    "soundcloud",
                    "pepega/pepege/pepeg",
                    "userinfo",
                    "yeezus",
                    "bruoh",
                    "orangey",
                    "pandit/8ball",
                    "showall",
                    "shadap",
                ];
                if (msg.guild.name === "Gush Panda's Baking Club")
                    command_array.push("starter/sourdough");
                command_array = command_array.sort();
                const commands = new Discord.MessageEmbed()
                    .setTitle("Commands")
                    .setColor(0x696969)
                    .addField("List", `\`${command_array.join("`, `!")}\``, true);
                msg.channel.send(commands);
                break;
            case "sourdough":
            case "starter":
                if (msg.guild.name === "Gush Panda's Baking Club")
                    msg.member.send(
                        "All of my followers (in the future Subscribers) will get access to my " +
                        "sourdough-recipes channel and more importantly, an exclusive help and guidance directly from " +
                        "me in the `#starter-making-help` channel: <https://discord.gg/Kzb4eug>.\n" +
                        "~**Gush Panda**"
                    );
                break;
            case "twitch":
                msg.channel.send(fun.twitch(msg.guild.name))
                break;
            case "brazil":
                msg.reply(`Welcome to Brazil ${monkaUGun}`)
                break;
            case "shadap":
                let shadap = new Discord.MessageAttachment("./assets/shadap.wav");
                msg.channel.send(shadap);
                break;
            case "bp":
                msg.channel.send(fun.battlepass(pepeg, knioY, gaben))

                break;
            case "doggie":
                msg.channel.send(`I'm a DOGGIE! ${doggie}`);
                let dog = new Discord.MessageAttachment("./assets/doggie.ogg");
                msg.channel.send(dog);
                break;
            case "mc":
                msg.channel.send(fun.megasub(pepelook, mc))

                break;
            case "kektff":
                msg.channel.send(pointup[0] + kektff[0] + "\t\t\t\t\t👇")
                msg.channel.send(fun.bigtff(kektff, pointup))

                break;
            case "kekega":
                msg.channel.send(gun[0] + kekega[0] + gun[1])

                msg.channel.send(fun.kekega_lord(kekega))

                break;
            case "bulldog":
            case "bdog":
                msg.channel.send(fat[0] + "\n" + fat[1] + "\n" + fat[2]);
                let heyguys = new Discord.MessageAttachment("./assets/heyguys.ogg");
                msg.channel.send(heyguys);
                break;
            case "kekw":
            case "etu":
                let etu = new Discord.MessageAttachment("./assets/kekw.ogg");
                msg.channel.send("E TU! " + kekw);
                msg.channel.send(etu);
                break;
            case "choose":
            case "prefer":
                msg.channel.send(fun.choose(t, forhd))

                break;
            case "ome":
                //somehow make it ignore emojis
                msg.channel.messages.fetch({limit: 2}).then((res) => {
                    let s = res.last().toString();
                    // let array1 = s.match(/<[:a-zA-Z:0-9]+>/gm)
                    // let array2 = s.split(/<[:a-zA-Z:0-9]+>/gm)
                    // console.log(array1)
                    // console.log(array2)
                    // for(str in array2){
                    //     str.split("O").join(omegaluls[0]).split("o").join(omegaluls[1])
                    // }
                    // for(let i=0; i<array1.length; i++){
                    //     array2[i].concat(array1[i])
                    // }
                    // s = array2.join("")
                    s = s.split("O").join(omegaluls[0]).split("o").join(omegaluls[1]);
                    msg.channel.send(s);
                });
                break;
            case "allo":
                let allo = new Discord.MessageAttachment("./assets/allo.ogg");
                // msg.react("712738743395811401");
                msg.channel.send("ALLO! " + zulul);
                msg.channel.send(allo);
                break;
            case "myiq":
                msg.reply(fun.myiq())

                break;
            case "leddit":
            case "reddit":
                msg.channel.send("https://www.reddit.com/user/topachez")

                break;
            case "youtube":
            case "yt":
                msg.channel.send("https://www.youtube.com/channel/UC7Zqy9v4kENk5N5hBfo3Bog")

                break;
            case "soundcloud":
                msg.channel.send("https://soundcloud.com/topachez")

                break;
            case "pepeg":
            case "pepega":
            case "pepege":
                const admiral_pepeg = new Discord.MessageAttachment(
                    "./assets/pepeg.ogg"
                );
                msg.channel.send(admiral_pepeg);
                break;
            case "userinfo":
                let user = msg.mentions.users.first();
                let member = msg.mentions.members.first();
                if (!user)
                    user = msg.author;

                if (!member)
                    member = msg.member;

                let flag = true;
                if (member.nickname === null)
                    flag = false;

                let author = user.username + "#" + user.discriminator;
                if (flag)
                    author.concat(" aka " + member.nickname);

                let roles = member.roles.cache.map((r) => r);
                let color = parseInt(roles[0].hexColor.replace("#", "0x"));
                if (roles[0].name !== "everyone") roles.pop();

                var status = user.presence.status;
                status = status.charAt(0).toUpperCase() + status.slice(1);
                const info = new Discord.MessageEmbed()
                    .setTitle("USER INFORMATION")
                    .setColor(color)
                    .setThumbnail(user.displayAvatarURL())
                    .setAuthor(author)
                    .addField("Status", `Being a ${pepeg} in \`${status}\`  Mode`)
                    //display all roles
                    .addField("Roles", roles.join(" | "), true);
                msg.channel.send(info)

                break;
            case "yeezus":
                msg.channel.send(fun.yeezus(bear))

                msg.channel.send("Just kidding, you kinda cute ngl \n");
                msg.channel.send(flushed)
                break;
            case "bruoh":
                msg.channel.send("Bruoh's cheerleader WK = insta win " + wk);
                break;
            case "pandit":
            case "8ball":
                msg.channel.send(pandit);
                if (t.length === 1)
                    msg.channel.send(`Predict what?`)
                else {
                    let options = [
                        "Feeling uncertain. Try Again.",
                        "It seems like it.",
                        "No.",
                        "My prediction is in positive light.",
                        "Negative remarks on that thought.",
                        "Please try again.",
                        "Yes.",
                        "Most certainly.",
                        "My sources say no.",
                        "Affirmative.",
                        "Negative.",
                        "Yep.",
                        "Nope.",
                        "Can't decide at the moment.",
                        "My brain is lagging, try to ask again.",
                        "Heavily unlikely.",
                    ];
                    let index = Math.floor(Math.random() * options.length);
                    msg.channel.send("`" + options[index] + "`");
                }
                break;
            case "orangey":
                msg.channel.send(pepelook + "\t" + orange[0]);
                msg.channel.send(fun.orangey(orange));
                break;
            case "showall":
                let count = 0
                let emotearray = msg.guild.emojis.cache.map(e => `${e.toString()}`)
                let tempstack = []
                for (let i = 0; i < emotearray.length; i++) {
                    count = count + emotearray[i].length
                    if (count >= 2000 || i === emotearray.length - 1) {
                        msg.channel.send(tempstack.join(""));
                        tempstack = []
                        count = emotearray[i].length
                    }
                    tempstack.push(emotearray[i])
                }
                break;
            case 'avatar':
                let uzer = msg.mentions.users.first();
                if (!uzer)
                    uzer = msg.author
                msg.channel.send(uzer.displayAvatarURL())
                break
            case "tank":
                if (t.length === 1) {
                    msg.channel.send(`
.......................██▄▄▄▄▄▄▄▄▄▄▄▄▄
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`);
                } else if (t.length === 2) {
                    msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`);
                } else if (t.length === 3) {
                    msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣ ${t[2]}
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`);
                }
                break
            /*case "roulette":
              const bullet = Math.floor(Math.random() * 6) + 1
              const auth = msg.author
              msg.channel.send('Pick a number from `1 2 3 4 5 6`')*/
        }

    }

    //reactions triggers
    else {
        if (contains(c.toLowerCase(), z))
            msg.react("712738743395811401");

        if (c.includes("more like")) {
            msg.react("746646238354735164");
            msg.react("713344557575700530");
        }
    }
});

//login
Bot.login(token);
