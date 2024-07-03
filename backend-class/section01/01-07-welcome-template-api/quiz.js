// 주민번호 뒷자리를 가리는 함수(customRegistrationNumber)를 하나 만들고,
// 해당 함수에 “210510-1010101” 와 같이 주민번호를 넣어서 실행하면 “210510-1******” 와 같은 형태로 콘솔에 출력되도록 만들어 주세요.
// 1. 주민번호 가운데가 ”-”로 구성되어야 합니다.
//     - 그렇지 않을 경우 에러 메시지를 콘솔에 출력해 주세요.

//         ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”

// 2. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
//     - 그렇지 않을 경우 에러 메시지를 콘솔에 출력해 주세요.

//         ex) ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”

// 3. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
// 4. 함수는 퍼사드 패턴이 적용되어야 합니다.
//     - 필요시 새로운 파일도 생성 가능합니다. - 파일명 자유
// 5. 함수에 “210510-1010101”, “210510-1010101010101”, “2105101010101”를 각각 넣어 실행했을 때 아래의 출력 결과 예시와 동일하게 나타나면 됩니다.

function getCustomRegistrationNumber(id) {
  if (id.includes("-") === false) {
    console.log("Error: 형식이 올바르지 않습니다!!");
    return false;
  }
  const frontLength = id.slice(0, 6).length;
  const backLength = id.slice(7).length;
  if (frontLength !== 6 || backLength !== 7) {
    console.log("Error: 개수를 제대로 입력해주세요!!");
    return false;
  }
  return id.slice(0, 6) + "-" + id.charAt(7) + "******";
}

const result = getCustomRegistrationNumber("210510-1010101");
console.log(result);
