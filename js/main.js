const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const rows = modal.querySelectorAll('.row');
const total = modal.querySelector('.modal-sum');


//console.log(btnCart);//

//const btnCart = document.getElementsByClassName('button--secondary');



//объявление функций

const modalOpen = () => {
    modal.classList.remove('modal--close')
}
const modalClose = () => {
    modal.classList.add('modal--close')
}

const getFullPrice =() => {
    let fullPrice =0;
    
    rows.forEach(row => {
        let newPrice=0;
        let priceBlock = row.querySelector('.price')
        let price = +priceBlock.textContent
        fullPrice+= price;
    })

    total.textContent=fullPrice;
  
}


//вызов функций


btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalClose);

rows.forEach(row => {
    let newPrice=0;
    let priceBlock = row.querySelector('.price')
    let price = +priceBlock.textContent
    let countBlock = row.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = row.querySelector('.minus')
    const btnPlus = row.querySelector('.plus')
    
    const getNewPrice = (count, price) =>{
        newPrice=count * price
        priceBlock.textContent=newPrice
        getFullPrice()

    }

    
   
    btnMinus.addEventListener('click', ()=> {
        if(count > 0) {
        count--
        countBlock.textContent=count
        getNewPrice(count, price)
    }
  })
     btnPlus.addEventListener('click', ()=> {
        count++
        countBlock.textContent=count
        getNewPrice(count, price)
    })
   
   
    
})  
getFullPrice()



/*находим main ресторана и индекса*/
const mainIndex = document.getElementById('index')
const mainRest = document.getElementById('restourant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')

const getToMain = () => {
   mainRest.classList.toggle('not--activ')
   mainIndex.classList.toggle('not--activ')
}


cardsIndex.forEach(card=> {
    card.addEventListener('click', () => {
        getToMain();
    })
})