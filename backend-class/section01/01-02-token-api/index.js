//안 좋은 예
// function createTokenOfPhone(phone) {
//   //phone: 매개변수(parameter)
//   //1.휴대폰번호 자리수 맞는지 확인하기 (10~11자리)
//   if (phone.length >= 10) {
//     if (phone.length < 11) {
//       //2. 핸드폰 토큰 6자리 만들기
//       const result = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
//       //3. 핸드폰 번호로 토큰 전송하기 (추후에 개발)
//       console.log(`${phone}에 ${result}를 전송했습니다.`);
//     } else {
//       console.log("error 발생: 핸드폰번호를 제대로 입력해주세요.");
//     }
//   } else {
//     console.log("error 발생: 핸드폰번호를 제대로 입력해주세요.");
//   }
// }

//좋은 예
function createTokenOfPhone(phone) {
  //phone: 매개변수(parameter)
  //1.휴대폰번호 자리수 맞는지 확인하기 (10~11자리)

  //early-exit : 먼저 에러를 찾아서 처리.
  if (phone.length < 10 || phone.length > 11) {
    console.log("error 발생: 핸드폰번호를 제대로 입력해주세요.");
    return;
  }

  //2. 핸드폰 토큰 6자리 만들기
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  console.log(result);

  //3. 핸드폰 번호로 토큰 전송하기 (추후에 개발)
  console.log(`${phone}에 ${result}를 전송했습니다.`);
}

createTokenOfPhone("0102122222"); //01022322222:인자(argument)
