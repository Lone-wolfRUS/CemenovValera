// Задача 1

function concatenateStrings(str1, str2) {
    return (str1 + str2).replace(/ /g, '');
    console.log(result); 
    return result;
}

// Задача 2

function getStringLength(str) {
    return str.length;
    console.log(length); 
    return length;
}

// Задача 3

function getStringFromTemplate(firstName, lastName) {
    const result = `Hello, ${firstName} ${lastName}!`;
    console.log(result); 
    return result;
}

// Пример использования:
getStringFromTemplate("кто", "то");

// Задача 4

function getChar(str, index) {
    return str[index - 1];
  console.log(`Символ по индексу ${index} (позиция ${index}):`, char);
    return char;
}

// Задача 5

function removeFirstOccurrences(str, subStr) {
    const result = str.replace(subStr, '');
    console.log(${subStr} ${str}, result); 
    return result;
}

removeFirstOccurrences("vladik", "la");

// Задача 6

function getRectangleString(width, height) {
    const line = '*'.repeat(width);
    const result = (line + '\n').repeat(height).trim();

    console.log(width);
    console.log(height);
    console.log( + result); 

    return result;
}

// Пример использования:
getRectangleString(25, 37);
