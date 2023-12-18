document.addEventListener("DOMContentLoaded", function () {
   const openMenu = document.querySelector('#menuToggle');
   const mobileMenu = document.querySelector('#mobileMenu');
   const closeMenu = document.querySelector('#closeMenu');
   const body = document.querySelector('body')

   closeMenu.addEventListener("click", () => {
      toggleMenu();
   })

   openMenu.addEventListener("click", () => {
      toggleMenu();
   })

   body.addEventListener("click", (event) => {
      if (!mobileMenu.contains(event.target) && !openMenu.contains(event.target)) {
         if (mobileMenu.classList.contains("active")) {
            toggleMenu();
         }
      }
   });

   function toggleMenu() {
      mobileMenu.classList.toggle("active");
   }

   const menProducts = products.filter(product => product.gender == 'Men');
   const womenProducts = products.filter(product => product.gender == 'Women');
   const saleProducts = products.filter(product => product.sale !== null);
   const bestSellerProducts = products.filter(product => product.category == 'bestseller');
   const newArrivalProducts = products.filter(product => product.category == 'new');

   const menContainer = document.querySelector('#menContainer');
   const womenContainer = document.querySelector('#womenContainer');
   const saleContainer = document.querySelector('#saleContainer');
   const bestSellerContainer = document.querySelector('#bestSellerContainer');
   const newArrivalContainer = document.querySelector('#newArrivalContainer');


   function renderProducts(container, products) {

      let innerHTML = '';

      products.forEach(product => {
         innerHTML += `
            <div class="product text-center">
               <div class="image position-relative">
                  <img class="img-fluid" src="${product.image}" alt="">
                  ${product.sale !== null ? `<div class="sale position-absolute h4">${product.sale}</div>` : ''}
                  <div class="position-absolute bottom-0 py-2 text-center quick w-100">Quick view</div>
               </div>
               <div class="name h4">${product.name}</div>
               <div class="price mb-2 d-flex justify-content-center">
                     <div class="discount">${product.price.discounted !== null ? product.price.discounted : ''}</div>
                     <div>${product.price.original}</div>
               </div>
               
               <div class="ratings d-flex justify-content-center">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
               </div>
            </div>
         `;
      });
      container.innerHTML = innerHTML;
   }

   function renderPromise(container, products) {
      return new Promise((resolve, reject) => {
         renderProducts(container, products);
         resolve();
      });
   }

   Promise.resolve()
      .then(() => renderPromise(womenContainer, womenProducts))
      .catch((error) => console.error(error));

   Promise.resolve()
      .then(() => renderPromise(menContainer, menProducts))
      .catch((error) => console.error(error));

   Promise.resolve()
      .then(() => renderPromise(saleContainer, saleProducts))
      .catch((error) => console.error(error));

   Promise.resolve()
      .then(() => renderPromise(bestSellerContainer, bestSellerProducts))
      .catch((error) => console.error(error));

   Promise.resolve()
      .then(() => renderPromise(newArrivalContainer, newArrivalProducts))
      .catch((error) => console.error(error));




});
