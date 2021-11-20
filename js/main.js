 const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
//console.log(btnCart);//

//const btnCart = document.getElementsByClassName('button--secondary');






const modalOpen = () => {
    modal.classList.remove('modal--close')
}
const modalClose = () => {
    modal.classList.add('modal--close')
}

btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalClose);

