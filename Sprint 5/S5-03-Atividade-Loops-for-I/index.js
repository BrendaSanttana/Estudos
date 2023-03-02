
function renderUpToTwenty() {
    for (let i = 0; i < 21; i++) {
        console.log(i); // OK feito
    }
}
renderUpToTwenty()

function tenInTenToAHundred() {
    for (let i = 0; i < 110; i += 10) {
        console.log(i); // OK feito
    }
}

function tenInTenToAHundred() {
    for (let i = 1; i < 22; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
tenInTenToAHundred()

function oddUpToTwenty() {
    for (let i = 2; i < 22; i++) {
        if (i % 2 === 0)
            console.log(i)
    }
}

oddUpToTwenty()

function fromNegativeToPositive() {
    for (let i = 0; i >= -10; i--) {
        console.log(i)
    }
}
fromNegativeToPositive()

function inDescendingDirection() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}
inDescendingDirection()

function toSquare() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * i)

    }
}
toSquare()