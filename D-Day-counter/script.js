const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

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

  //만약 Remaining이 0이라면, 타이머가 종료되었습니다 출력
  if (remaining <= 0) {
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  }
  //만약 잘못한 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력.
  else if (isNaN(remaining)) {
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
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

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  //기존 코드
  // documentObj["days"].textContent = remainingObj["remainingDate"];
  // documentObj["hours"].textContent = remainingObj["remainingHours"];
  // documentObj["min"].textContent = remainingObj["remainingMin"];
  // documentObj["sec"].textContent = remainingObj["remainingSec"];

  //리팩토링 코드 (반복문 사용)
  const timeKeys = Object.keys(remainingObj); //object의 key만 가져와서 배열로 반환
  const documentKeys = Object.keys(documentObj);

  for (let i = 0; i < timeKeys.length; i++) {
    documentObj[documentKeys[i]].textContent = remainingObj[timeKeys[i]];
  }
};
