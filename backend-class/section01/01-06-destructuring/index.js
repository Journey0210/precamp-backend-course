//구조분해할당 예제
const profile = {
  name: "철수",
  age: 12,
  school: "새싹초등학교",
};

const { name, school } = profile; //객체는 순서가 중요하지 않음
console.log(name);
console.log(school);

//1. 일반번수 전달하기
function qqq(fruit) {
  //const fruit = "사과"
  console.log(fruit);
}

//2. 객체 전달하기
function zzz(fruitObj) {
  console.log(fruitObj);
}
qqq({
  apple: 3,
  banana: 1,
});

//3. 객체를 구조분해할당으로 전달하기
function ccc({ apple, banana }) {
  console.log(apple);
  console.log(banana);
}

const basket = {
  apple: 3,
  banana: 10,
};

ccc(basket);
