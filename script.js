const input = document.querySelector("input#input");
const visor = document.querySelector("div.visor");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const res = input.value;
  visor.innerHTML = `<p>${res}</p>`;
  input.value = "";
  input.focus();
});
