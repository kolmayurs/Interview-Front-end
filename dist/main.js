"use strict";

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("myNav").style.display = "none";
  } else {
    document.getElementById("myNav").style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 920px)");
myFunction(x); // Call listener function at run time

x.addListener(myFunction); // Attach listener function on state changes

function openNav() {
  document.getElementById("myNav").style.height = "200px";
  document.getElementById("myNav").style.display = "block";
  document.getElementById("x-icon").style.display = "block";
  document.getElementById("chat-icon").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0px";
  document.getElementById("myNav").style.display = "none";
  document.getElementById("x-icon").style.display = "none";
  document.getElementById("chat-icon").style.display = "block";
}