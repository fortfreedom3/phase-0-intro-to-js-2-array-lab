const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const catCopy = [...cats, name];
    return catCopy;
}

function prependCat(name) {
    const catCopy = [name, ...cats];
    return catCopy;
}

function removeLastCat(name) {
    return cats.slice(0, -1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}

