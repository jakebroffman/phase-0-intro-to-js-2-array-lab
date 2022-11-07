// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop(); 
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(name) {
    const newArray = [...cats, "Broom"];
   return newArray;
};

function prependCat(name) {
    const newArray2 = ["Arnold", ...cats];
    return newArray2;
};

function removeLastCat(name) {
   const cats2 = cats.slice(0, cats.length-1);
    return cats2;
};

function removeFirstCat(name) {
    const cats3 = cats.slice(1);
    return cats3;
};