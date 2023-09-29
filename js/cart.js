import products from "./server.js";
import { CART_CONTENT, TOTAL_BLOCK, NUMBER_UNITS_ICON } from "../constants/constants.js";


// cart's data arr 
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCart();


// ADD PRODUCTS TO CART
function addToCart(id) {
  const prodItem = products.find((product) => product.id === id);

  if (cart.some((cartItem) => cartItem.id === id)) {
    console.log('You already added this position to cart. Check cart!');
    changeNumberOfUnits('plus', id)
  } else {
    cart = [ ...cart, { ...prodItem, nmbOfUnits: 1}]; //or cart.push({...prodItem, nmbOfUnits: 1})
  } 

  updateCart();
}

function updateCart() {
  renderCartItems();
  renderTotal();

  localStorage.setItem("cart", JSON.stringify(cart));
}

// render total block + calculate price and items
function renderTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice = totalPrice + (item.price * item.nmbOfUnits);
    totalItems = totalItems + item.nmbOfUnits;
  })

  TOTAL_BLOCK.innerHTML = `
                <div class="total-content">
                  <p>Total <span>(${totalItems} item):</span></p>
                </div>
                <div class="total-price">
                  <p>$<span> ${totalPrice.toFixed(2)}</span></p>
                </div>
  `;
  NUMBER_UNITS_ICON.textContent = totalItems;
}

// render items in cart's block
function renderCartItems() {
  //clear previous rendering, because will added all items from cart Array for every pressed on btn "to cart"
  CART_CONTENT.innerHTML = '';  

  cart.forEach((item) => {
    const { id, name, imgSrc, price, nmbOfUnits } = item;
    CART_CONTENT.innerHTML += ` 
              <div class="cart-item">
                <div class="item-info">
                  <div class="delete-item" data-item-id="${id}">+</div>
                  <div class="item-img">
                    <img src="${imgSrc}" alt="${name}">
                  </div>
                  <p>${name}</p>
                </div>
                <div class="item-price">
                  <p><small>$</small>${price}</p>
                </div>
                <div class="unit-value">
                  <div class="btn-minus" data-item-id="${id}">-</div>
                  <div class="current-unit">${nmbOfUnits}</div>
                  <div class="btn-plus" data-item-id="${id}">+</div>
                </div>
              </div>    
    `;
  })
}

// event delegation for btns - minus/plus
CART_CONTENT.addEventListener('click', (event) => {
  event.preventDefault();
  
  const currentTarget = event.target;
  const cartItemId = parseInt(currentTarget.dataset.itemId);

  if (currentTarget.classList.contains('btn-minus')) {
    changeNumberOfUnits('minus', cartItemId);
  } else if (currentTarget.classList.contains('btn-plus')) {
    changeNumberOfUnits('plus', cartItemId);
  } else if (currentTarget.classList.contains('delete-item')) {
    removeCartItem(cartItemId);
  }
})

// decrement or increment number of units in cart array
function changeNumberOfUnits(action, itemId) {
  cart = cart.map((item) => {
    let unitNmb = item.nmbOfUnits;
    
    if (item.id === itemId) {
      if (action === 'minus' && unitNmb > 1) {
        unitNmb = unitNmb - 1;
      } else if (action === 'plus' && unitNmb < item.instock) {
        unitNmb = unitNmb + 1;
      }
    }
    console.log(cart);
    return { ...item, nmbOfUnits: unitNmb}
  })

  //render updated cart array
  updateCart();
}


// remove cart element
function removeCartItem(itemId) {
  console.log(itemId);

  cart = cart.filter((item) => item.id !== itemId);
  updateCart();
}



export { addToCart };