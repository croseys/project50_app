//VARIABLES
var button_one = document.getElementById("strike-button-one");
var button_two = document.getElementById("strike-button-two");
var button_three = document.getElementById("strike-button-three");
var button_four = document.getElementById("strike-button-four");
var button_five = document.getElementById("strike-button-five");
var button_six = document.getElementById("strike-button-six");
var button_seven = document.getElementById("strike-button-seven");
var nextdaybutton = document.getElementById("nextDayButton");

const day = document.getElementById("day");

let days = 1;
var buttons = document.getElementsByClassName("strikeButtons");
var buttonCount = buttons.length;
var clickCount = 0;

day.innerHTML = "day " + days;

//REST

var buttons = [button_one, button_two, button_three, button_four, button_five, button_six, button_seven];

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  var button_id = button.id;
  var struck = localStorage.getItem(button_id);
  if (struck === "true") {
    button.classList.add("struck");
    button.disabled = true;
  }
  button.addEventListener("click", function() {
    this.classList.toggle("struck");
    clickCount++;
    localStorage.setItem(this.id, this.classList.contains("struck"));
    this.disabled = true;
  });
}

days = parseInt(localStorage.getItem("days")) || 1;

nextdaybutton.addEventListener("click", function() {
  days++;
  day.innerHTML = "Day " + days;
  localStorage.setItem("days", days);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("struck");
    buttons[i].disabled = false;
    localStorage.removeItem(buttons[i].id);
  }
});

failedButton.addEventListener("click", function() { 
  localStorage.clear("days");
  window.location.reload();
});

document.addEventListener("DOMContentLoaded", function() {
  day.innerHTML = "Day " + days;
  // your code here
});