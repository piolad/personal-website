text_whoIam = null;
phrasesWhoIam = [
  "programmer",
  "tech enthusiast",
  "DevOps engineer",
  "Computer Science student",
];

//string.includes polyfill - for older browser users
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

delay = 200;

var i = 1;
function whoiamLoop() {
  if (!done) {
    changeWhoamiText(text_whoIam, phrasesWhoIam[i], delay);
    i = (i + 1) % phrasesWhoIam.length;
    console.log("I: " + i);
  }
  setTimeout(whoiamLoop, 7000);
}

window.onload = () => {
  document
    .getElementById("faceimg-wrapper")
    .addEventListener("mouseover", function () {
      document.getElementById("faceimg-info").style.display = "block";
      /* setTimeout(() => {
    }, 600); */
    });
  document
    .getElementById("faceimg-wrapper")
    .addEventListener("mouseout", function () {
      document.getElementById("faceimg-info").style.display = "none";
    });

  text_whoIam = document
    .getElementById("headline")
    .getElementsByTagName("span")[0];
  setTimeout(whoiamLoop, 3000);

  window.scrollTo(0,0)
};

done = false;
function changeWhoamiText(txtElem, newTxt, delay) {
  if (done) return;
  done = true;

  function removal_loop() {
    if (txtElem.innerHTML.length > 0) {
      txtElem.innerHTML = txtElem.innerHTML.substring(
        0,
        txtElem.innerHTML.length - 1
      );
      setTimeout(removal_loop, delay);
    } else {
      if (txtElem.innerHTML.length == 0) adding_loop();
    }
  }

  function adding_loop() {
    if (txtElem.innerHTML.length < newTxt.length) {
      txtElem.innerHTML += newTxt[txtElem.innerHTML.length];
      setTimeout(adding_loop, delay);
    } else {
      done = false;
    }
  }

  removal_loop();
}
