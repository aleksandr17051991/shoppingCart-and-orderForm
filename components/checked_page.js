import { CONFIRM_BTN, TO_FORM_BTN } from "../constants/constants.js";
import { createUserInfo, goSuccesPage, goOrderForm } from "../helpers/event_handlers.js";

// create block with current user info (data from localStorage)
window.addEventListener('load', createUserInfo);

// confirm button -> go to success page
CONFIRM_BTN.addEventListener('click', goSuccesPage);

// back to form page button
TO_FORM_BTN.addEventListener('click', goOrderForm);