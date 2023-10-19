const getAuthNum = function () {
  let authNum = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
  document.querySelector(".token").innerText = authNum;
  // document.querySelector(".token").style.color = "#" + authNum;
  let time = 20;
  setInterval(function () {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padStart(2, "0");
    if (time >= 0) {
      document.querySelector(".timer").innerText = `${min}:${sec}`;
    } else {
      document.querySelector(".finish").disabled = true;
      document.querySelector(".finish").innerText = "인증완료";
    }
    time--;
  }, 1000);
};
