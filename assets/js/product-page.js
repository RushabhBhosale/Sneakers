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

   const productImage = document.getElementById('productImage');

   if (productId !== null) {
      productImage.src = `assets/images/products/${productId}.jpg`;
   } 
});
