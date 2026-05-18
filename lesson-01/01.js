// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum
// your code
let sum = 0;
let endNumber = 1;
const INITIAL_NUMBER = 20;

while (endNumber >= 1) {
    console.log(sum);
    if (endNumber <= INITIAL_NUMBER) {
        sum = sum + endNumber;
        endNumber = endNumber + 1;
        console.log(sum);
    } else if (endNumber > INITIAL_NUMBER) {
        break;
    }
}

