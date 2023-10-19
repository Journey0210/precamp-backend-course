// let time = 10;

// setInterval(() => time >= 0 && console.log(time--), 1000);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

let time = 180;

setInterval(function () {
  if (time > 0) {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padEnd(2, "0");
    console.log(sec === 0 ? `${min}:${sec}` : `${min}:${sec}`);
    time--;
  }
}, 1000);
