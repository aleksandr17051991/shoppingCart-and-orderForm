import {LOGO, orderForm, submitBtn, resetBtn} from "../constants/constants.js";
import { innitialCheckingForm, storeData, goCheckingPage, resetData, goToShopPage} from "../helpers/event_handlers.js";


// go to home page (clicked logo)
LOGO.addEventListener('click', goToShopPage);

// check initial form, and added data from localStorage
window.addEventListener('load', innitialCheckingForm)

// submit form
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
})

// change inputs in form
orderForm.addEventListener('change', storeData);

// send
submitBtn.addEventListener('click', goCheckingPage);

// reset
resetBtn.addEventListener('click', resetData);

