import { confirmBtn, backToFormBtn } from "../constants/constants.js";
import { createUserInfo, goSuccesPage, goOrderForm } from "../helpers/event_handlers.js";

// create block with current user info (data from localStorage)
window.addEventListener('load', createUserInfo);

// confirm button -> go to success page
confirmBtn.addEventListener('click', goSuccesPage);

// back to form page button
backToFormBtn.addEventListener('click', goOrderForm);