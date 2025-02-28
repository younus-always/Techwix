// Cart open function

let open = document.querySelector('.shoppingcart-popup').style.display = "none";

document.querySelector(".shoppingcart").addEventListener('click', () => {
  document.querySelector('.shoppingcart-popup').style.display = "block";
});


