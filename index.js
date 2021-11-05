const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = (name) => [...cats, name]

const prependCat = name => [name, ...cats]

function removeLastCat(name) {
    return cats.slice(0, -1);
}

const removeFirstCat = () => cats.slice(1);


// console.log(destructivelyAppendCat('Ralph'))








// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     return cats.push(name);
// };

// function destructivelyPrependCat(name) {


//     return cats.unshift(name);
// }

// function destructivelyRemoveLastCat(name) {
//     return cats.pop()
// }

// function destructivelyRemoveFirstCat(name) {
//     return cats.shift(name);
// }

// function appendCat(name) {
//     const catCopy = [...cats, name];
//     return catCopy;
// }

// function prependCat(name) {
//     const catCopy = [name, ...cats];
//     return catCopy;
// }

// function removeLastCat(name) {
//     return cats.slice(0, -1);
// }

// function removeFirstCat(name) {
//     return cats.slice(1);
// }

