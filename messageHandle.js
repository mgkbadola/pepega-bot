const Discord = require("discord.js");
const fun = require('./functions')
const guildmems = ["PepegaBot",
    "topachez",
    "Raldy",
    "Bulldaddy",
    "Bruoh",
    "Yeezus",
    "OrangeyOrange",
    "Rythm",
    "5AM",
    "piquantelk",
    "Dank Memer",
    "JohnnyMilos",
    "DatGuyVJ",
    "Mr Ares",
    "burr1to",
    "shampoo",
    "Artour Shelby",
    "Hettor",
    "SimpBot",
    "ffion",
    "TriOPerA",
    "cherryblossom18"]
module.exports =
{
    messageHandler: function (msg, Bot) {
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
        gun[0] = Bot.emojis.cache.find(emote => emote.name === 'gunL').toString();
        gun[1] = Bot.emojis.cache.find(emote => emote.name === 'gunR').toString();

        let omegaluls = [];
        omegaluls[0] = Bot.emojis.cache.find(emote => emote.name === 'OMEGALUL').toString();
        omegaluls[1] = Bot.emojis.cache.find(emote => emote.name === 'smolOME').toString();

        let fat = [];
        fat[0] = Bot.emojis.cache.find(emote => emote.name === 'FatHead').toString();
        fat[1] = Bot.emojis.cache.find(emote => emote.name === 'FatTorso').toString();
        fat[2] = Bot.emojis.cache.find(emote => emote.name === 'FatLegs').toString();

        let pointup = [];
        pointup[0] = Bot.emojis.cache.find(emote => emote.name === 'invis').toString();
        for (let i = 1; i <= 7; i++)
            pointup[i] = Bot.emojis.cache.find(emote => emote.name === `pointup${i}`).toString();

        let yeahbhai = Bot.emojis.cache.find(emote => emote.name === 'YeahBhai').toString();
        let zulul = Bot.emojis.cache.find(emote => emote.name === 'ZULUL').toString();
        let kekw = Bot.emojis.cache.find(emote => emote.name === 'KEKW').toString();
        let pepelook = Bot.emojis.cache.find(emote => emote.name === 'pepeLook').toString();
        let mc = Bot.emojis.cache.find(emote => emote.name === 'admiralMC').toString();
        let doggie = Bot.emojis.cache.find(emote => emote.name === 'DogegeJAM').toString();
        let knioY = Bot.emojis.cache.find(emote => emote.name === 'knioY').toString();
        let pepeg = Bot.emojis.cache.find(emote => emote.name === 'Pepeg').toString();
        let gaben = Bot.emojis.cache.find(emote => emote.name === 'GabeN').toString();
        let wk = Bot.emojis.cache.find(emote => emote.name === 'bruohWK').toString();
        let pandit = Bot.emojis.cache.find(emote => emote.name === 'Panditga').toString();
        let monkaUGun = Bot.emojis.cache.find(emoji => emoji.name === 'monkaUGun');
        let pepeLoser = Bot.emojis.cache.find(emoji => emoji.name === 'pepeLoser');

        let c = msg.content.toString();

        //fun.commands
        if (c[0] === "!") {
            let t = msg.content.substring(1).split(" ");
            switch (t[0].toLowerCase()) {
                case fun.commands[21]:
                case fun.commands[0]:
                    msg.channel.send(pandit).then(() => {
                    });
                    if (t.length === 1)
                        msg.channel.send(`Predict what?`).then(() => {
                        })
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
                        msg.channel.send("`" + options[index] + "`").then(() => {
                        });
                    }
                    break;
                case fun.commands[1]:
                    let allo = new Discord.MessageAttachment("./assets/allo.ogg");
                    msg.channel.send("ALLO! " + zulul).then(() => {
                    });
                    msg.channel.send(allo).then(() => {
                    });
                    break;
                case fun.commands[2]:
                    let uzer = msg.mentions.users.first();
                    if (!uzer)
                        uzer = msg.author
                    msg.channel.send(uzer.displayAvatarURL({dynamic: true})).then(() => {
                    })
                    break
                case fun.commands[7]:
                case fun.commands[3]:
                    msg.channel.send(fat[0] + "\n" + fat[1] + "\n" + fat[2]).then(() => {
                    });
                    let heyguys = new Discord.MessageAttachment("./assets/heyguys.ogg");
                    msg.channel.send(heyguys).then(() => {
                    });
                    break;
                case fun.commands[4]:
                    msg.channel.send(fun.battlepass(pepeg, knioY, gaben)).then(() => {
                    })

                    break;
                case fun.commands[5]:
                    msg.reply(`Welcome to Brazil ${monkaUGun}`)
                    break;
                case fun.commands[6]:
                    msg.channel.send("Bruoh's cheerleader WK = insta win " + wk).then(() => {
                    });
                    break;
                case fun.commands[8]:
                case fun.commands[25]:
                    msg.channel.send(fun.choose(t, yeahbhai)).then(() => {
                    })
                    break;
                case fun.commands[9]:
                    msg.channel.send(`I'm a DOGGIE! ${doggie}`).then(() => {
                    });
                    let dog = new Discord.MessageAttachment("./assets/doggie.ogg");
                    msg.channel.send(dog).then(() => {
                    });
                    break;
                case fun.commands[10]:
                case fun.commands[12]:
                    const command_array = new Discord.MessageEmbed()
                        .setTitle("Help")
                        .setColor(0x696969)
                        .addField("Commands List", `\`${fun.commands.join("`, `")}\``, true);
                    msg.channel.send(command_array).then(() => {
                    });
                    break;
                case fun.commands[15]:
                case fun.commands[11]:
                    let etu = new Discord.MessageAttachment("./assets/kekw.ogg");
                    msg.channel.send("E TU! " + kekw).then(() => {
                    });
                    msg.channel.send(etu).then(() => {
                    });
                    break;
                case fun.commands[13]:
                    msg.channel.send(gun[0] + kekega[0] + gun[1]).then(() => {
                    })

                    msg.channel.send(fun.kekega_lord(kekega)).then(() => {
                    })

                    break;
                case fun.commands[14]:
                    msg.channel.send(pointup[0] + kektff[0] + "\t\t\t\t\t👇").then(() => {
                    })
                    msg.channel.send(fun.bigtff(kektff, pointup)).then(() => {
                    })

                    break;
                case fun.commands[16]:
                case fun.commands[26]:
                    msg.channel.send("https://www.reddit.com/user/topachez").then(() => {
                    })

                    break;
                case fun.commands[17]:
                    msg.channel.send(fun.megasub(pepelook, mc)).then(() => {
                    })

                    break;
                case fun.commands[18]:
                    msg.reply(fun.myiq())

                    break;
                case fun.commands[19]:
                    //somehow make it ignore emojis
                    msg.channel.messages.fetch({limit: 2}).then((res) => {
                        let str = res.last().toString();
                        let ome = []
                        let smome = []
                        let in_emote = false
                        for (let i = 0; i < str.length; i++) {
                            //console.log(`${str[i]} ${i}`)
                            if (str[i] === '<') {
                                in_emote = true
                                //console.log("entered emote")
                            }
                            if (str[i] === '>') {
                                in_emote = false
                                //console.log("exited emote")
                            }
                            if (!in_emote) {
                                if (str[i] === 'o') {
                                    smome.push(i)
                                    //console.log("small o")
                                } else if (str[i] === 'O') {
                                    ome.push(i)
                                    // console.log("big o")
                                }
                            }
                        }
                        //console.log(`${smome.length} ${ome.length}`)
                        let j = 0
                        let k = 0
                        let added = 0
                        let s1 = ''
                        let s2 = ''
                        while (j < ome.length && k < smome.length) {
                            if (ome[j] < smome[k]) {
                                s1 = str.substr(0, ome[j] + added)
                                s2 = str.substr(ome[j] + 1 + added, str.length)
                                str = s1 + omegaluls[0] + s2
                                added += 29
                                j++
                            } else {
                                s1 = str.substr(0, smome[k] + added)
                                s2 = str.substr(smome[k] + 1 + added, str.length)
                                str = s1 + omegaluls[1] + s2
                                added += 28
                                k++
                            }
                        }

                        while (j < ome.length) {
                            s1 = str.substr(0, ome[j] + added)
                            s2 = str.substr(ome[j] + 1 + added, str.length)
                            str = s1 + omegaluls[0] + s2
                            added += 29
                            j++
                        }
                        while (k < smome.length) {
                            s1 = str.substr(0, smome[k] + added)
                            s2 = str.substr(smome[k] + 1 + added, str.length)
                            str = s1 + omegaluls[1] + s2
                            added += 28
                            k++
                        }
                        msg.channel.send(str).then(() => {
                        });
                    });
                    break;
                case fun.commands[20]:
                    msg.channel.send(pepelook + "\t" + orange[0]).then(() => {
                    });
                    msg.channel.send(fun.orangey(orange)).then(() => {
                    });
                    break;
                case fun.commands[22]:
                case fun.commands[23]:
                case fun.commands[24]:
                    const admiral_pepeg = new Discord.MessageAttachment(
                        "./assets/pepeg.ogg"
                    );
                    msg.channel.send(admiral_pepeg).then(() => {
                    });
                    break;
                case fun.commands[27]:
                    let shadap = new Discord.MessageAttachment("./assets/shadap.wav");
                    msg.channel.send(shadap).then(() => {
                    });
                    break;
                case fun.commands[28]:
                    let count = 0
                    let emotearray = msg.guild.emojis.cache.map((e) => `${e.toString()}`)
                    let tempstack = []
                    for (let i = 0; i < emotearray.length; i++) {
                        count = count + emotearray[i].length
                        if (count >= 2000 || i === emotearray.length - 1) {
                            msg.channel.send(tempstack.join("")).then(() => {
                            });
                            tempstack = []
                            count = emotearray[i].length
                        }
                        tempstack.push(emotearray[i])
                    }
                    break;
                case fun.commands[29]:
                    msg.channel.send("https://soundcloud.com/topachez").then(() => {
                    })

                    break;
                case fun.commands[30]:
                case fun.commands[31]:
                    if (msg.guild.name === "Gush Panda's Baking Club")
                        msg.member.send(
                            "All of my followers (in the future Subscribers) will get access to my " +
                            "sourdough-recipes channel and more importantly, an exclusive help and guidance directly from " +
                            "me in the `#starter-making-help` channel: <https://discord.gg/Kzb4eug>.\n" +
                            "~**Gush Panda**"
                        ).then(() => {
                        });
                    break;
                case fun.commands[32]:
                    if (t.length === 1) {
                        msg.channel.send(`
.......................██▄▄▄▄▄▄▄▄▄▄▄▄▄
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`).then(() => {
                        });
                    } else if (t.length === 2) {
                        msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`).then(() => {
                        });
                    } else if (t.length === 3) {
                        msg.channel.send(`
.......................█ ${t[1]} █▄▄▄▄▄▄▄▄▄▄▄▄▄ ➢➣➢➣➢➣ ${t[2]}
........▂▄▅█████████▅▄▃▂
........ ████████████████████
........◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤`).then(() => {
                        });
                    }
                    break
                case fun.commands[33]:
                    msg.channel.send(fun.twitch(msg.guild.name)).then(() => {
                    })
                    break;
                case fun.commands[34]:
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

                    let status = user.presence.status;
                    status = status.charAt(0).toUpperCase() + status.slice(1);
                    const info = new Discord.MessageEmbed()
                        .setTitle("USER INFORMATION")
                        .setColor(color)
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))
                        .setAuthor(author)
                        .addField("Status", `Being a ${pepeg} in \`${status}\`  Mode`)
                        .addField("Roles", roles.join(" | "), true);
                    msg.channel.send(info).then(() => {
                    })

                    break;
                case fun.commands[35]:
                case fun.commands[36]:
                    msg.channel.send("https://www.youtube.com/channel/UC7Zqy9v4kENk5N5hBfo3Bog").then(() => {
                    })

                    break;
                case fun.commands[37]:
                    if (msg.guild.name === 'KeekoSmoke') {
                        let duel = msg.guild.channels.cache.find(channelname => channelname.name === 'duel-logs')
                        duel.messages.fetch().then((res) => {
                            let wins = []
                            let losses = []
                            guildmems.forEach(guildmem => {
                                wins.push({name: guildmem, score: 0})
                                losses.push({name: guildmem, score: 0})
                            })
                            let w = ''
                            let l = ''
                            for (let x of res) {
                                let str = x[1].toString()
                                //console.log(str)
                                w = str.match(/\*.+\*/)[0].replace(/\*/g, '')
                                l = str.match('SER:.+')[0].replace('SER:', '')
                                for (let i in wins) {
                                    if (wins[i].name === w)
                                        wins[i].score++
                                    else if (losses[i].name === l)
                                        losses[i].score++
                                }
                            }
                            let result = '🏆 **TOP WINNERS** 🏆\n'
                            wins = wins.filter((winner) => winner.score > 0)
                            wins = wins.sort(function (a, b) {
                                if (a.score > b.score)
                                    return -1;
                                else if (a.score < b.score)
                                    return 1;
                                else {
                                    if (a.name.toUpperCase() > b.name.toUpperCase())
                                        return -1;
                                    if (a.name.toUpperCase() < b.name.toUpperCase())
                                        return 1;

                                    return 0;
                                }
                            })
                            for (let i in wins) {
                                result += `${wins[i].name}: ${wins[i].score}\n`
                            }
                            result += `${pepeLoser} **TOP LOSERS** ${pepeLoser}\n`
                            losses = losses.filter((loser) => loser.score > 0)
                            losses = losses.sort(function (a, b) {
                                if (a.score > b.score)
                                    return -1;
                                else if (a.score < b.score)
                                    return 1;
                                else {
                                    if (a.name.toUpperCase() > b.name.toUpperCase())
                                        return -1;
                                    if (a.name.toUpperCase() < b.name.toUpperCase())
                                        return 1;

                                    return 0;
                                }
                            })
                            for (let i in losses) {
                                result += `${losses[i].name}: ${losses[i].score}\n`
                            }
                            msg.channel.send(result)
                        })
                    }
                    break
            }
        } else {
            if (fun.contains(c.toLowerCase(), fun.z))
                msg.react("712738743395811401").then(() => {
                });
            if (c.match(/.+ more like .+/g)) {
                msg.react("746646238354735164").then(() => {
                });
                msg.react("713344557575700530").then(() => {
                });
            }
            if (msg.guild.name === 'KeekoSmoke') {
                if (c.includes('winning') || c.includes('wins')) {
                    let f
                    let ff = ''
                    let s
                    let ss = ''
                    let isf = true
                    if (msg.channel.name === 'duel') {
                        for (let guildmem of guildmems)
                            if (c.includes(guildmem)) {
                                if (isf) {
                                    f = c.indexOf(guildmem)
                                    ff = guildmem
                                    isf = false
                                } else {
                                    s = c.indexOf(guildmem)
                                    ss = guildmem
                                    isf = true
                                }
                                if (f && s)
                                    break
                            }
                        if (!c.includes('wins')) {
                            if (f < s)
                                msg.guild.channels.cache.find(ch => ch.name === 'duel-logs').send(`MATCH RESULTS:\nWINNER:**${ff}**\nLOSER:${ss}`)
                            else
                                msg.guild.channels.cache.find(ch => ch.name === 'duel-logs').send(`MATCH RESULTS:\nWINNER:**${ss}**\nLOSER:${ff}`)
                        } else {
                            if (f < s)
                                msg.guild.channels.cache.find(ch => ch.name === 'duel-logs').send(`MATCH RESULTS:\nWINNER:**${ss}**\nLOSER:${ff}`)
                            else
                                msg.guild.channels.cache.find(ch => ch.name === 'duel-logs').send(`MATCH RESULTS:\nWINNER:**${ff}**\nLOSER:${ss}`)
                        }

                    }
                }
            }
        }
    }
}