//휴대폰 인증번호 랜덤숫자 생성
String(Math.floor(Math.random() * 1000000));
//6자리가 되지 않으면 앞에 0을 입력해 6자리로 맞춰주기
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

//padEnd() 메서드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 끝(우측)부터 적용됩니다.
String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
