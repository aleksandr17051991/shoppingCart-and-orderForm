import { buyBtn, PRODUCT_CARD, CART} from '../constants/constants.js';
import { goOrderForm, openCartContent } from '../helpers/event_handlers.js';
import products from "./server.js";
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

// work with rendered buttons "to cart"
const toBasketBtn = document.querySelectorAll('#to-cart'); //!!!! must to be relocated constants.js 

for (let i = 0; i < toBasketBtn.length; i = i + 1) {
    toBasketBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(e.target.dataset.productId)
      addToCart(id)
    })
  }


// rout hendlers with buttons
CART.addEventListener('click', openCartContent);

buyBtn.addEventListener('click', goOrderForm);



















// const toBasketBtn = document.querySelectorAll('#to-basket');
// const counterCart = document.querySelector('.prod-amount');
// for (let i = 0; i < toBasketBtn.length; i = i + 1) {
//   toBasketBtn[i].addEventListener('click', (e) => {
//     e.preventDefault();

  
//     let preCount = JSON.parse(localStorage.getItem(products[i].name))
//     console.log(preCount, products[i].name);

//     if(preCount) {
//       localStorage.setItem(products[i].name, preCount + 1);
//     } else {
//       localStorage.setItem(products[i].name, 1);
//     }
//   });
// }

