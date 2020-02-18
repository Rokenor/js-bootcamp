/**
 * Function scope
 */
function lol() {
  let person = "Tom";
  const age = 45;
  var color = 'teal';
}

person //isn't defined
age // isn't defined
color // isn't defined

//---------------------------------------

let bird = 'mandarin duck';

function birdWatch() {
  let bird = 'golden pheasant';
  bird; // 'golden pheasant'
}

bird; // 'mandarin duck'

/**
 * Block scope
 */
let radius = 8;

if (radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
}

radius // 8
PI // NOT DEFINED
circ // NOT DEFINED

//---------------------------------------

if (true) {
  let animal = 'eel'
  animal // eel
}

animal // not defined

//---------------------------------------

if (true) {
  var animal = 'eel'
  animal // eel
}

animal // eel

/**
 * Lexical scope
 */
function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);

    function extraInner() {
      console.log(hero);
    }
    extraInner();
  }

  inner();
}