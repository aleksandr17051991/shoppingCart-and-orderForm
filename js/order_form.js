import {LOGO, orderForm, submitBtn, resetBtn} from "../constants/constants.js";
import { innitialCheckingForm, storeData,  goCheckingPage, resetData, goToShopPage} from "../helpers/event_handlers.js";


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


document.addEventListener('change', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('sizes')) {
    storeSize(e)
  }
})

function storeSize(e) {
  e.preventDefault();

  const elemID = parseInt(e.target.dataset.id);
  const size = e.target.value;
  const itemsArr = JSON.parse(localStorage.getItem("cart"));
  

  // const currentEl = itemsArr.filter((itemObj) => itemObj.id === elemID).map((product) => {
  //   return {...product, size: sizeVal}
  // })
  // console.log(currentEl);

  for (let i=0; i<itemsArr.length; i= i+1) {
    if(itemsArr[i].id === elemID) {
      itemsArr[i] = { ...itemsArr[i], size}
      console.log(itemsArr[i]);
      localStorage.setItem("cart", JSON.stringify(itemsArr))
    }
  }
}


