const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const rows = modal.querySelectorAll('.row');
const total = modal.querySelector('.modal-sum');
/*находим main ресторана и индекса*/
const mainIndex = document.getElementById('index')
const mainRest = document.getElementById('restourant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')
const logos = document.querySelectorAll('.logo-link')
const cardsBlockRest= mainRest.querySelector('.cards')
const cardsRest = cardsBlockRest.querySelectorAll('.card')


//console.log(btnCart);//

//const btnCart = document.getElementsByClassName('button--secondary');



//объявление функций

const getProductModal =(nameProduct, priceProduct, index=0) => {
   

   
   // let nameProductBlock =rows[index].querySelector('.product-name')
   // let priceProductBlock = rows[index].querySelector('.price')
//
  //  nameProductBlock.textContent = nameProduct
   // priceProductBlock.textContent= priceProduct
 
}

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

const getNewPrice = (count, price, priceBlock) =>{
    let newPrice=0;
    newPrice=count * price
    priceBlock.textContent=newPrice
    getFullPrice()

}


//вызов функций


btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalClose);


modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen();
    }
})
cardsRest.forEach((card, index) => {
    let nameProductBlock =card.querySelector('.cart-title')
    let priceProductBlock = card.querySelector('.product-price')
    let nameProduct=nameProductBlock.textContent
    let priceProduct = +priceProductBlock.textContent.slice(0, 3)

    console.btnProduct = card.querySelector('button')

    console.log(btnProduct);

    getProductModal(nameProduct, priceProduct, index)

   
})
rows.forEach(row => {
    let newPrice=0;
    let priceBlock = row.querySelector('.price')
    let price = +priceBlock.textContent
    let countBlock = row.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = row.querySelector('.minus')
    const btnPlus = row.querySelector('.plus')
    
   
    
   
    btnMinus.addEventListener('click', ()=> {
        if(count > 0) {
        count--
        countBlock.textContent=count
        getNewPrice(count, price, priceBlock)
    }
  })
     btnPlus.addEventListener('click', ()=> {
        count++
        countBlock.textContent=count
        getNewPrice(count, price, priceBlock)
    })
   
   
    
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
getFullPrice()

//логеры







