
const selectAllElements = document.querySelectorAll('[data-select]');




selectAllElements.forEach(function(item){ 
    item.addEventListener('click', function(){

        const realSelect = this.nextElementSibling;
         // Если кликнули по пункту внутри  dropdown 
    if (event.target.hasAttribute('data-select-item')) {


        // нашли заголовок у данного дропдауна  в его текстовом наполнении значения из дата-атрибута  data-select-item
        var  itemTitle = event.target.getAttribute('data-select-item')
        this.querySelector('[data-select-title]').textContent = itemTitle;


        // скрываем дропдаун 
        this.querySelector('.header-select__dropdown').classList.toggle('hidden'); 
        // связка с реальным селектором 
        // изменяем значение value  у реального селектора 
        if (realSelect) { 
            realSelect.value = itemTitle;
        }

       

          }else  {
            // если кликнулип о заголовку 
            // скрываем или открываем дропдаун
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');   
             
         }
    })    
});

