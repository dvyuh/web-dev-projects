const minNum = 0;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempt = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`Guess a number betwee ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("please enter a valid number");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert("TOO LOW!! try again");
    } else if (guess > answer) {
      window.alert("TOO HIGH!! try again");
    } else {
      window.alert(
        `correct!! the answer was ${answer} it took you ${attempt} attempts`
      );
      running = false;
    }
  }
}
