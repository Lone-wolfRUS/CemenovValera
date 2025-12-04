javascript
// Задача 1
export const concatenateStrings = (str1, str2) => {
    return (str1 + str2).replace(/ /g, '');
}
console.log('Задача 1:', concatenateStrings('Hello ', 'World')); // Выведет: 'HelloWorld'

// Задача 2
export const getStringLength = (str) => {
    return str.length;
}
console.log('Задача 2:', getStringLength('test string')); // Выведет: 11

// Задача 3
export const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log('Задача 3:', getStringFromTemplate('John', 'Doe')); // Выведет: 'Hello, John Doe!'

// Задача 4
export const getChar = (str, index) => {
    return str[index - 1];
}
console.log('Задача 4:', getChar('Hello', 2)); // Выведет: 'e'

// Задача 5
export const removeFirstOccurrences = (str, subStr) => {
    return str.replace(subStr, '');
}
console.log('Задача 5:', removeFirstOccurrences('banana', 'na')); // Выведет: 'bana'

// Задача 6
export const getRectangleString = (width, height) => {
    const topBottom = '*'.repeat(width);
    const middle = '*' + ' '.repeat(width - 2) + '*';
    
    let result = '';
    
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            result += topBottom;
        } else {
            result += middle;
        }
        
        if (i < height - 1) {
            result += '\n';
        }
    }
    
    return result;
}
console.log('Задача 6 (4x4):');
console.log(getRectangleString(4, 4));
