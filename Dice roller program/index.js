function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
function rolldice() {
  const numofdice = document.getElementById("numofdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const dicesum = document.getElementById("dicesum");
  const values = [];
  const images = [];

  for (let i = 0; i < numofdice; i++) {
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src="dice images/${value}.png" >`);
  }

  diceresult.textContent = `dice ${values.join(", ")}`;
  diceimages.innerHTML = images.join("");

  dicesum.textContent = `Sum: ${sumArray(values)}`;

  console.log(values);
}
