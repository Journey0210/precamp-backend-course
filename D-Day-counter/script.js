const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
container.style.display = "none";
messageContainer.style.color = "red";
messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";

const dateForMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = function () {
  const targetDateInput = dateForMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); //.setHours(0,0,0,0) 자정을 기준으로 계산
  const remaining = (targetDate - nowDate) / 1000;
  console.log("반복 실행중");

  //만약 Remaining이 0이라면, 타이머가 종료되었습니다 출력
  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval(); //setInterval(counterMaker, 1000) 종료
    return; //counterMaker 함수  종료
  }
  //만약 잘못한 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력.
  else if (isNaN(remaining)) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  //기존 코드
  // const remainingDate = Math.floor(remaining / 3600 / 24); //1시간 3600s
  // const remainingHours = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;

  // const days = document.getElementById("days");
  // const hours = document.getElementById("hours");
  // const min = document.getElementById("min");
  // const sec = document.getElementById("sec");

  //리팩토링 코드 (객체로 변환)

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  const documentArr = ["days", "hours", "min", "sec"];
  // for (let i = 0; i < documentArr.length; i++) {
  //   documentObj[documentArr[i]] = document.getElementById(documentArr[i]);
  // }
  const timeKeys = Object.keys(remainingObj); //object의 key만 가져와서 배열로 반환

  let j = 0;
  for (const tag of documentArr) {
    //for of 문 배열에서 사용. 베열을 돌며 요소를 출력
    document.getElementById(tag).textContent = remainingObj[timeKeys[j]];
    j++;
  }

  //기존 코드
  // documentObj["days"].textContent = remainingObj["remainingDate"];
  // documentObj["hours"].textContent = remainingObj["remainingHours"];
  // documentObj["min"].textContent = remainingObj["remainingMin"];
  // documentObj["sec"].textContent = remainingObj["remainingSec"];

  //리팩토링 코드 (반복문 사용)

  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[documentKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }

  // let i = 0;
  // for (const key in documentObj) {
  //   //for in 문은 객체에 사용. 객체를 돌며 key를 반환
  //   console.log(remainingObj[timeKeys[i]]);
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // };
};

const intervalIdArr = [];
const starter = () => {
  container.style.display = "flex";
  messageContainer.style.display = "none";

  counterMaker();
  const intervalId = setInterval(counterMaker, 1000); //매초 마다 시간이 업데이트 , setInterval은 intervalId를 반환
  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

const setClearInterval = () => {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
  messageContainer.style.display = "flex";
  for (i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
