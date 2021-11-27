const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');

//const total = modal.querySelector('.modal-sum');
/*находим main ресторана и индекса*/
const mainIndex = document.getElementById('index')
const mainRest = document.getElementById('restourant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')
const logos = document.querySelectorAll('.logo-link')
//const cardsBlockRest= mainRest.querySelector('.cards')
//const cardsRest = cardsBlockRest.querySelectorAll('.card')

//let rows = modal.querySelectorAll('.row');
//let nameArr= []


//объявление функций



const modalOpen = () => {
    modal.classList.remove('modal--close')
}
const modalClose = () => {
    modal.classList.add('modal--close')
}

const getToMain = () => {
    mainRest.classList.toggle('not--active')
    mainIndex.classList.toggle('not--active')
 }
 





//вызов функций


btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalClose);


modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen();
    }
})


cardsIndex.forEach(card=> {
    card.addEventListener('click', () => {
        getToMain();
    })
})

logos.forEach(logo => {
    logo.addEventListener('click', (event) =>{
        event.preventDefault();
        if (mainIndex.classList.contains('not--active')) {
            getToMain();
        }
        
    })
})


//логеры







