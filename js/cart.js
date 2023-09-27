import products from "./server.js";
import { CART_CONTENT } from "../constants/constants.js";


// cart arr 
let cart = [];

// ADD PRODUCTS TO CART
function addToCart(id) {
  const prodItem = products.find((product) => product.id === id);

  if (cart.some((cartItem) => cartItem.id === id)) {
    console.log('You already added this position to cart. Check cart!');
  } else {
    cart = [ ...cart, { ...prodItem, nmbOfUnits: 1}]; //or cart.push({...prodItem, nmbOfUnits: 1})
  }
  console.log(cart);

  renderCartItems();
}


function renderCartItems() {
  //clear previous rendering, because will added all items from cart Array for every pressed on btn "to cart"
  CART_CONTENT.innerHTML = '';  

  cart.forEach((item) => {
    const { id, name, imgSrc, price, nmbOfUnits } = item;
    CART_CONTENT.innerHTML += ` 
              <div class="cart-item">
                <div class="item-info">
                  <div class="item-img">
                    <img src="${imgSrc}" alt="${name}">
                  </div>
                  <p>${name}</p>
                </div>
                <div class="item-price">
                  <p><small>$</small>${price}</p>
                </div>
                <div class="unit-value">
                  <div class="btn-minus">-</div>
                  <div class="current-unit">${nmbOfUnits}</div>
                  <div class="btn-plus">+</div>
                </div>
              </div>    
    `;
  })
}

// const MINUS_UNIT_BTN = document.querySelector('.btn-minus');
// const PLUS_UNIT_BTN = document.querySelector('.btn-plus');

// MINUS_UNIT_BTN.addEventListener('click', changeNumberOfUnits('minus'));
// PLUS_UNIT_BTN.addEventListener('click', changeNumberOfUnits('plus')) 

// function changeNumberOfUnits(action) {
//   console.log(action);
// }



export { addToCart };