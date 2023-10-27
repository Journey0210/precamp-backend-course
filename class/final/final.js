const changeFocus1 = () => {
  const _phone1 = document.getElementById("phone1").value;
  if (_phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
};
const changeFocus2 = () => {
  const _phone2 = document.getElementById("phone2").value;
  if (_phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
};

const sendAuthNum = () => {
  let authNum = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
  let time = 10;

  document.getElementById("authNum").innerText = authNum;
  document.getElementById("sendAuth").disabled = true;
  document.getElementById("authComplete").disabled = false;

  const timer = setInterval(() => {
    if (time >= 0) {
      if (document.getElementById("authComplete").disabled === false) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = `${min}:${sec}`;
        time--;
      } else {
        clearInterval(timer);
        document.getElementById("authComplete").disabled = true;
        document.getElementById("authNum").innerText = "000000";
        document.getElementById("timer").innerText = "3:00";
        document.getElementById("sendAuth").disabled = false;
      }
    } else {
      clearInterval(timer);
      document.getElementById("authComplete").disabled = true;
      document.getElementById("authNum").innerText = "000000";
      document.getElementById("timer").innerText = "3:00";
      document.getElementById("sendAuth").disabled = false;
    }
  }, 1000);
};

const clickAuthComplete = () => {
  if (document.getElementById("authComplete").disabled === false) {
    alert("인증이 완료되었습니다.");
    document.getElementById("authComplete").innerText = "인증 완료";
    document.getElementById("authComplete").disabled = true;

    document.getElementById("registerBtn").disabled = false;
  }
};

const checkValidation = () => {
  const _email = document.getElementById("email");
  const _name = document.getElementById("name");
  const _pw1 = document.getElementById("pw1");
  const _pw2 = document.getElementById("pw2");
  const _regionSelect = document.getElementById("regionSelect");
  const _sexRadio = document.querySelector('input[type="radio"]:checked');

  console.log(_pw1 === _pw2);

  if (_email.value === "" || !_email.value.includes("@")) {
    document.getElementById("emailError").style.display = "unset";
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  if (_name.value === "") {
    document.getElementById("nameError").style.display = "unset";
  } else {
    document.getElementById("nameError").style.display = "none";
  }
  if (_pw1.value === "") {
    document.getElementById("pw1Error").style.display = "unset";
  } else {
    document.getElementById("pw1Error").style.display = "none";
  }
  if (_pw2.value === "" || _pw1.value !== _pw2.value) {
    document.getElementById("pw2Error").style.display = "unset";
  } else {
    document.getElementById("pw2Error").style.display = "none";
  }

  if (_regionSelect.value === "") {
    document.getElementById("regionError").style.display = "unset";
  } else {
    document.getElementById("regionError").style.display = "none";
  }

  if (!_sexRadio) {
    document.getElementById("sexError").style.display = "unset";
  } else {
    document.getElementById("sexError").style.display = "none";
  }

  if (
    _name.value &&
    _email.value &&
    _pw1.value &&
    _pw2.value &&
    _pw1.value === _pw2.value &&
    _regionSelect.value &&
    _sexRadio
  ) {
    alert("코드캠프 가입을 축하합니다.");
  }
};
