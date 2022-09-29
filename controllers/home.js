module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getPronunciation: (req, res) => {
        res.render("pronunciation.ejs");
      },

  };
  