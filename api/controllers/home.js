const Chengyu = require("../models/Chengyu");

module.exports = {
    getHome: async (req, res) => {
        try {
            const randomChengyu = await Chengyu.aggregate( [ { $sample: { size: 5 } } ] );
            // const today = Math.floor(Date.now() % 31557600000)/ 86400000;
            const today = 2;
            const chengyuOfTheDay = await Chengyu.find().skip(today).limit(1);
            const responseObj = {
                daily: chengyuOfTheDay,
                random: randomChengyu
            }

            res.json(responseObj);
        } catch(err) {
            console.log(err);
        }       
    },

    getPronunciation: (req, res) => {
        res.render("pronunciation.ejs");
      },

  };
  