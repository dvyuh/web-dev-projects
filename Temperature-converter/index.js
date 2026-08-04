const textbox = document.getElementById("textbox");
const tofa = document.getElementById("tofa");
const toce = document.getElementById("toce");
const result = document.getElementById("result");
let temp;

function convert() {
  if (tofa.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toce.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}
