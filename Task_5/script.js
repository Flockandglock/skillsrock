function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        // Сбрасываем таймер, если функция вызывается снова
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Устанавливаем новый таймер
        timeoutId = setTimeout(() => {
            func.apply(this, args); 
        }, delay);
    };
}


const logMessage = () => {
    console.log('Функция вызвана!');
};

const debouncedLogMessage = debounce(logMessage, 1000);

// Пример вызова
debouncedLogMessage(); // Функция не будет вызвана сразу
debouncedLogMessage(); // Таймер сбрасывается




// Глубокое клонирование объекта

function deepClone(obj) {
    // Проверяем, является ли obj null или не объектом (например, примитив)
    if (obj === null || typeof obj !== 'object') {
        return obj; // Возвращаем значение, если это примитив
    }

    // Проверяем, является ли объект массивом
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)); // Рекурсивно клонируем каждый элемент массива
    }

    // Создаем новый объект для клонирования
    const clonedObj = {};
    
    // Клонируем каждое свойство объекта
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]); // Рекурсивно клонируем каждое свойство
        }
    }

    return clonedObj; // Возвращаем клонированный объект
}

// Пример использования
const original = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    },
};

const cloned = deepClone(original);

// Изменим оригинальный объект для проверки
cloned.address.city = "Los Angeles";

console.log("Оригинал:", original.address.city);
console.log("Клон:", cloned.address.city);

