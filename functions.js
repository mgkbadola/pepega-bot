module.exports = {
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
    choose: function (options, fourhead) {
        let n = options.slice(1, options.length).length;
        if (n <= 1) {
            return (`Give options you dummy! ${fourhead}`);
        } else {
            let i = Math.floor(Math.random() * n + 1);
            return (`I would prefer ${options[i]}!`);
        }
    },
    myiq: function () {
        let r = Math.floor(Math.random() * 200) + 1;
        return (`Your IQ is ${r}!`);
    },
    yeezus: function (bear) {
        return ("who is yeezus?:rolling_eyes::face_with_hand_over_mouth::thinking::yawning_face:\n" +
            "\n" +
            "in math: pedo" +
            bear +
            bear +
            "\n" +
            "in history: pedo" +
            bear +
            bear +
            "\n" +
            "in art :pedo" +
            bear +
            bear +
            "\n" +
            "in science: pedo" +
            bear +
            bear +
            "\n" +
            "in geography: pedo" +
            bear +
            bear +
            "\n"
        )
    }
}