const controls = document.querySelectorAll('.controle');
let currentItem = 0;
const itens = document.querySelectorAll('.iten');

const maxItems = itens.length;

controls.forEach(control => {
    
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('seta-left');

        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItems) {
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1;
        }
        itens.forEach(item => item.classList.remove('current-iten'));
        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
        itens[currentItem].classList.add('current-iten');
    });
});