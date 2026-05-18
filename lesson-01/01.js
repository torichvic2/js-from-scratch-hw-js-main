// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum
// your code
let sum = 1;
let endNumber = 1;
const INITIAL_NUMBER = 20;

while (endNumber >= 1) {
    console.log(sum);
    if (endNumber <= INITIAL_NUMBER) {
        endNumber = endNumber + 1;
        sum = sum + endNumber;
    } else if (endNumber > INITIAL_NUMBER) {
        break;
    }
}

