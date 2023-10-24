const checkValidation = () => {
  let $email = document.getElementById("email").value;
  let $password1 = document.getElementById("password1").value;
  let $password2 = document.getElementById("password2").value;

  if ($email && $password1 && $password2) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};
