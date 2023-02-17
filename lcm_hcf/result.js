const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const buttonEl = document.querySelector("button");
const lcmEl = document.getElementById("lcm");
const hcfEl = document.getElementById("hcf");

buttonEl.addEventListener("click", clickHandler);

function clickHandler() {
  if (lcmEl.checked) {
    let l = lcm(+firstInput.value, +secondInput.value);
    document.querySelector("p").innerHTML = l;
    console.log(l);
  } else if (hcfEl.checked) {
    let h = hcf(+firstInput.value, +secondInput.value);
    document.querySelector("p").innerHTML = h;

    console.log(h);
  } else {
    alert("Please select a type");
  }
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function hcf(a, b) {
  let minimum = min(a, b);
  let m = a * b;

  for (let i = minimum; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      let hcf = i;
      return hcf;
    }
  }
}

function maximum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function lcm(a, b) {
  let m = a * b;
  let max = maximum(a, b);

  for (let i = max; i <= m; i++) {
    if (i % a === 0 && i % b === 0) {
      let lc = i;
      return lc;
    }
  }
}
