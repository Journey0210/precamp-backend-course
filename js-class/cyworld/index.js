const clickMenuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color: black; background-color :#fff;";
  document.getElementById("menuJukebox").style =
    "color: white; background-color :#298eb5;";
  document.getElementById("menuGame").style =
    "color: white; background-color :#298eb5;";
};

const clickMenuJukebox = () => {
  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
  document.getElementById("menuJukebox").style =
    "color: black; background-color: #fff;";

  document.getElementById("menuHome").style =
    "color: white; background-color :#298eb5;";
  document.getElementById("menuGame").style =
    "color: white; background-color :#298eb5;";
};

const clickMenuGame = () => {
  document.getElementById("contentFrame").setAttribute("src", "game.html");
  document.getElementById("menuGame").style =
    "color: black; background-color: #fff;";
  document.getElementById("menuHome").style =
    "color: white; background-color :#298eb5;";
  document.getElementById("menuJukebox").style =
    "color: white; background-color :#298eb5;";
};
