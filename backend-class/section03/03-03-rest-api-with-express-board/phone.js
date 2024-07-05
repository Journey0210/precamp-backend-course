export function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("error 발생: 핸드폰번호를 제대로 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  console.log(result);
  return result;
}

export function sendTokenToSMS(myphone, result) {
  console.log(`${myphone}에 ${result}를 전송했습니다.`);
}

//facade pattern
export function createTokenOfPhone(myphone) {
  //1.휴대폰 번호 자리수 맞는지 검증
  const isValid = checkPhone(myphone);
  if (isValid === false) return;

  //2.핸드폰 토큰 6자리 만드릭
  const myToken = getToken();

  //3.핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, myToken);
}
