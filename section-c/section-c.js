function mysteryFunction(x) {
    if (x <= 1) {
        return false;
    }
    else if (x === 2) {
        return true;
    }
    else {
        for (let i = 2; i < x; i++) {
            if (x % i === 0){
                return false;
            }
        } return true;
    }
}


function mysteryFunction2(y) {
    // coding and coding here
    return;
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}