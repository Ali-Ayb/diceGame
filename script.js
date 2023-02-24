const player1_num = Math.floor(Math.random() * 6 + 1);
const player2_num = Math.floor(Math.random() * 6 + 1);

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const title = document.getElementById("title");
const img = document.createElement("img");
img.src = "dot_img.png";

const dot_HTML = '<img class="dot-image" src="dot_img.png">';

dice1.innerHTML = dot_HTML.repeat(player1_num);
dice2.innerHTML = dot_HTML.repeat(player2_num);

if (player1_num > player2_num) {
  title.innerText = "Player 1 win !!!";
} else if (player2_num > player1_num) {
  title.innerText = "Player 2 win !!!";
} else {
  title.innerText = "Draw :(";
}
