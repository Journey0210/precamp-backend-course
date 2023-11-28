const search = () => {
  let $startWord = document.getElementById("startWord").innerText;
  let $insertWord = document.getElementById("insertWord").value;

  let firstWord = $insertWord.substring(0, 1);
  let lastWord = $startWord.substring($startWord.length - 1);

  if (firstWord === lastWord) {
    document.getElementById("result").innerText = "정답입니다.";
    document.getElementById("startWord").innerText = $insertWord;
  } else {
    document.getElementById("insertWord").value = "";
    document.getElementById("result").innerText = "땡!";
  }
};
