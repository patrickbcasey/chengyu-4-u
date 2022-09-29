const Chengyu = require("../models/Chengyu");

module.exports = {
    getIndexList: async (req, res) => {
        try {
            res.render("indexList.ejs");
        } catch (err) {
            console.log(err);    
        }
    },

  };
  

