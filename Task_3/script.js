document.addEventListener("DOMContentLoaded", () => {
    async function fetchRandomUsers() {
        // Делаем запрос к API
        const response = await fetch('https://randomuser.me/api/?results=10');
        //Парсим ответ в json
        const data = await response.json();
        //Достаем массив с объектами 
        const users = data.results;

        // Получаем элемент со страницы и с помощью forEach добавляем listItem нашему userList
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
                <div>
                    <strong>${user.name.first} ${user.name.last}</strong><br>
                    <span>${user.email}</span>
                </div>
            `;
            userList.appendChild(listItem);
        });
    }

   
    fetchRandomUsers();



    // Карусель

    const images = document.getElementById('carouselImages');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
        
    let currentIndex = 0;

    function showImage(index) {
        const totalImages = images.children.length;
        currentIndex = (index + totalImages) % totalImages; // Обеспечиваем цикличность
        const offset = -currentIndex * 100; // Сдвиг в процентах
        images.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        showImage(currentIndex + 1);
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    // События для кнопок
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Автоматическая смена изображений
    setInterval(nextImage, 5000); // Каждые 3 секунды
});

