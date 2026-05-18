/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
let start_number = 0;
const INITIAL_NUMBER = 10;

while (start_number < INITIAL_NUMBER) {
    if (start_number < INITIAL_NUMBER) {
        start_number = start_number + 1;
        factorial = start_number * factorial;
    }
    else {
        break;
    }
}