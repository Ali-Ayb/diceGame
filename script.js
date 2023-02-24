let player1_num = Math.ceil(Math.random() * 6);
let player2_num = Math.ceil(Math.random() * 6);

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const title = document.getElementById("title");
const img = document.createElement("img");
img.src = "dot_img.png";

const dotHTML = '<img class="dot-image" src="dot_img.png">';

dice1.innerHTML = dotHTML.repeat(player1_num);
dice2.innerHTML = dotHTML.repeat(player2_num);

if (player1_num > player2_num) {
  title.innerText = "Player 1 win !!!";
} else if (player2_num > player1_num) {
  title.innerText = "Player 2 win !!!";
} else {
  title.innerText = "Draw :(";
}
