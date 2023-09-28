const LOGO = document.querySelector('.logo');
const buyBtn = document.querySelector('#buy-btn');
const orderForm = document.querySelector('form') || []; // avoid null for constant "formField"
const formFields = orderForm.elements;
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#send-btn');
const contentCheck = document.querySelector('.checking-container');
const confirmBtn = document.querySelector('.confirm-btn');
const backToFormBtn =document.querySelector('.back-form');
const backToShopBtn = document.querySelector('.comeback-btn');
const PRODUCT_CARD = document.querySelector('.products');
const CART = document.querySelector('#cart');
const CART_BODY = document.querySelector('.cart-content');
const CART_CONTENT = document.querySelector('#cart-info');
const TOTAL_BLOCK = document.querySelector('.total-container');
const NUMBER_UNITS_ICON = document.querySelector('.prod-amount')

export {
  LOGO,
  buyBtn,
  orderForm,
  formFields,
  resetBtn,
  submitBtn,
  contentCheck,
  confirmBtn,
  backToFormBtn,
  backToShopBtn,
  PRODUCT_CARD,
  CART,
  CART_BODY,
  CART_CONTENT,
  TOTAL_BLOCK,
  NUMBER_UNITS_ICON
}