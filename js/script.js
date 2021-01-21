const menu = document.querySelector('.menu-icon')
const menuToggle = document.getElementById('menuItems')
menuToggle.style.maxHeight = '0px';
function menutoggle() {

   if (menuToggle.style.maxHeight == '0px') {
      menuItems.style.maxHeight = '200px'
   } else {
      menuItems.style.maxHeight = '0px'
   }
}

// Product Gallery


let product = document.getElementById('productImg')


let smallImg = document.getElementsByClassName('small-img')

// smallImg[0].onclick = function () {
//    product.src = smallImg[0].src;
// }

// smallImg[1].onclick = function () {
//    product.src = smallImg[1].src;
// }

// smallImg[2].onclick = function () {
//    product.src = smallImg[2].src;
// }

// smallImg[3].onclick = function () {
//    product.src = smallImg[3].src;
// }
// smallImg[4].onclick = function () {
//    product.src = smallImg[4].src;
// }

for (let i = 0; i < smallImg.length; i++) {
   let elem = smallImg[i];

   elem.addEventListener('click', () => {
      let getAttrElem = elem.getAttribute('src')
      product.src = getAttrElem
   })
}


// js for toggle form


let loginForm = document.getElementById('loginForm')
let resForm = document.getElementById('regForm')
let indicator = document.getElementById('indicator')

function register() {
   resForm.style.transform = "translateX(0px)"
   loginForm.style.transform = "translateX(0px)"
   indicator.style.transform = "translateX(100px)"
}

function login() {
   resForm.style.transform = "translateX(300px)"
   loginForm.style.transform = "translateX(300px)"
   indicator.style.transform = "translateX(0)"
}