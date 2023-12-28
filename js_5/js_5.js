// 1

/*
function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}
console.log(myIsNaN(15)); 
*/

// 2
/*

function pad(str, symbol, repeat, addStart) {
    const currentLength = str.length;
    const targetLength = currentLength + (repeat > currentLength ? currentLength : repeat);

if (addStart) {
    return symbol.repeat(targetLength - currentLength) + str;
 } else {
    return str + symbol.repeat(targetLength - currentLength);
 }
}
const result = pad('qwerty','+', 3, true);
console.log(result);

*/

// 3
/*
function checkProbabilityTheory(count) {
    let generatedNumbers = [];
    let evenCount = 0;
    let oddCount = 0;

 for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);
    generatedNumbers.push(randomNumber);

    if (randomNumber % 2 === 0) {
            evenCount++;
     } else {
            oddCount++;
    }
    }
    const percentageEven = (evenCount / count) * 100;
    const percentageOdd = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}% : ${percentageOdd.toFixed(2)}%`);
}

checkProbabilityTheory(80);

*/