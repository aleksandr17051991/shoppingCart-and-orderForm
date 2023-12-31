import { FORM_FIELDS, CHECKING_CONTAINER, CART_BODY, CART_ORDERS, ORDERED_ITEMS_CONTENT, LS_CART_ITEMS } from "../constants/constants.js";


export function goOrderForm(e) {
  e.preventDefault();
  window.location.href = '/pages/order-form.html';
}

export function goSuccesPage(e) {
  e.preventDefault();

  window.location.href = '/pages/success.html';
  localStorage.clear()
}

export function goToShopPage (e) {
  e.preventDefault()
  window.location.href = '/'
}

export function goCheckingPage(e) {
  e.preventDefault();
  window.location.href = '/pages/check-form.html';
}

export function innitialCheckingForm() {
  for (const field of FORM_FIELDS) {    
    if (field.type === 'checkbox') {
      field.checked = JSON.parse(localStorage.getItem(field.name));
    } else {
      field.value = localStorage.getItem(field.name);
    }
  }

  for (const item of LS_CART_ITEMS) {
    const { id, name, imgSrc, price, nmbOfUnits } = item;
    CART_ORDERS.innerHTML += `
          <div class="ordered-item">
            <h3>${name}</h3>
            <div class="item-photo">
              <img src="${imgSrc}" alt="${name}">
            </div>
            <p>order unit: ${nmbOfUnits}</p>
            <p>total: ${price * nmbOfUnits} $</p>
            <div class="form-group">
              <label for="size${id}">Select size</label>
              <select name="Size" id="size${id}" class="sizes" data-id="${id}" required>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
    `;

    if (!item.size) {
      item.size = "XS";
      localStorage.setItem("cart", JSON.stringify(LS_CART_ITEMS));
    }

    const sizesFields = document.querySelectorAll('.sizes');
    sizesFields.forEach((item, index) => {
      item.value = LS_CART_ITEMS[index].size
    })
  }
}

export function storeData(e) {
  e.preventDefault();

  if (e.target.type === 'checkbox') {
    localStorage.setItem(e.target.name, e.target.checked);
  } else {
    localStorage.setItem(e.target.name, e.target.value);
  }
}

export function storeSize(e) {
  e.preventDefault();
 
  const elemID = parseInt(e.target.dataset.id);
  const size = e.target.value;
  
  for (const item of LS_CART_ITEMS) {
    if(item.id === elemID) {
      item.size = size
      localStorage.setItem("cart", JSON.stringify(LS_CART_ITEMS))
    } 
  }
}

export function resetData(e) {
  e.preventDefault();

  const cartStorage = localStorage.getItem("cart")
  localStorage.clear();
  localStorage.setItem("cart", cartStorage)

  for (const field of FORM_FIELDS) {
    if (field.tagName.toLowerCase() === 'select') {
      field.selectedIndex = 0;
    } else if (field.type === 'checkbox') {
      field.checked = false;
    } else {
      field.value = '';
    } 
  }
}

export function createUserInfo() {
  let userDataHTML = '';
  let orderedItems = '';

  for (let i=0; i<localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (key === "cart") {
      const cartVal = JSON.parse(value)
      let total = 0;
      cartVal.forEach((item) => {
        total = total + (item.price * item.nmbOfUnits)
        orderedItems += `
        <div class="ordered-product">
          <p>${item.name} (size ${item.size}):</p>
          <p>${item.nmbOfUnits} items</p>
        </div>
      `;
      })
      orderedItems += `<div class="ordered-total">total: ${total} $</div>`
      
    } else if(key === 'followed') {
      const parsedVal = JSON.parse(value) ? 'followed' : `don't followed`;
      userDataHTML += `<p class="check-info">You ${parsedVal} for our daily updates !</p>` 
    } else {
      userDataHTML += `<p class="check-info">${key}: ${value}</p>`
    }
  }

  CHECKING_CONTAINER.innerHTML = userDataHTML;
  ORDERED_ITEMS_CONTENT.innerHTML = orderedItems;
}

export function openCartContent(e) {
  e.preventDefault();
  CART_BODY.classList.toggle('active');
}

export function closeCartWindow(event) {
  event.preventDefault();

  const currentTarget = event.target;
  const classesToCheck = [
    "cart-content",
    "cart-icon",
    "prod-amount",
    "to-cart",
    "btn-minus",
    "btn-plus",
    "delete-item"
  ];

  if (!CART_BODY.contains(currentTarget) &&
      !classesToCheck.some((className) => currentTarget.classList.contains(className))) {
    CART_BODY.classList.remove('active');
  }
}
