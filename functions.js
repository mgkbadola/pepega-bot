module.exports = {
    contains: function (target, pattern) {
        let value = 0;
        pattern.forEach(function (word) {
            value = value + target.includes(word);
        });
        return value >= 1;
    },
    twitch: function (channel) {
        let link = "https://www.twitch.tv/";
        switch (channel) {
            case "Gush Panda's Baking Club":
                link += "gush_panda";
                break;
            case "The BONE ZONE":
                link += "devzz";
                break;
            case "PEPEGAS ASSEMBLE":
                link += "immortalyse";
                break;
            case "Emote yoinking place":
                link += "xshampoo_";
                break;
            case "F8's KINGDOM":
                link += "f8_dota";
                break;
            default:
        }
        return link;
    },
    battlepass: function (pepeg, yoink, gaben) {
        return ("Time to spend all my savings! " +
            pepeg +
            " " +
            yoink +
            " " +
            gaben +
            " Wise choice, my child!")
    },
    megasub: function (pepelook, mc) {
        return `-25$ a month ${pepelook} \t ${mc} I ELP SIR!`
    },
    bigtff: function (kektff, pointup) {
        return (pointup[0] + pointup[1] + pointup[0] + kektff[1] + kektff[2] + kektff[3] + "\n" +
            pointup[2] + pointup[3] + pointup[4] + kektff[4] + kektff[5] + kektff[6] + "\n" +
            pointup[5] + pointup[6] + pointup[7] + kektff[7] + kektff[8] + kektff[9])
    },
    kekega_lord: function (kekega) {
        return (kekega[1] + kekega[2] + kekega[3] + "\n" +
            kekega[4] + kekega[5] + kekega[6] + "\n" +
            kekega[7] + kekega[8] + kekega[9])
    },
    orangey: function (orange) {
        return (orange[1] + orange[2] + orange[3] + "\n" +
            orange[4] + orange[5] + orange[6] + "\n" +
            orange[7] + orange[8] + orange[9])
    },
    choose: function (options, yeahbhai) {
        let n = options.slice(1, options.length).length;
        if (n <= 1) {
            return (`Give options you dummy! ${yeahbhai}`);
        } else {
            let i = Math.floor(Math.random() * n + 1);
            return (`I would prefer ${options[i]}!`);
        }
    },
    myiq: function () {
        let r = Math.floor(Math.random() * 200) + 1;
        return (`Your IQ is ${r}!`);
    },
    commands: ["8ball", "allo", "avatar", "bdog", "bp", "brazil", "bruoh", "bulldog", "choose", "doggie", "elp", "etu",
        "help", "kekega", "kektff", "kekw", "leddit", "mc", "myiq", "ome", "orangey", "pandit", "pepeg", "pepega",
        "pepege", "prefer", "reddit", "shadap", "showall", "soundcloud", "sourdough", "starter", "tank", "twitch",
        "userinfo", "youtube", "yt"],
    z: [
        "zulul", "allo", "vj emmie", "supa", "watafak", "action is coming", "gwa", "know da", "commando",
        "i prefer men", "poopoo", "poo poo", "captain alex", "subaru", "warria", "bruce u", "uganda",
        "ugandan bruce lee", "wakaliwood", "v1", "vi von", "vi won", "we won", "vroom", "expect the unexpectable",
        "y are u gae", "🇺🇬", "brazil"
    ]
}