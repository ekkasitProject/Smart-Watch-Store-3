function ownerName() {
  const input = document.getElementById("owner-name");
  let de = document.getElementById("show-name");
  if (input.value < 1) {
    de.innerHTML = "owner name";
  } else {
    console.log(typeof input.value);
    de.innerHTML = input.value;
  }
}
function bankName() {
  const input = document.getElementById("bank-name");

  let de = document.getElementById("show-bank");
  if (input.value < 1) {
    de.innerHTML = "Bank name";
  } else {
    console.log(typeof input.value);
    de.innerHTML = input.value;
  }
}

const cardNumber = document.getElementById("card-number");
const showNumber = document.getElementById("show-number");
cardNumber.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const splitValue = inputValue.split("");
  if (splitValue < 1) {
    showNumber.innerHTML = "0123 2345 5678 9000";
  } else {
    for (let i = 0; i < splitValue.length; i += 5) {
      splitValue.splice(i, 0, " ");
    }
    let result = splitValue.join("");
    showNumber.textContent = result;
  }
});

const showMy = document.querySelector(".mm-yy");
const cardMy = document.getElementById("mm-yy");
cardMy.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const splitValue = inputValue.split("");
  if (splitValue < 1) {
    showMy.innerHTML = "11/00";
  } else {
    if (splitValue.length > 2) {
      splitValue.splice(2, 0, "/");
    }
    let result = splitValue.join("");
    showMy.textContent = result;
  }
});

const cvcCard = document.getElementById("cvc-card");
const showCvc = document.querySelector(".show-cvc");

cvcCard.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  if (inputValue < 1) {
    showCvc.textContent = "543";
  } else {
    showCvc.textContent = inputValue;
  }
});
