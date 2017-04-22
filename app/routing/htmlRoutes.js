var path = require("path");

function loadHtmlStaticPages(app, express) {
  app.use(express.static(path.join(__dirname, '../public'), {index:false,extensions:['html']}));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/home.html"));
  });
}

module.exports = loadHtmlStaticPages;
