let eins = document.getElementById("eins");
let zwei = document.getElementById("zwei");
let drei = document.getElementById("drei");
let vier = document.getElementById("vier");
let fuenf = document.getElementById("fuenf");
let sieben = document.getElementById("sieben");
let neun = document.getElementById("neun");
let multizwei = document.getElementById("multizwei");
let multivier = document.getElementById("multivier");
let minusacht = document.getElementById("minusacht");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let debug = document.getElementById("debug");
let again = document.getElementById("again");
let points = 0;
let anzahl = 0;

let ergebnis = 18;
let operation = 1;
let indexResults = 0;

let possibleResults = [
  17, // stefans wunsch zahl
  13, // alex wunsch zahl
  15,
  27,
  29,
  32,
  "Gratulation",
]

let clickonceagain = function(value) {
document.getElementById("again").classList.remove("hiddenagain");
document.getElementById("welldone").classList.add("hidden");
indexResults = indexResults + 1;
anzahl = 0;
document.getElementById("zaehler").innerHTML = 0;
document.getElementById("counter").innerHTML = 0;
points = 0;
console.log("Hallo");
}

let setResult = function(value) {
  document.getElementById("result-container").innerHTML = value;
  setCounts(anzahl);
}


let resetGame = function(value) {
  ergebnis = possibleResults[indexResults];
  setResult(ergebnis);
}

let setCounts = function(value) {
  if (ergebnis == 17) {
  document.getElementById("clickcountero").innerHTML = value;
  document.getElementById("bestclicko").classList.remove("hidden");
  }
  else if (ergebnis == 13) {
  document.getElementById("clickcounterone").innerHTML = value;
  document.getElementById("bestclickone").classList.remove("hidden");
  }
  else if (ergebnis == 15) {
  document.getElementById("clickcountertwo").innerHTML = value;
  document.getElementById("bestclicktwo").classList.remove("hidden");
  }
  else if (ergebnis == 27) {
  document.getElementById("clickcounterthree").innerHTML = value;
  document.getElementById("bestclickthree").classList.remove("hidden");
  document.getElementById("multizwei").classList.remove("hiddenmultizwei");
  }
  else if (ergebnis == 29) {
  document.getElementById("clickcounterfour").innerHTML = value;
  document.getElementById("bestclickfour").classList.remove("hidden");
  document.getElementById("multizwei").classList.add("hiddenmultizwei");
  document.getElementById("multivier").classList.remove("hidden");
  }
  else if (ergebnis == 32) {
  document.getElementById("clickcounterfive").innerHTML = value;
  document.getElementById("bestclickfive").classList.remove("hidden");
  document.getElementById("multivier").classList.add("hidden");
  document.getElementById("minusacht").classList.remove("hidden");
  }
  else if (ergebnis == "Gratulation") {
  document.getElementById("clickcountersix").innerHTML = value;
  document.getElementById("bestclicksix").classList.remove("hidden");
  document.getElementById("levelone").classList.remove("hidden");
  document.getElementById("minusacht").classList.add("hidden");
  }
}




let clickeins = function(event) {
  points = points + (1 * operation);
  anzahl = anzahl + 1;

  if (points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");

    resetGame();

  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickzwei = function(e) {

points = points + (2 * operation);
anzahl = anzahl + 1;

  if(points == ergebnis) {
  document.getElementById("welldone").classList.remove("hidden");


  resetGame();

    }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickneun = function(e) {

points = points + (9 * operation);
anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();
  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clicksieben = function(e) {
  points = points + (7 * operation);
  anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();

  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickmultizwei = function(e) {

points = points * 3;
anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();

  }

counter.innerHTML = points;
zaehler.innerHTML = anzahl;
}

let clickmultivier = function(e) {

  points = points * 4;
  anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();

  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

let clickPlus = function(e) {
  operation = 1;
  document.getElementById("circle").classList.remove("hiddencircle");
  document.getElementById("circleminus").classList.add("hiddencircleminus");
  /* debug.innerHTML = operation; */

}


let clickMinus = function(e) {
  operation = -1;
  document.getElementById("circleminus").classList.remove("hiddencircleminus");
  document.getElementById("circle").classList.add("hiddencircle");
  /* debug.innerHTML = operation; */
}

let clickminusacht = function(e) {
  points = points - 4;
  anzahl = anzahl + 1;

  if(points == ergebnis) {
    document.getElementById("welldone").classList.remove("hidden");
    resetGame();

  }

  counter.innerHTML = points;
  zaehler.innerHTML = anzahl;
}

/* Menu */

let menu = document.getElementById("menu");

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

    setTimeout(function(){
    document.getElementById("fontinstruction").classList.remove("hidden");
    document.getElementById("menuresulttext").classList.remove("hidden");
    document.getElementById("menuclicktext").classList.remove("hidden");
    document.getElementById("menunumbertext").classList.remove("hidden");
  }, 400);

    const mq = window.matchMedia( "(min-width: 600px)" );

    if (mq.matches) {

      document.getElementById("mySidenav").style.width = "66.66%";
    // window width is at least 500px
    } else {

      document.getElementById("mySidenav").style.width = "100%";
    // window width is less than 500px
    }
}

menu.addEventListener("click", openNav);



let menuclose = document.getElementById("menuclose");

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("fontinstruction").classList.add("hidden");
    document.getElementById("menuresulttext").classList.add("hidden");
    document.getElementById("menuclicktext").classList.add("hidden");
    document.getElementById("menunumbertext").classList.add("hidden");
}

menuclose.addEventListener("click", closeNav);

/* Menu */

plus.addEventListener("click", clickPlus);
minus.addEventListener("click", clickMinus);


eins.addEventListener("click", clickeins);
zwei.addEventListener("click", clickzwei);
neun.addEventListener("click", clickneun);
sieben.addEventListener("click", clicksieben);
multizwei.addEventListener("click", clickmultizwei);
multivier.addEventListener("click", clickmultivier);
minusacht.addEventListener("click", clickminusacht);
again.addEventListener("click", clickonceagain);
