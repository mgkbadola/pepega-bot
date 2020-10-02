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
const token = "NzEyMTQ5MDM3NTcwMDY0NDQ0.XsOTlQ.RA0CyyZGCU-dRyuuu_C9GjVKd6w";

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
];

const prefix = "!";
Bot.on("message", msg => {

  //emotes
  let orange = [];
  orange[0] = Bot.emojis.cache.get("761478419933691915").toString();
  orange[1] = Bot.emojis.cache.get("761478488736792586").toString();
  orange[2] = Bot.emojis.cache.get("761478512166567968").toString();
  orange[3] = Bot.emojis.cache.get("761478551148953620").toString();
  orange[4] = Bot.emojis.cache.get("761478570773315634").toString();
  orange[5] = Bot.emojis.cache.get("761478587076444162").toString();
  orange[6] = Bot.emojis.cache.get("761478612670480435").toString();
  orange[7] = Bot.emojis.cache.get("761478640499425300").toString();
  orange[8] = Bot.emojis.cache.get("761478657004011551").toString();
  orange[9] = Bot.emojis.cache.get("726460408441077810").toString();

  let kekega = [];
  kekega[0] = Bot.emojis.cache.get("761479705920405514").toString();
  kekega[1] = Bot.emojis.cache.get("761479725297958922").toString();
  kekega[2] = Bot.emojis.cache.get("761479750819774466").toString();
  kekega[3] = Bot.emojis.cache.get("761479770214236161").toString();
  kekega[4] = Bot.emojis.cache.get("761479795275071488").toString();
  kekega[5] = Bot.emojis.cache.get("761479814577520661").toString();
  kekega[6] = Bot.emojis.cache.get("761479833892683777").toString();
  kekega[7] = Bot.emojis.cache.get("761479858936479744").toString();
  kekega[8] = Bot.emojis.cache.get("761479882999857152").toString();
  kekega[9] = Bot.emojis.cache.get("718512084157202472").toString();

  let kektff = [];
  kektff[0] = Bot.emojis.cache.get("731156841819537439").toString();
  kektff[1] = Bot.emojis.cache.get("731156841886646373").toString();
  kektff[2] = Bot.emojis.cache.get("731156841932914740").toString();
  kektff[3] = Bot.emojis.cache.get("731156841840771165").toString();
  kektff[4] = Bot.emojis.cache.get("731156842222321734").toString();
  kektff[5] = Bot.emojis.cache.get("731156842302013490").toString();
  kektff[6] = Bot.emojis.cache.get("731156844214747246").toString();
  kektff[7] = Bot.emojis.cache.get("731156842151149619").toString();
  kektff[8] = Bot.emojis.cache.get("731156842411065434").toString();
  kektff[9] = Bot.emojis.cache.get("738773225999171706").toString();

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

  let forhd = Bot.emojis.cache.get("711862298196705320").toString(); //4Head
  let zulul = Bot.emojis.cache.get("712738743395811401").toString(); //ZULUL
  let kekw = Bot.emojis.cache.get("700557146697367582").toString(); //KEKW
  let pepelook = Bot.emojis.cache.get("713340037713887272").toString(); //pepeLook
  let mc = Bot.emojis.cache.get("713340037043060766").toString(); //Mega Subscriber Pepeg
  //let pog = Bot.emojis.cache.get("712180552408760351").toString(); //Pog
  let ppscoots = Bot.emojis.cache.get("713344557575700530").toString(); //Pepescoots
  let doggie = Bot.emojis.cache.get("713754840865701958").toString(); //Dogege
  let knioY = Bot.emojis.cache.get("714824198299582486").toString(); //Yoink
  let pepeg = Bot.emojis.cache.get("711091239667105842").toString(); //Pepeg
  let gaben = Bot.emojis.cache.get("714826598355828736").toString(); //GabeN
  let bear = Bot.emojis.cache.get("722749179931262997").toString(); //PedoBear
  let wk = Bot.emojis.cache.get("722754412795265106").toString(); //Wraith King GIF
  let pandit = Bot.emojis.cache.get("734405304179228792").toString();//Panditge
  let flushed = Bot.emojis.cache.get("738348662471524472").toString();//Awkward_Flushed
  //let kreygasm = Bot.emojis.cache.get("743161208022237234").toString()
  let gottem = Bot.emojis.cache.get("746646238354735164").toString()

  let c = msg.content.toString();

  //commands
  if (msg.mentions.users.size > 0) {
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
  }
  if (c[0] === "!") {
    let t = msg.content.substring(prefix.length).split(" ");
    switch (t[0].toLowerCase()) {
      case "elp":
      case "help":
        let command_array = [
          "!twitch",
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
            .then(() => console.log("twitch command executed!"))
        break;
      case "shadap":
        let shadap = new Discord.MessageAttachment("./assets/shadap.wav");
        msg.channel.send(shadap);
        break;
        // case "code":
        //   let code = new Discord.MessageAttachment("./assets/skeleton_code.js");
        //   msg.channel.send(code);
        //   break;
      case "bp":
        msg.channel.send(fun.battlepass(pepeg, knioY, gaben))
            .then(() => console.log("bp command executed!"))
        break;
      case "doggie":
        msg.channel.send(`I'm a DOGGIE! ${doggie}`);
        let dog = new Discord.MessageAttachment("./assets/doggie.ogg");
        msg.channel.send(dog);
        break;
      case "mc":
        msg.channel.send(fun.megasub(pepelook, mc))
            .then(() => console.log("mc command executed!"));
        break;
      case "kektff":
        msg.channel.send(kektff[9] + "👇")
            .then(() => console.log("small kektff"));
        msg.channel.send(fun.bigtff(kektff))
            .then(() => console.log("big kektff, all executed!"));
        break;
      case "kekega":
        msg.channel.send(gun[0] + kekega[9] + gun[1])
            .then(() => console.log("kekega"));
        msg.channel.send(fun.kekega_lord(kekega))
            .then(() => console.log("kekega lord, all executed!"));
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
            .then(() => console.log("choose/prefer command executed!"));
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
            .then(() => console.log("myiq command executed!"));
        break;
      case "leddit":
      case "reddit":
        msg.channel.send("https://www.reddit.com/user/topachez")
            .then(() => console.log("reddit command executed!"));
        break;
      case "youtube":
      case "yt":
        msg.channel.send("https://www.youtube.com/channel/UC7Zqy9v4kENk5N5hBfo3Bog")
            .then(() => console.log("yt command executed!"));
        break;
      case "soundcloud":
        msg.channel.send("https://soundcloud.com/topachez")
            .then(() => console.log("soundcloud command executed!"));
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
            .then(() => console.log("userinfo command executed!"));
        break;
      case "yeezus":
        msg.channel.send(fun.yeezus(bear))
            .then(() => console.log("first part"));
        msg.channel.send("Just kidding, you kinda cute ngl \n");
        msg.channel.send(flushed).then(() => console.log("yeezus command executed!"));
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
        msg.channel.send(pepelook + "\t" + orange[9]);
        msg.channel.send(
            orange[0] +
            orange[1] +
            orange[2] +
            "\n" +
            orange[3] +
            orange[4] +
            orange[5] +
            "\n" +
            orange[6] +
            orange[7] +
            orange[8]
        );
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
    }
  }

  //reactions triggers
  else {
    if (contains(c.toLowerCase(), z))
      msg.react("712738743395811401");

    if (c.includes("more like")) {
      msg.react("746646238354735164");
      msg.react("713344557575700530");
      msg.channel.send(`React to tell whether it was ${gottem} or ${ppscoots}`);
    }
  }
});

//login
Bot.login(token);
