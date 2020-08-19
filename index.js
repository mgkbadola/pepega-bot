//pre-login
const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.once('ready', () => {
    console.log('PepegaBot is now online.');
});
const token = 'NzEyMTQ5MDM3NTcwMDY0NDQ0.XsOTlQ.RA0CyyZGCU-dRyuuu_C9GjVKd6w';

//check whether string contains these words
function contains(target, pattern) {
    let value = 0;
    pattern.forEach(function (word) {
        value = value + target.includes(word);
    });
    return (value >= 1)
}

//ZULUL prompts
let z = ['zulul', 'allo', 'vj emmie', 'supa', 'watafak', 'action is coming', 'gwa', 'know da', 'commando', 'i prefer men',
    'poopoo', 'captain alex', 'subaru', 'warria', 'bruce u', 'uganda', 'ugandan bruce lee', 'wakaliwood', 'v1', 'vi von',
    'vi won', 'we won', 'vroom', 'expect the unexpectable', 'y are u gae'];

const prefix = '!';
Bot.on('message', msg=> {

    //emotes
    let orange = []
    orange[0] = Bot.emojis.cache.get("730338381086588928").toString();
    orange[1] = Bot.emojis.cache.get("730338380851839056").toString();
    orange[2] = Bot.emojis.cache.get("730338381204291637").toString();
    orange[3] = Bot.emojis.cache.get("730338380814090331").toString();
    orange[4] = Bot.emojis.cache.get("730338380226756640").toString();
    orange[5] = Bot.emojis.cache.get("730338380709232672").toString();
    orange[6] = Bot.emojis.cache.get("730338380700844095").toString();
    orange[7] = Bot.emojis.cache.get("730338381044645918").toString();
    orange[8] = Bot.emojis.cache.get("730338380789055530").toString();
    orange[9] = Bot.emojis.cache.get("726460408441077810").toString();

    let kekega = []
    kekega[0] = Bot.emojis.cache.get("729533827768254557").toString();
    kekega[1] = Bot.emojis.cache.get("729533828007198763").toString();
    kekega[2] = Bot.emojis.cache.get("729533827747151874").toString();
    kekega[3] = Bot.emojis.cache.get("729533827688431638").toString();
    kekega[4] = Bot.emojis.cache.get("729533827701014599").toString();
    kekega[5] = Bot.emojis.cache.get("729533827596419170").toString();
    kekega[6] = Bot.emojis.cache.get("729533828103667752").toString();
    kekega[7] = Bot.emojis.cache.get("729533828171038830").toString();
    kekega[8] = Bot.emojis.cache.get("729533827810328600").toString();
    kekega[9] = Bot.emojis.cache.get("718512084157202472").toString();

    let kektff = []
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

    let gun = []
    gun[0] = Bot.emojis.cache.get("738769444523737207").toString();
    gun[1] = Bot.emojis.cache.get("738769444091985941").toString();

    let omegaluls = []
    omegaluls[0] = Bot.emojis.cache.get("700557688022630511").toString();//OMEGALUL
    omegaluls[1] = Bot.emojis.cache.get("712701478787088524").toString(); //smolOME

    let fat = []
    fat[0] = Bot.emojis.cache.get("738775043831627947").toString();
    fat[1] = Bot.emojis.cache.get("738775043860988004").toString();
    fat[2] = Bot.emojis.cache.get("738775044070703205").toString();

    let forhd = Bot.emojis.cache.get("711862298196705320").toString(); //4Head
    let zulul = Bot.emojis.cache.get("712738743395811401").toString(); //ZULUL
    let kekw = Bot.emojis.cache.get("700557146697367582").toString(); //KEKW
    let pepelook = Bot.emojis.cache.get("713340037713887272").toString(); //pepeLook
    let mc = Bot.emojis.cache.get("713340037043060766").toString(); //Mega Subscriber Pepeg
    let pog = Bot.emojis.cache.get("712180552408760351").toString(); //Pog
    let ppscoots = Bot.emojis.cache.get("713344557575700530").toString(); //Pepescoots
    let doggie = Bot.emojis.cache.get("713754840865701958").toString(); //Dogege
    let knioY = Bot.emojis.cache.get("714824198299582486").toString(); //Yoink
    let pepeg = Bot.emojis.cache.get("711091239667105842").toString(); //Pepeg
    let gaben = Bot.emojis.cache.get("714826598355828736").toString(); //GabeN
    let bear = Bot.emojis.cache.get("722749179931262997").toString(); //PedoBear
    let wk = Bot.emojis.cache.get("722754412795265106").toString(); //Wraith King GIF
    let pandit = Bot.emojis.cache.get("734405304179228792").toString();
    let flushed = Bot.emojis.cache.get("738348662471524472").toString();

    let c = msg.content.toString();

    //commands
    if (c[0] === '!') {
        let t = msg.content.substring(prefix.length).split(" ");
        switch (t[0].toLowerCase()) {
            //8ball - Command under construction :D
            case 'elp':
            case 'help':
                let command_array = ['!twitch', 'code', 'bp', 'doggie', 'mc', 'kektff',
                    'kekega', 'bulldog/bdog', 'kekw/etu', 'choose/prefer/pick/choice',
                    'ome', 'allo', 'myiq', 'leddit/reddit', 'yt/youtube', 'soundcloud',
                    'pepega/pepege/pepeg', 'userinfo', 'yeezus', 'bruoh', 'orangey',
                    'pandit/8ball', 'showall', 'shadap']
                if(msg.guild.name === 'Gush Panda\'s Baking Club')
                    command_array.push('starter/sourdough')
                command_array = command_array.sort()
                const commands = new Discord.MessageEmbed()
                    .setTitle('Commands')
                    .setColor(0x696969)
                    .addField('List', `\`${command_array.join('\`, \`!')}\``, true)
                msg.channel.send(commands)
                break
            case 'sourdough':
            case 'starter':
                if(msg.guild.name === 'Gush Panda\'s Baking Club')
                    msg.member.send("All of my followers (in the future Subscribers) will get access to my " +
                        "sourdough-recipes channel and more importantly, an exclusive help and guidance directly from " +
                        "me in the `#starter-making-help` channel: <https://discord.gg/Kzb4eug>.\n"+"~**Gush Panda**")
                break
            case 'twitch':
                let channel = msg.guild.name
                let link = ""
                switch (channel) {
                    case 'Gush Panda\'s Baking Club':
                        link = "https://www.twitch.tv/gush_panda";
                        break
                    case 'The BONE ZONE':
                        link = "https://www.twitch.tv/devzz";
                        break
                    case 'PEPEGAS ASSEMBLE':
                        link = "https://www.twitch.tv/immortalyse";
                        break
                    case 'Emote yoinking place':
                        link = "https://www.twitch.tv/xshampoo_";
                        break
                    case 'F8\'s KINGDOM':
                        link = "https://www.twitch.tv/f8_dota";
                        break
                    default:
                        link = "https://www.twitch.tv/topachez";
                }
                msg.channel.send(link)
                break
            case 'shadap':
                let shadap = new Discord.MessageAttachment('./assets/shadap.wav')
                msg.channel.send(shadap)
                break
            case 'code':
                let code = new Discord.MessageAttachment('./assets/skeleton_code.js');
                msg.channel.send(code);
                break;
            case 'bp':
                msg.channel.send("Time to spend all my savings! " + pepeg + " " + knioY + " " + gaben + " Wise choice, my child!");
                break;
            case 'doggie':
                msg.channel.send(`I'm a DOGGIE! ${doggie}`);
                let dog = new Discord.MessageAttachment('./assets/doggie.ogg');
                msg.channel.send(dog);
                break;
            case 'mc':
                msg.channel.send('-25$ a month ' + pepelook + '\t' + mc + ' I ELP SIR!');
                break;
            case 'kektff':
                msg.channel.send(kektff[9] + '👇')
                msg.channel.send(kektff[0] + kektff[1] + kektff[2] + '\n'
                    + kektff[3] + kektff[4] + kektff[5] + '\n'
                    + kektff[6] + kektff[7] + kektff[8])
                break;
            case 'kekega':
                msg.channel.send(gun[0] + kekega[9] + gun[1])
                msg.channel.send(kekega[0] + kekega[1] + kekega[2] + '\n'
                    + kekega[3] + kekega[4] + kekega[5] + '\n'
                    + kekega[6] + kekega[7] + kekega[8])
                break;
            case 'bulldog':
            case 'bdog':
                msg.channel.send(fat[0] + '\n' + fat[1] + '\n' + fat[2])
                let heyguys = new Discord.MessageAttachment('./assets/heyguys.ogg');
                msg.channel.send(heyguys)
                break
            case 'kekw':
            case 'etu':
                let etu = new Discord.MessageAttachment('./assets/kekw.ogg');
                msg.channel.send('E TU! ' + kekw);
                msg.channel.send(etu);
                break;
            case 'choose':
            case 'prefer':
            case 'pick':
            case 'choice':
                let n = t.slice(1, t.length).length;
                if (n <= 1) {
                    msg.channel.send("Give options you dumb ~~bitch~~ person " + forhd)
                } else {
                    let i = Math.floor(Math.random() * n + 1);
                    msg.channel.send("I prefer `" + `${t[i]}` + "`!")
                }
                break;
            case 'ome':
                //somehow make it ignore emojis
                msg.channel.messages.fetch({limit: 2}).then(res => {
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
                    msg.channel.send(s)
                });
                break;
            // case 'remindme':
            //     var d = new Date()
            //     msg.channel.send
            //     break
            case 'allo':
                let allo = new Discord.MessageAttachment('./assets/allo.ogg');
                msg.react('712738743395811401');
                msg.channel.send('ALLO! ' + zulul);
                msg.channel.send(allo);
                break;
            case 'myiq':
                let r = Math.floor(Math.random() * 200) + 1;
                msg.reply("Your IQ is " + r + "!");
                break;
            case 'leddit':
            case 'reddit':
                msg.channel.send("https://www.reddit.com/user/topachez");
                break;
            case 'youtube':
            case 'yt':
                msg.channel.send("https://www.youtube.com/channel/UC7Zqy9v4kENk5N5hBfo3Bog");
                break;
            case 'soundcloud':
                msg.channel.send("https://soundcloud.com/topachez");
                break;
            case 'pepeg':
            case 'pepega':
            case 'pepege':
                const admiral_pepeg = new Discord.MessageAttachment('./assets/pepeg.ogg');
                msg.channel.send(admiral_pepeg);
                break;
            case 'userinfo':
                let user = msg.mentions.users.first();
                let member = msg.mentions.members.first();
                if (!user) {
                    user = msg.author
                }
                if (!member) {
                    member = msg.member
                }

                let flag = true;
                if (member.nickname === null)
                    flag = false
                let author = user.username + '#' + user.discriminator
                if (flag)
                    author.concat(' aka ' + member.nickname)

                let roles = member.roles.cache.map(r => r);
                let color = parseInt(roles[0].hexColor.replace('#', '0x'))
                if (roles[0].name !== 'everyone')
                    roles.pop()

                var status = user.presence.status;
                status = status.charAt(0).toUpperCase() + status.slice(1);
                const info = new Discord.MessageEmbed()
                    .setTitle('USER INFORMATION')
                    .setColor(color)
                    .setThumbnail(user.displayAvatarURL())
                    .setAuthor(author)
                    .addField('Status', `Being a ${pepeg} in \`${status}\`  Mode`)
                    //display all roles
                    .addField('Roles', roles.join(' | '), true);
                msg.channel.send(info);
                break;
            case 'yeezus':
                msg.channel.send('who is yeezus?:rolling_eyes::face_with_hand_over_mouth::thinking::yawning_face:\n' +
                    '\n' +
                    'in math: pedo' + bear + bear + '\n' +
                    'in history: pedo' + bear + bear + '\n' +
                    'in art :pedo' + bear + bear + '\n' +
                    'in science: pedo' + bear + bear + '\n' +
                    'in geography: pedo' + bear + bear + '\n');
                msg.channel.send('Just kidding, you kinda cute ngl \n');
                msg.channel.send(flushed);
                break;
            case 'bruoh':
                msg.channel.send('Bruoh\'s cheerleader WK = insta win ' + wk);
                break;
            case 'pandit':
            case '8ball':
                let options = ["Feeling uncertain. Try Again.",
                    "It seems like it.", "No.", "My prediction is in positive light.",
                    "Negative remarks on that thought.", "Please try again.", "Yes.",
                    "Most certainly.", "Heavily unlikely."];
                let index = Math.floor(Math.random() * (options.length));
                msg.channel.send(pandit);
                msg.channel.send('`' + options[index] + '`');
                break;
            case 'orangey':
                msg.channel.send(pepelook + '\t' + orange[9])
                msg.channel.send(orange[0] + orange[1] + orange[2] + '\n'
                    + orange[3] + orange[4] + orange[5] + '\n'
                    + orange[6] + orange[7] + orange[8])
                break
            case 'showall':
                msg.channel.send(msg.guild.emojis.cache.map(e => `${e.toString()}`).join(""));
                break
            case 'tank':
                if (t.length === 1) {
                    msg.channel.send(`
.......................██▄▄▄▄▄▄▄▄▄▄▄▄▄
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`)
                } else if (t.length === 2) {
                    msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`)
                } else if (t.length === 3) {
                    msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣ ${t[2]}
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`)
                }
        }
    }

    //reactions triggers
    else{
        if(contains(c.toLowerCase(),z))
            msg.react('712738743395811401');
        if(c.includes('more like')){
            msg.react('712180552408760351');
            msg.react('713344557575700530');
            msg.channel.send(`React to tell whether it was ${pog} or ${ppscoots}`)
        }
    }
});

//login
Bot.login(token);
