const list30Elments = [
    23, 45, 12, 78, 36, 9, 52, 67, 18, 31, 59, 81, 44, 6, 97, 22, 73, 10, 51, 68,
    3, 88, 29, 41, 65, 17, 94, 55, 80, 27
];

function identifiesEvonOdd(listA) {
    let amountOfEven = 0;
    for (let index = 0; index < listA.length; index++) {
        const element = listA[index];
        amountOfEven += element % 2 === 0;
    }
    const amountOfOdd = listA.length - amountOfEven;
    let result = `A lista recebida possui ${amountOfEven} elementos pares e ${amountOfOdd} elementos impares.`;
    return result;
}
console.log("1.", identifiesEvonOdd(list30Elments));