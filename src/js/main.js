//  нашли контейнер с селектом 
const selectElement = document.querySelector('[data-select]');
// нашли реальный селект
const selectReal = document.querySelector('#selectReal')

// прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener("click", function (event) {


    // проверка где произошел клик
    // event.target - показывает на каком именно елементе HTML произошел клик 
    // Если кликнули по пункту внутри  dropdown 
    if (event.target.hasAttribute('data-select-item')) {

        console.log('click on ITEM!');
        // Поулчаем  значеине этого пункта из  атрибута data-select-item у этого елемента 
        const itemTitle = event.target.getAttribute('data-select-item'); // Mobile
        console.log(itemTitle)
        // находим заголовок нашего елемента и меняем его текст на значение из выбранного пункта 
        event.target.closest('[data-select]').querySelector('[data-select-title]').textContent = itemTitle;
        // Скрывает dropdown  
        
        event.target.closest('[data-select]').querySelector('.header-select__dropdown').classList.toggle('hidden');

        // связка с реальным селектом
        // изменяем value  у реального селекта 
        selectReal.value = itemTitle;
    } else {
        // Иначе : клик не  по тайтлу или его область его блока 
        console.log('click on TITLE! and AROUND');
        this.querySelector('.header-select__dropdown').classList.toggle('hidden');

    }

});