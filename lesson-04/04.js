/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/


function doubleEachCharacter(string) {
    let newString = '';
    let arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        newString += arr[i] + arr[i];
    }
    return newString;
}