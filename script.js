/*let message = document.getElementById("message");

function button() {
  message.innerHTML = "I'm right";
}

function buttonTwo() {
  message.innerHTML = "No, I'm right";
}

let over = document.getElementById("hover");

function hover() {
  alert("Hey, I told you not to hover over me!");
}

over.addEventListener("mouseover", hover); */

let secert = document.getElementById("password");
let cat = document.getElementById("pet");

function passwordCheck() {
  if (secert.value === "12345678") {
    console.log("access in!");
    cat.innerHTML = "Welcome!";
  } else {
    alert("Incorrect Password");
  }
}
