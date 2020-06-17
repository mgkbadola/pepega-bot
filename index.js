//pre-login
const Discord = require('discord.js');
const Bot = new Discord.Client();
Bot.on('ready', ()=>{
    console.log('PepegaBot is now online.');
});
const token = 'NzEyMTQ5MDM3NTcwMDY0NDQ0.XsOTlQ.RA0CyyZGCU-dRyuuu_C9GjVKd6w';

//check whether string contains these words
function contains(target, pattern){
    let value = 0;
    pattern.forEach(function(word){
        value = value + target.includes(word);
    });
    return (value >= 1)
}

//zulul prompts
let z = ['zulul','allo','vj emmie','supa', 'watafak','action is coming','gwa','know da', 'commandos','i prefer men', 'poopoo',
    'captain alex','subaru','warrior','bruce u', 'uganda', 'ugandan bruce lee', 'wakaliwood','v1', 'vi von','vi won', 'we won' ];

const prefix = '!';
Bot.on('message', msg=>{

    //emotes
    let ome = msg.guild.emojis.cache.get("700557688022630511").toString(); //OMEGALUL
    let omes = msg.guild.emojis.cache.get("712701478787088524").toString(); //smolOME
    let forhd = msg.guild.emojis.cache.get("711862298196705320").toString(); //4Head
    let zulul = msg.guild.emojis.cache.get("712738743395811401").toString();
    let kekw = msg.guild.emojis.cache.get("700557146697367582").toString();
    let pepelook = msg.guild.emojis.cache.get("713340037713887272").toString();
    let mc = msg.guild.emojis.cache.get("713340037043060766").toString();
    let pog = msg.guild.emojis.cache.get("712180552408760351").toString();
    let ppscoots = msg.guild.emojis.cache.get("713344557575700530").toString();
    let doggie = msg.guild.emojis.cache.get("713754840865701958").toString();
    let knioY = msg.guild.emojis.cache.get("714824198299582486").toString();
    let pepeg = msg.guild.emojis.cache.get("711091239667105842").toString();
    let gaben = msg.guild.emojis.cache.get("714826598355828736").toString();
    let bear = msg.guild.emojis.cache.get("722749179931262997").toString();
    let wk = msg.guild.emojis.cache.get("722754412795265106").toString();
    
    let c= msg.content.toString();

    //commands
    if(c[0]==='!') {
        let t = msg.content.substring(prefix.length).split(" ");
        switch (t[0].toLowerCase()) {
            //8ball - Command under construction :D
            case 'bp':
                msg.channel.send("Time to spend all my savings! " + pepeg + knioY + gaben + " Wise choice, my child!");
                break;
            case 'doggie':
                msg.channel.send("I'm a DOGGIE! " + doggie);
                let dog = new Discord.MessageAttachment('./assets/doggie.ogg');
                msg.channel.send(dog);
                break;
            case 'mc':
                msg.channel.send('-25$ a month '+pepelook +'\t'+ mc +' I ELP SIR!');
                break;
            case '8ball':
                msg.channel.send('Command under construction!');
                break;
            case 'kekega':
                let kekega = new Discord.MessageAttachment('./assets/kekega_lord.png');
                msg.channel.send(kekega);
                break;
            case 'kekw':
            case 'etu':
                let etu = new Discord.MessageAttachment('./assets/kekw.ogg');
                msg.channel.send('E TU! '+ kekw);
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
                    s = s.split("O").join(ome).split("o").join(omes);
                    msg.channel.send(s)
                });
                break;
            case 'allo':
                let allo = new Discord.MessageAttachment('./assets/allo.ogg');
                msg.react('712738743395811401');
                msg.channel.send('ALLO! '+ zulul);
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
                var status = user.presence.status;
                status = status.charAt(0).toUpperCase() + status.slice(1);
                const info = new Discord.MessageEmbed()
                    .setTitle('USER INFORMATION')
                    .setColor(0xe1e1e1)
                    .setThumbnail(user.displayAvatarURL())
                    .setAuthor(user.username + '#' + user.discriminator + ' aka ' + member.nickname)
                    .addField('Status', 'Being a Bebeg in `' + status + ' Mode`')
                    //display all roles
                    .addField('Roles', member.roles.cache.map(r => `${r}`).join(' | '), true);
                msg.channel.send(info);
                break;
            case 'yeezus':
                msg.channel.send('who is yeezus?:rolling_eyes::face_with_hand_over_mouth::thinking::yawning_face:\n' +
                    '\n' +
                    'in math: pedo'+ bear + bear + '\n' +
                    'in history: pedo'+ bear + bear + '\n' +
                    'in art :pedo'+ bear + bear + '\n'+
                    'in science: pedo'+ bear + bear + '\n' +
                    'in geography: pedo'+ bear + bear + '\n');
                msg.channel.send('Just kidding, you kinda cute ngl \n   :flushed:\n:point_right::point_left:');
                break;
            case 'bruoh':
                msg.channel.send('Bruoh\'s cheerleader WK = insta win ' + wk);
                break;
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
