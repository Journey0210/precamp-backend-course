function getProfile(profile) {
  console.log(profile);
  console.log(profile.name);
  console.log(profile.age);
  console.log(profile.school);
}

const name = "철수";
const age = 12;
const school = "새싹초등학교";

// const profile = {
//     name:name,
//     age:age,
//     school:school
// }

//키와 밸류가 같아서, 밸류를 생략함 => shorthand property
const profile = {
  name,
  age,
  school,
};

getProfile(profile);
