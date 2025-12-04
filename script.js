// Задача 1
export const concatenateStrings = (str1, str2) => {
    return (str1 + str2).replace(/ /g, '');
}

// Задача 2
export const getStringLength = (str) => {
    return str.length;
}

// Задача 3
export const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
}

// Задача 4
export const getChar = (str, index) => {
    return str[index - 1];
}

// Задача 5
export const removeFirstOccurrences = (str, subStr) => {
    return str.replace(subStr, '');
}

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
