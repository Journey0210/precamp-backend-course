function getWelcomTemplate({ name, age, school, createdAt }) {
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
  console.log(myTemplate);
}

const name = "철수";
const age = 12;
const school = "새싹초등학교";
const createdAt = "2024-09-01";

getWelcomTemplate({ name, age, school, createdAt }); //shorthand property
