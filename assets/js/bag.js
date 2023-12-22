let bagItemObjects;

onLoad();

function onLoad() {
   loadBagItemObjects();
   displayBagItems();
}

function loadBagItemObjects() {
   bagItemObjects = bagItems.map(productId => {
      for (let i = 0; i < products.length; i++) {
         if (productId == products[i].id) {
            return products[i]; 
         }
      }
   });
   console.log(bagItemObjects);
}

function displayBagItems() {
   console.log(233);
   console.log(bagItems);
   let containerElement = document.querySelector('.bag-items-container');

   containerElement.innerHTML = bagItemObjects.map(item => `
      <div>
         <img src="${item.image}" alt="${item.name}">
         <p>${item.name}</p>
         <p>${item.price.original !== null ? item.price.original : item.price.discounted}</p>
      </div>
   `).join('');
}

function generateItem(product) {
   return `
      <div>
         <img src="${product.image}" alt="${product.name}">
         <p>${product.name}</p>
         <p>${product.price.original !== null ? product.price.original : product.price.discounted}</p>
      </div>
   `;
}