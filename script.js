// Задача 1

function concatenateStrings(str1, str2) {
    return (str1 + str2).replace(/ /g, '');
}

// Задача 2

function getStringLength(str) {
    return str.length;
}

// Задача 3

function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}


// Задача 4

function getChar(str, index) {
    return str[index - 1];
}

// Задача 5

function removeFirstOccurrences(str, subStr) {
    return str.replace(subStr, '');
}

// Задача 6

function getRectangleString(width, height) {
    const line = '*'.repeat(width);
    return (line + '\n').repeat(height).trim();
}
