const Chengyu = require("../models/Chengyu");

module.exports = {
    
    getTopicIndex: async (req, res) => {
        try {
        res.render("topic.ejs");
        } catch(err) {
            console.log(err);
        }
    },
     

  };
  