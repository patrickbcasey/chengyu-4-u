const Chengyu = require("../models/Chengyu");

module.exports = {
    getIndex: async (req, res) => {
        try {
            const chengyuList = await Chengyu.aggregate( [ { $sample: { size: 5 } } ] );
            res.render("index.ejs", { chengyuList: chengyuList });
        } catch(err) {
            console.log(err);
        }       
    },

    getPronunciation: (req, res) => {
        res.render("pronunciation.ejs");
      },

  };
  