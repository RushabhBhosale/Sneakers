const products = [
   {
      id: 1,
      name: "Womens Cream Suede",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-400x400.jpg",
      price: {
         original: "$59.90",
         discounted: null
      },
      sale: null,
      gender: "Women",
      type: "Shoes",
      category: "bestseller",
   },
   {
      id: 21,
      name: "Less is More",
      image: "https://nobero.com/cdn/shop/files/less-is-more-2.jpg?v=1698933078",
      price: {
         original: "$54.90",
         discounted: "$44.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie",
      category: "bestseller"
   },
   {
      id: 2,
      name: "Mens Green Running",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg",
      price: {
         original: "$104.90",
         discounted: "$89.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 3,
      name: "Mens Classic Blue",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg",
      price: {
         original: "$79.90",
         discounted: "$69.00"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 4,
      name: "Womens Candy City Run",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg",
      price: {
         original: "$54.90",
         discounted: "$40.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 5,
      name: "Womens Tan Sneaker",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg",
      price: {
         original: "$89.90",
         discounted: "$80.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 6,
      name: "Mens Black Running",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg",
      price: {
         original: "$79.90",
         discounted: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
      category: "new",
   },
   {
      id: 42,
      name: "Slate Grey Sweatpant",
      image: "https://www.beyours.in/cdn/shop/products/slate-grey-sweatpant-2_1200x.jpg?v=1642687036",
      url: "https://www.beyours.in/products/slate-grey-sweatpants",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$109.99",
         discounted: "$99.99"
      },
      category: "bestseller",
      sale: "sale!"
   },
   {
      id: 19,
      name: "And Life Goes On (Oversized)",
      image: "https://nobero.com/cdn/shop/files/and_2db2cc0d-24e0-4c9c-8f19-74993d88fa5a.jpg?v=1700824262",
      price: {
         original: "$64.90",
         discounted: "$54.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie",
      category: "bestseller",
   },
   {
      id: 43,
      name: "French Grey Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/French-Grey-Sweatpant_1200x.jpg?v=1683028488",
      url: "https://www.beyours.in/products/french-grey-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$114.99",
         discounted: "$104.99"
      },
      category: "bestseller",
      sale: "sale!"
   },
   {
      id: 7,
      name: "Mens Navy Running",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
      price: {
         original: "$104.90",
         discounted: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 8,
      name: "Womens Mint Sneaker",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-400x400.jpg",
      price: {
         original: "$89.90",
         discounted: null
      },
      sale: null,
      gender: "Women",
      type: "Shoes",
      category: "new",
   },
   {
      id: 9,
      name: "Womens Peach Training",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg",
      price: {
         original: "$69.90",
         discounted: "$57.90"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 10,
      name: "Womens Blue Training",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg",
      price: {
         original: "$69.90",
         discounted: "$60.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 11,
      name: "Mens Earth-Tone Sneaker",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg",
      price: {
         original: "$74.90",
         discounted: null
      },
      sale: null,
      type: "Shoes",
      gender: "Men",
      category: "bestseller",
   },
   {
      id: 12,
      name: "Mens Moonstone Sneaker",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg",
      price: {
         original: "$74.90",
         discounted: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 13,
      name: "Mens Classic Mint",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg",
      price: {
         original: "$79.90",
         discounted: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 14,
      name: "Mens Red Running",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg",
      price: {
         original: "$79.90",
         discounted: "$69.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
      category: "bestseller",
   },
   {
      id: 15,
      name: "Mens Navy Running",
      image: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
      price: {
         original: "$104.90",
         discounted: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",   
   },
   {
      id: 16,
      name: "Classic Hoodie",
      image: "https://nobero.com/cdn/shop/files/black_94ef5b95-b2a3-447f-8234-6c85a43c046d.jpg?v=1698254415",
      price: {
         original: "$59.90",
         discounted: "$49.90"
      },
      sale: "sale!",
      gender: "Women",
      category: "new",
      type: "Hoodie"
   },
   {
      id: 17,
      name: "Oversized Hoodie",
      image: "https://nobero.com/cdn/shop/files/olive-green_14e432c8-e200-47c2-8a98-096b2a9c7721.jpg?v=1696509353",
      price: {
         original: "$74.90",
         discounted: null
      },
      sale: null,
      gender: "Women",
      type: "Hoodie"
   },
   {
      id: 18,
      name: "Classic Zipper Hoodie",
      image: "https://nobero.com/cdn/shop/files/maroon_11c27f9e-c629-4073-9482-0521c571e385.jpg?v=1702876649",
      price: {
         original: "$89.90",
         discounted: "$79.90"
      },
      sale: "sale!",
      gender: "Men",
      category: "new",
      type: "Hoodie"
   },
   
   {
      id: 20,
      name: "Be Fearlessly Authentic",
      image: "https://nobero.com/cdn/shop/files/be-fearless_ed3fc478-d354-42ed-9353-2f252f145b2a.jpg?v=1698748188",
      price: {
         original: "$79.90",
         discounted: null
      },
      sale: null,
      gender: "Women",
      type: "Hoodie",
      category: "new",
      category: "bestseller"
   },
   
   {
      id: 22,
      name: "Raglan Quilted Sweatshirts",
      image: "https://nobero.com/cdn/shop/files/QuiltSweatshirts-0007.jpg?v=1702374727",
      price: {
         original: "$69.90",
         discounted: "$59.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 23,
      name: "Oversized Zip-up Sweatshirts",
      image: "https://nobero.com/cdn/shop/files/ZipUpSweatshirts3_11573f5c-f87f-491e-aa06-dc4ec8797cf0.jpg?v=1702378778",
      price: {
         original: "$84.90",
         discounted: "$74.90"
      },
      sale: "sale!",
      gender: "Women",
      type: "Hoodie"
   },
   {
      id: 24,
      name: "Be Kind",
      image: "https://nobero.com/cdn/shop/files/be-kind_7a8cde61-eb7d-4a02-925b-4b4e9919ded9.jpg?v=1699262984",
      price: {
         original: "$59.90",
         discounted: "$49.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 25,
      name: "Be Free - Limited Edition",
      image: "https://nobero.com/cdn/shop/files/WhatsAppImage2023-10-05at6.37.33PM_3_1da7f17b-317c-40de-8a96-6ff37ea3be35.jpg?v=1702797956",
      price: {
         original: "$74.90",
         discounted: null
      },
      sale: null,
      gender: "Women",
      category: "new",
      type: "Hoodie"
   },
   {
      id: 26,
      name: "Wanderer - Travel Hoodie",
      image: "https://nobero.com/cdn/shop/files/VERDIGRIS-BLUE_531e9125-1574-4f9b-bbfc-810752cc7cfb.jpg?v=1701252278",
      price: {
         original: "$89.90",
         discounted: "$79.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 27,
      name: "No One Is You (Oversized)",
      image: "https://nobero.com/cdn/shop/files/no-one-is-you_c42c9680-21d4-4829-8046-b965e77cafa1.jpg?v=1702145873",
      price: {
         original: "$64.90",
         discounted: "$54.90"
      },
      sale: "sale!",
      gender: "Women",
      type: "Hoodie"
   },
   {
      id: 28,
      name: "Denim Blue Sweatpant",
      image: "https://www.beyours.in/cdn/shop/products/denim-blue-sweatpant-3_1200x.jpg?v=1681806386",
      url: "https://www.beyours.in/products/denim-blue-sweatpants",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$39.99",
         discounted: "$29.99"
      },
      sale: "sale!"
   },
   {
      id: 29,
      name: "Granite Grey Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Granite-Grey-Sweatpant_203d0781-4455-45a1-9929-ac89840f1f8c_1200x.jpg?v=1683016129",
      url: "https://www.beyours.in/products/granite-grey-sweatpants",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$44.99",
         discounted: null
      },
      category: "new",
      sale: null
   },
   {
      id: 30,
      name: "Black Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/black-3_3226186e-8de2-4ab4-9336-e81619602681_1200x.jpg?v=1683179875",
      url: "https://www.beyours.in/products/the-black",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$49.99",
         discounted: "$39.99"
      },
      sale: "sale!"
   },
   {
      id: 31,
      name: "Burgundy Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Burgundy-Sweatpant-3_1200x.jpg?v=1683177118",
      url: "https://www.beyours.in/products/the-burgundy",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$54.99",
         discounted: "$44.99"
      },
      sale: "sale!"
   },
   {
      id: 32,
      name: "Pea Green Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/pea-green_1200x.jpg?v=1683090481",
      url: "https://www.beyours.in/products/the-pea-green",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$59.99",
         discounted: null
      },
      category: "new",
      sale: null
   },
   {
      id: 33,
      name: "Dusky Green Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Dusky-Green-Sweatpant_1200x.jpg?v=1683022665",
      url: "https://www.beyours.in/products/dusky-green-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$64.99",
         discounted: "$54.99"
      },
      category: "new",
      sale: "sale!"
   },
   {
      id: 34,
      name: "Deep Teal Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Deep-Teal-Sweatpant_1200x.jpg?v=1683026269",
      url: "https://www.beyours.in/products/the-deep-teal",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$69.99",
         discounted: "$59.99"
      },
      sale: "sale!"
   },
   {
      id: 35,
      name: "Smoke White Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Smoke-White-Sweatpant-2_12c3edc5-1720-4d02-b560-01d3b923e249_1200x.jpg?v=1683025636",
      url: "https://www.beyours.in/products/smoke-white-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$74.99",
         discounted: null
      },
      sale: null
   },
   {
      id: 36,
      name: "Dusty Brown Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Dusty-Brown-Sweatpant6_37dc371e-b989-468f-bf84-e0bf4d98e978_1200x.jpg?v=1683017779",
      url: "https://www.beyours.in/products/dusty-brown-swseatpant",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$79.99",
         discounted: "$69.99"
      },
      sale: "sale!"
   },
   {
      id: 37,
      name: "Glacial Blue Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Glacial-Blue-Sweatpant-1_5fe1121e-4491-4474-bc69-806cea7a5832_1200x.jpg?v=1683019291",
      url: "https://www.beyours.in/products/glacial-blue-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$84.99",
         discounted: "$74.99"
      },
      sale: "sale!"
   },
   {
      id: 38,
      name: "Oceanic Teal Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Oceanic-Teal-Sweatpant_1200x.jpg?v=1683016763",
      url: "https://www.beyours.in/products/oceanic-teal-sweatpant",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$89.99",
         discounted: null
      },
      sale: null
   },
   {
      id: 39,
      name: "Tamarind Red Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Tamarind-Red-Sweatpant_1200x.jpg?v=1683020082",
      url: "https://www.beyours.in/products/tamarind-red-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$94.99",
         discounted: "$84.99"
      },
      sale: "sale!"
   },
   {
      id: 40,
      name: "Burnt Red Sweatpant",
      image: "https://www.beyours.in/cdn/shop/products/burnt-red-sweatpant-2_1200x.jpg?v=1681806339",
      url: "https://www.beyours.in/products/burnt-red-sweatpant",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$99.99",
         discounted: "$89.99"
      },
      sale: "sale!"
   },
   {
      id: 41,
      name: "Powder Blue Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Powder-Blue-Sweatpant-1_1200x.jpg?v=1683019664",
      url: "https://www.beyours.in/products/powder-blue-sweatpant",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$104.99",
         discounted: null
      },
      sale: null
   },
   {
      id: 44,
      name: "Titanium Grey Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Titanium-Grey-Sweatpant1_1200x.jpg?v=1683099003",
      url: "https://www.beyours.in/products/titanium-grey-sweatpant",
      type: "Joggers",
      gender: "Men",
      price: {
         original: "$119.99",
         discounted: null
      },
      sale: null
   },
   {
      id: 45,
      name: "Quarry Sweatpant",
      image: "https://www.beyours.in/cdn/shop/files/Quarry-Sweatpant_1200x.jpg?v=1683091462",
      url: "https://www.beyours.in/products/the-quarry",
      type: "Joggers",
      gender: "Women",
      price: {
         original: "$124.99",
         discounted: "$114.99"
      },
      sale: "sale!"
   }
];
