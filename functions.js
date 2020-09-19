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
    bigtff: function (kektff) {
        return (kektff[0] + kektff[1] + kektff[2] + "\n" +
            kektff[3] + kektff[4] + kektff[5] + "\n" +
            kektff[6] + kektff[7] + kektff[8])
    },
    kekega_lord: function (kekega) {
        return (kekega[0] + kekega[1] + kekega[2] + "\n" +
            kekega[3] + kekega[4] + kekega[5] + "\n" +
            kekega[6] + kekega[7] + kekega[8])
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