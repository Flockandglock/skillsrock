function isPalindrome(str) {
//     // Удаляем пробелы и приводим строку к нижнему регистру
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
//     // Сравниваем строку с её обратной версией
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

isPalindrome("А роза упала на лапу Азора");
isPalindrome("Привет"); 


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


function chunkArray(array, size) {
    const result = [];
    
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    
    return result;
}


