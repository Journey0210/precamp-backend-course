const changeFocus1 = () => {
  let _p1 = document.getElementById("p1");
  let _p2 = document.getElementById("p2");

  if ($p1.value.length === 3) {
    $p2.focus();
  }
};
const changeFocus2 = () => {
  let _p2 = document.getElementById("p2");
  let _p3 = document.getElementById("p3");
  if (_p2.value.length === 4) {
    _p3.focus();
  }
};

const checkValidation = () => {};
