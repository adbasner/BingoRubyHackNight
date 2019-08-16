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

function setAllAnnouncements() {
  let announcements = [];
  for (let i = 1; i < 76; i++) {
    if (i >= 1 && i < 16) {
      announcements.push("B" + i);
    } else if  (i >= 16 && i < 31) {
      announcements.push("I" + i);
    } else if  (i >= 31 && i < 46) {
      announcements.push("N" + i);
    } else if  (i >= 46 && i < 61) {
      announcements.push("G" + i);
    } else if  (i >= 61 && i < 76) {
      announcements.push("O" + i);
    }
  }
  return announcements;
}

function pickAnnouncemnt(announcementsAvailable) {
  let pick = announcementsAvailable.splice(Math.floor(Math.random()*announcementsAvailable.length), 1);
  let announcementBox = document.querySelector(".sq34");
  let pickBox = document.querySelector(".picks");
  pickBox.textContent += (pick + " ");
  announcementBox.innerText = pick;
  return announcementsAvailable;
}

function clearAllIntervals() {
  for (var i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function bingo() {
  clearAllIntervals();
  let announcementBox = document.querySelector(".sq34");
  announcementBox.innerText = "BINGO!!!";
}

function startGame() {
  let announcements = setAllAnnouncements();
  announcements = pickAnnouncemnt(announcements);
  let game = window.setInterval(() => {
    announcements = pickAnnouncemnt(announcements);
    if (announcements.length < 1) {
      bingo();
    }
  }, 5000);
}

function resetBoard() {
  clearAllIntervals();
  location.reload();
}