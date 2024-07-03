function sendTemplateToEmail(myEmail, myTemplate) {
  console.log(`${myEmail}로 ${myTemplate} 전송`);
}

function getTemplate({ name, age, school, createdAt }) {
  const myTemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}살</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
        </body>
    </html>
    `;

  return myTemplate;
}

function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("Error: 이메일 주소를 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

function createUser({ name, age, school, email, createdAt }) {
  //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  //2. 가입환영 템플릿 생성
  const myTemplate = getTemplate({ name, age, school, createdAt });

  //3. 이메일로 가입환영 템플릿 전송
  sendTemplateToEmail(email, myTemplate);
}

const name = "철수";
const age = 8;
const school = "새싹초";
const email = "abc@a.com";
const createdAt = getToday();
createUser({ name, age, school, email, createdAt });

function getToday() {
  const today = new Date().toLocaleDateString();
  const todayArr = today.split("/");
  const [month, day, year] = todayArr;

  return `${year}-${month > 10 ? month : 0 + month}-${
    day > 10 ? day : 0 + day
  }`;
}
getToday();
