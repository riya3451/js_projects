const buttonEls = document.querySelectorAll(".button");
const resultContainer = document.querySelector(".full-screen");
const equalEl = document.querySelector(".equals");
const cancelEl = document.querySelector(".cancel");
console.log(buttonEls);

for (let i = 0; i < buttonEls.length; i++) {
  const btn = buttonEls[i];
  const btnValue = btn.getAttribute("data-id");

  btn.onclick = function () {
    console.log(btnValue);
    resultContainer.textContent += btnValue;
  };
}

equalEl.onclick = () => {
  let result = eval(resultContainer.textContent);
  resultContainer.textContent = result;
};

cancelEl.onclick = () => {
  resultContainer.textContent = "";
};
