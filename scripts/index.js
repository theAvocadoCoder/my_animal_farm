
/* Variables */
const createBtn = document.getElementById("create-btn")/*,
      pens = document.getElementById("pens"),
      pen1 = document.getElementById("pen-1"),
      pen2 = document.getElementById("pen-2"),
      pen3 = document.getElementById("pen-3"),
      pen4 = document.getElementById("pen-4"),
      pen5 = document.getElementById("pen-5"),
      pen6 = document.getElementById("pen-6"),
      pen7 = document.getElementById("pen-7"),
      pen8 = document.getElementById("pen-8"),
      pen9 = document.getElementById("pen-9")*/;

const instances = {},
      pensObj = {}
      spaceIsHighlighted = false;



/* Event Listeners */
pens.addEventListener('click', highlightPenSpace);



/* Classes */
function Animal() {}
Animal.prototype.intro = function() {
  return `"Hi! I'm ${this.name} and I'm a ${this.specie}."`;
}
Animal.prototype.speak = function() {
  return `${this.name} says ${this.sound}`;
}


function Dog(name) {
  this.name = name;
  this.sound = "Woof";
  this.specie = "dog";
}
Dog.prototype = Object.create(Animal.prototype);


function Cat(name) {
  this.name = name;
  this.sound = "Meow";
  this.specie = "cat";
}
Cat.prototype = Object.create(Animal.prototype);


function Pig(name) {
  this.name = name;
  this.sound = "Oink";
  this.specie = "pig";
}
Pig.prototype = Object.create(Animal.prototype);


function Horse(name) {
  this.name = name;
  this.sound = "Neigh";
  this.specie = "horse";
}
Horse.prototype = Object.create(Animal.prototype);


function Sheep(name) {
  this.name = name;
  this.sound = "Baa";
  this.specie = "sheep";
}
Sheep.prototype = Object.create(Animal.prototype);


function Cow(name) {
  this.name = name;
  this.sound = "Moo";
  this.specie = "cow";
}
Cow.prototype = Object.create(Animal.prototype);


function Chicken(name) {
  this.name = name;
  this.sound = "Cluck";
  this.specie = "chicken";
}
Chicken.prototype = Object.create(Animal.prototype);




/* App Functions */
function deleteAnimal(spaceId) {
  delete pensObj[spaceId];
}

function highlightPenSpace(event) {
  const space = event.target;
  if (spaceIsHighlighted === false && document.getElementsByClassName("highlight").length === 0) {
    space.classList.toggle("highlight", true);
    spaceIsHighlighted = true;
  } else if (spaceIsHighlighted === true && space.classList.contains("highlight")) {
    space.classList.toggle("highlight", false);
    spaceIsHighlighted = false;
  } else if (spaceIsHighlighted === true && space.classList.contains("highlight") === false && document.getElementsByClassName("highlight").length !== 0) {
    document.getElementsByClassName("highlight")[0].classList.toggle("highlight");
    space.classList.toggle("highlight", true);
    spaceIsHighlighted = true;
  }
}



/* Helper Functions */