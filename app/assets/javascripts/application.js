// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

function addClickToSquare() {
  let squares = document.querySelectorAll(".sq-body");

  squares.forEach((square) => {
    square.addEventListener('click', () => {
      square.classList.toggle("sq-selected");
    });
  });
}

function startGame() {
  window.setInterval(() => {
    let choice = "";
    let letters = ["B", "I", "N", "G", "O"];
    let letterChoice = Math.floor(Math.random() * 5);
    let letter = letters[letterChoice];
    let number = 0
    if (letterChoice == 0) {
      number = Math.floor(Math.random() * 15) + 1;
    } else if (letterChoice == 1) {
      number = Math.floor(Math.random() * 15) + 16;
    } else if (letterChoice == 2) {
      number = Math.floor(Math.random() * 15) + 31;
    } else if (letterChoice == 3) {
      number = Math.floor(Math.random() * 15) + 46;
    } else if (letterChoice == 4) {
      number = Math.floor(Math.random() * 15) + 61;
    }
    let announcement = document.querySelector(".sq32")
    announcement.innerText = letter + number;
    console.log(letter + number);
  }, 5000);
}