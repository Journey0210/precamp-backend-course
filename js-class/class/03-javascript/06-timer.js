let isStarted = false;

const getAuthNum = function () {
  if (isStarted === false) {
    //타이머가 작동중이 아닐 때
    isStarted = true;
    document.querySelector(".finish").disabled = false;
    let authNum = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
    document.querySelector(".token").innerText = authNum;

    let time = 5;

    let timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.querySelector(".timer").innerText = `${min}:${sec}`;
        time--;
      } else {
        document.querySelector(".finish").disabled = true;
        document.querySelector(".finish").innerText = "인증완료";
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
    //타이머가 작동 중일 때
  }
};
