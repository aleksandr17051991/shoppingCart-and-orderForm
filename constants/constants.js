const BODY = document.body;
const LOGO = document.querySelector('.logo');
const BUY_BTN = document.querySelector('#buy-btn');
const ORDER_FORM = document.querySelector('form') || []; // avoid null for constant "formField"
const FORM_FIELDS = ORDER_FORM.elements;
const RESET_BTN = document.querySelector('#reset');
const SUBMIT_BTN = document.querySelector('#send-btn');
const CHECKING_CONTAINER = document.querySelector('.checking-container');
const CONFIRM_BTN = document.querySelector('.confirm-btn');
const TO_FORM_BTN =document.querySelector('.back-form');
const TO_SHOP_BTN = document.querySelector('.comeback-btn');
const PRODUCT_CARD = document.querySelector('.products');
const CART = document.querySelector('#cart');
const CART_BODY = document.querySelector('.cart-content');
const CART_CONTENT = document.querySelector('#cart-info');
const TOTAL_BLOCK = document.querySelector('.total-container');
const NUMBER_UNITS_ICON = document.querySelector('.prod-amount');
const CART_ORDERS = document.querySelector('.cart-order'); 
const ORDERED_ITEMS_CONTENT = document.querySelector('.ordered-items');
const LS_CART_ITEMS = JSON.parse(localStorage.getItem("cart")) || [];

export {
  BODY,
  LOGO,
  BUY_BTN,
  ORDER_FORM,
  FORM_FIELDS,
  RESET_BTN,
  SUBMIT_BTN,
  CHECKING_CONTAINER,
  CONFIRM_BTN,
  TO_FORM_BTN,
  TO_SHOP_BTN,
  PRODUCT_CARD,
  CART,
  CART_BODY,
  CART_CONTENT,
  TOTAL_BLOCK,
  NUMBER_UNITS_ICON,
  CART_ORDERS,
  ORDERED_ITEMS_CONTENT,
  LS_CART_ITEMS
}