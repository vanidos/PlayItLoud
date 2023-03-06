let moreBtn = document.querySelector('.more-btn');
let additionalBlock = document.querySelectorAll('.additional-block');

moreBtn.addEventListener('click', function(){
    
    additionalBlock.forEach (function (item, i) { 
        item.classList.add('show');
    });

    this.style.display = 'none';

});