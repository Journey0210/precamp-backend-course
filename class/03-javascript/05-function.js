const getAuthNum = function () {
  let authNum = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
  document.querySelector(".token").innerText = authNum;
  document.querySelector(".token").style.color = "#" + authNum;
};
