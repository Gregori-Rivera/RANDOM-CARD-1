import "./style.css";

const randomNumber = () => {
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const changeNumber = p => {
  let newNumber = randomNumber();
  while (newNumber == p.innerHTML) {
    newNumber = randomNumber();
  }
  return newNumber;
};

const randomPinta = () => {
  let pintas = ["♠", "♦", "♣", "♥"];
  return pintas[Math.floor(Math.random() * pintas.length)];
};

const changePinta = p => {
  let newPinta = randomPinta();
  while (newPinta == p.innerHTML) {
    newPinta = randomPinta();
  }
  return newPinta;
};

window.onload = function() {
  let numbers = document.querySelectorAll(".number");
  let p;
  let randomNumberText = randomNumber();
  for (let number of numbers) {
    p = document.createElement("p");
    p.innerHTML = randomNumberText;
    number.innerHTML = "";
    number.appendChild(p);
  }

  {
    let pintas = document.querySelectorAll(".pintaheader, .pintafooter");
    let p;
    let randomPintaPicture = randomPinta();
    for (let pinta of pintas) {
      console.log(pinta);
      if (randomPintaPicture == "♥" || randomPintaPicture == "♦") {
        document
          .querySelectorAll(".pintaheader, .pintafooter")
          .forEach(element => {
            element.classList.add("rojo");
          });
      }

      p = document.createElement("p");
      p.innerHTML = randomPintaPicture;
      pinta.innerHTML = "";
      pinta.appendChild(p);
      console.log(p);
    }
  }
};
