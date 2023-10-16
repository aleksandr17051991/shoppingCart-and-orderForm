import { BODY, PRODUCT_CARD, CART, NUMBER_UNITS_ICON } from '../constants/constants.js';
import { openCartContent, closeCartWindow } from '../helpers/event_handlers.js';
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
              <button id="to-cart" class="to-cart" data-product-id="${id}">To Cart</button>
            </div>
          </div>
        </div>
    `;
    
    PRODUCT_CARD.innerHTML += contentCard;
  }); 
};

renderProduct();

BODY.addEventListener('click', closeCartWindow);

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

