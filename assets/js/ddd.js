




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

   // Product Containers

   const menProducts = products.filter(product => product.gender == 'Men');
   const womenProducts = products.filter(product => product.gender == 'Women');
   const allProducts = products;
   const saleProducts = products.filter(product => product.sale !== null);
   const bestSellerProducts = products.filter(product => product.category == 'bestseller');
   const newArrivalProducts = products.filter(product => product.category == 'new');
   const hoodieProducts = products.filter(product => product.type == 'Hoodie');
   const kurtiProducts = products.filter(product => product.type == 'kurti');
   const joggerProducts = products.filter(product => product.type == 'Joggers');
   const shoesProducts = products.filter(product => product.type == 'Shoes');

   const menContainer = document.querySelector('#menContainer .pro-container');
   const womenContainer = document.querySelector('#womenContainer .pro-container');
   const allContainer = document.querySelector('#allContainer .pro-container');
   const saleContainer = document.querySelector('#saleContainer .pro-container');
   const bestSellerContainer = document.querySelector('#bestSellerContainer .pro-container');
   const newArrivalContainer = document.querySelector('#newArrivalContainer .pro-container');
   const hoodieContainer = document.querySelector('#hoodieContainer .pro-container');
   const kurtiContainer = document.querySelector('#kurtiContainer .pro-container');
   const joggerContainer = document.querySelector('#joggerContainer .pro-container');
   const shoesContainer = document.querySelector('#shoesContainer .pro-container');

   function renderProducts(container, products) {
      if (!container) {
         return;
      }
         let innerHTML = '';

         products.forEach(product => {
            if (!container) {
               return;
           }
           const imagePath = `assets/images/products/${product.image}`;
            innerHTML += `
            <div class="pro position-relative" onclick="redirectToProduct('${product.name}', '${product.type}', '${product.price.original !== null ? product.price.original : `${product.price.discounted}`}', '${imagePath}', '${product.id}')">

            <img class="img-fluid" src="${imagePath}">
               <div class="des">
                  <span>${product.type} ${product.id}</span>
                  <h5>${product.name}</h5>
                  <div class="star">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="d-flex price position-absolute align-items-center">
                     <h4 class="me-2 fs-6">${product.price.original !== null ? product.price.original : `${product.price.discounted}`}</h4>
                     <h4 class="discount">${product.price.discounted}</h4>
                  </div>
               </div>
               ${product.sale !== null ? `<div class="sale position-absolute">${product.sale}</div> ` : ''}
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
         .then(() => renderPromise(allContainer, allProducts))
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

      Promise.resolve()
         .then(() => renderPromise(hoodieContainer, hoodieProducts))
         .catch((error) => console.error(error));

      Promise.resolve()
         .then(() => renderPromise(joggerContainer, joggerProducts))
         .catch((error) => console.error(error));

      Promise.resolve()
         .then(() => renderPromise(kurtiContainer, kurtiProducts))
         .catch((error) => console.error(error));

      Promise.resolve()
         .then(() => renderPromise(shoesContainer, shoesProducts))
         .catch((error) => console.error(error));

   });

   function redirectToProduct(name, type, price, image, id) {
      const productPageUrl = 'product-page.html';
      const queryParams = `?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&id=${encodeURIComponent(id)}`;
   
      const redirectToUrl = productPageUrl + queryParams;
      window.location.href = redirectToUrl;
   }
