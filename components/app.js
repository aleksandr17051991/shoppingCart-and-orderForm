import { BODY, PRODUCT_CARD, CART, CART_BODY, NUMBER_UNITS_ICON } from '../constants/constants.js';
import { openCartContent } from '../helpers/event_handlers.js';
import products from "../server/server.js";
import { addToCart } from './cart.js';

// rendering all products from server
function renderProduct() {
  products.forEach(product => {
    const {id, name, price, description, imgSrc} = product;
    let contentCard = `
        <div class="product-card">
          <h2>${name}</h2>
          <div class="prod-content">
            <div class="product-img">
              <img src="${imgSrc}" alt="name">
            </div>
            <div class="prod-info">
              <p>${price} $</p>
              <p>${description}</p>
              <button id="to-cart" data-product-id="${id}">To Cart</button>
            </div>
          </div>
        </div>
    `;
    
    PRODUCT_CARD.innerHTML += contentCard;
  }); 
}

renderProduct()

// closing cart component
BODY.addEventListener('click', function(event) {
  if (event.target !== CART_BODY &&
      !CART_BODY.contains(event.target) &&
      !(event.target.classList.contains('cart-icon')) && 
      !(event.target.classList.contains('prod-amount')) &&
      !(event.target.id === 'to-cart') && 
      !(event.target.classList.contains('btn-minus')) && 
      !(event.target.classList.contains('btn-plus')) && 
      !(event.target.classList.contains('delete-item'))) {
    CART_BODY.classList.remove('active');
  }
});

// work with rendered buttons "to cart"
PRODUCT_CARD.addEventListener('click', function(e) {
  if (e.target.id === 'to-cart') {
    e.preventDefault();
    const id = parseInt(e.target.dataset.productId);
    addToCart(id)
  }
})  

// route's hendlers with buttons
CART.addEventListener('click', function (event) {
  
  if (event.target.classList.contains('cart-icon') ||
      (event.target === NUMBER_UNITS_ICON)) {
        openCartContent(event)
      } 
      
});

