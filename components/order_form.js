import {LOGO, ORDER_FORM, SUBMIT_BTN, RESET_BTN} from "../constants/constants.js";
import { innitialCheckingForm, storeData, storeSize, goCheckingPage, resetData, goToShopPage} from "../helpers/event_handlers.js";


// go to home page (clicked logo)
LOGO.addEventListener('click', goToShopPage);

// check initial form, and added data from localStorage
window.addEventListener('load', innitialCheckingForm)

// submit form
ORDER_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
})

// change inputs in form
ORDER_FORM.addEventListener('change', storeData);

// send
SUBMIT_BTN.addEventListener('click', goCheckingPage);

// reset
RESET_BTN.addEventListener('click', resetData);


document.addEventListener('change', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('sizes')) {
    storeSize(e)
  }
})

