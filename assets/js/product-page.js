document.addEventListener('DOMContentLoaded', function() {
   const urlParams = new URLSearchParams(window.location.search);
   const productId = urlParams.get('id');
   const title = urlParams.get('title');
   const price = urlParams.get('price');
   const name = urlParams.get('name');

   document.getElementById('productId').textContent = productId;
   document.getElementById('title').textContent = title;
   document.getElementById('price').textContent = `${price}`;
   document.getElementById('name').textContent = name ;

   const productImage = document.querySelector('.productImage');

   if (productId !== null) {
      productImage.src = `assets/images/products/${productId}.jpg`;
   } 
});


let mainImg = document.querySelector('.productImage');
let smallImg = document.querySelectorAll('.small-img');

mainImg.src = smallImg[0].src;

for (let i = 0; i < smallImg.length; i++) {
   smallImg[i].onclick = function () {
      mainImg.src = smallImg[i].src;
   }
}
