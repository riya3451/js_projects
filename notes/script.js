const btn = document.querySelector("button");
const inputEl = document.querySelector("textarea");
const notesContainer = document.querySelector(".notes");
const notes = [];

btn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputVal = inputEl.value;

  //creating element to display in dom
  const divEl = document.createElement("div");
  divEl.textContent = inputVal;
  divEl.classList.add("note");
  notesContainer.append(divEl);
}
