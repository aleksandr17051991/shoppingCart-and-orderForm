import { formFields, contentCheck, CART_BODY } from "../constants/constants.js";


export function goOrderForm(e) {
  e.preventDefault();
  window.location.href = '/components/order-form.html';
}

export function goSuccesPage(e) {
  e.preventDefault();

  window.location.href = '/components/success.html';
  localStorage.clear()
}

export function goToShopPage (e) {
  e.preventDefault()
  window.location.href = '/'
}

export function goCheckingPage(e) {
  e.preventDefault();
  window.location.href = '/components/check-form.html';
}

export function innitialCheckingForm() {
  for (let i=0; i<formFields.length; i=i+1) {
    const field = formFields[i];
    
    if (field.type === 'checkbox') {
      field.checked = JSON.parse(localStorage.getItem(field.name));
    } else {
      field.value = localStorage.getItem(field.name);
    }
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

export function resetData(e) {
  e.preventDefault();
  localStorage.clear();

  for (let i=0; i<formFields.length; i = i + 1) {
    const field = formFields[i];

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

  for (let i=0; i<localStorage.length; i = i + 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    if(key === 'followed') {
      const parsedVal = JSON.parse(value) ? 'followed' : `don't followed`;
      userDataHTML += `<p class="check-info">You ${parsedVal} for our daily updates !</p>` 
    } else {
      userDataHTML += `<p class="check-info">${key}: ${value}</p>`
    }
  }

  contentCheck.innerHTML = userDataHTML;
}

export function openCartContent(e) {
  e.preventDefault();
  CART_BODY.classList.toggle('active');
}


