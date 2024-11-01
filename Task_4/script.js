class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Ошибка: деление на ноль!";
        }
        return a / b;
    }
}


const calc = new Calculator();

console.log("Сложение: ", calc.add(5, 3));          // 8
console.log("Вычитание: ", calc.subtract(5, 3));    // 2
console.log("Умножение: ", calc.multiply(5, 3));     // 15
console.log("Деление: ", calc.divide(5, 0));         // Ошибка: деление на ноль!
console.log("Деление: ", calc.divide(5, 2));         // 2.5