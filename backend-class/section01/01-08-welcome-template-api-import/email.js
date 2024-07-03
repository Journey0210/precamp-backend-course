import { getToday } from "./utils";

export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("Error: 이메일 주소를 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

export function sendTemplateToEmail(myEmail, myTemplate) {
  console.log(`${myEmail}로 ${myTemplate} 전송`);
}

export function getTemplate({ name, age, school }) {
  const myTemplate = `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다!</h1>
              <hr/>
              <div>이름: ${name}</div>
              <div>나이: ${age}살</div>
              <div>학교: ${school}</div>
              <div>가입일: ${getToday()}</div>
          </body>
      </html>
      `;

  return myTemplate;
}
