window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function QS(elem) {
  return document.querySelector(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

const kepekHely = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
];
const jatekKepek = [];

for (let index = 0; index < 2; index++) {
  kepekHely.forEach((element) => {
    jatekKepek.push(element);
  });
  {
  }
}

function init() {
  generalas();
  window.addEventListener("click", kepForditas);
}
function generalas() {
  var txt = "";
  jatekKepek.forEach(function (elem, index) {
    txt += `<div><img id="${index}" src="kepek/hatter.jpg" alt='kep' ></div>`;
  });
  ID("generalas").innerHTML = txt;
}
const forditottKepek = [];
function kepForditas() {
  id = event.target.id;
  console.log(id);
  ID(id).src = jatekKepek[id];
  ID(id).removeEventListener("click", kepForditas);
  forditottKepek.push(id);
  console.log(forditottKepek.join("; "));
  if (forditottKepek.length === 2) {
    var elsoKep = ID(forditottKepek[0]).src;
    var masKep = ID(forditottKepek[1]).src;
    console.log(forditottKepek[0]);
    if (elsoKep == masKep) {
        console.log(forditottKepek[0]);
      ID(forditottKepek[0]).removeEventListener("click", kepForditas);
      ID(forditottKepek[1]).removeEventListener("click", kepForditas);
      forditottKepek.splice(0);
    } else {
        console.log(ID(forditottKepek[0]));
        setTimeout(function () {
        console.log(ID(forditottKepek[0]));
        elsoKep = "kepek/hatter.jpg";
        masKep = "kepek/hatter.jpg";
        ID(forditottKepek[0]).addEventListener("click", kepForditas);
        ID(forditottKepek[1]).addEventListener("click", kepForditas);
      }, 1000);
      forditottKepek.splice(0);
      console.log("VÁLTOZZ VISSZZA");
    }
  }
}
