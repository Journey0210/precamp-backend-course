import { checkEmail, sendTemplateToEmail, getTemplate } from "./email.js";

function createUser({ name, age, school, email }) {
  //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  //2. 가입환영 템플릿 생성
  const myTemplate = getTemplate({ name, age, school });

  //3. 이메일로 가입환영 템플릿 전송
  sendTemplateToEmail(email, myTemplate);
}

const name = "철수";
const age = 8;
const school = "새싹초";
const email = "abc@a.com";
createUser({ name, age, school, email });
