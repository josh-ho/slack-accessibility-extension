var config = {
  source : {
    root : "/assets",
    images : "/assets/images",
    js : "/assets/js",
    css : "/assets/css",
    sassMain : "./assets/sass/index.scss",
    sassFolder : "./assets/sass/**/*.scss"
  },
  dest : {
    root : "./assets/",
    images : "./assets/images/",
    js : "./assets/js/",
    css : "./assets/css/",
    names : {
      css : "slack.css"
    }
  },
}

module.exports = config;
