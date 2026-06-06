function rollDice() {
  let result = document.getElementById("result");

  let rollInterval = setInterval(() => {
    result.innerText = "Rolling... 🎲";
  }, 50);

  setTimeout(() => {
    clearInterval(rollInterval);
    let dice = Math.floor(Math.random() * 6) + 1;
    result.innerText = "You got: " + dice;
  }, 800);
}
