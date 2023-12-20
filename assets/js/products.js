const products = [
   {
      id: 1,
      rating: 4.5,
      popularity: 4,
      date: 10,
      image: "/assets/images/products/KALINI.jpg",
      gender: "Women",
      name: "KALINI",
      price: {
         discounted: "$869",
         original: "$434"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 2,
      name: "Oversized Hoodie",
      rating: 2,
      popularity: 3,
      date: 8,
      image: "/assets/images/products/2.jpg",
      price: {
         discounted: "$74.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 3,
      name: "Dusky Green Sweatpant",
      rating: 1,
      popularity: 2,
      date: 1,
      image: "/assets/images/products/3.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$64.99",
         original: "$54.99"
      },
      category: "new",
      sale: "sale!"
   },
   {
      id: 4,
      rating: 4,
      popularity: 6,
      date: 6,
      image: "/assets/images/products/4.jpg",
      gender: "Women",
      name: "SINGNI Women Embroidered",
      price: {
         discounted: "$1264",
         original: "$549"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 5,
      name: "Classic Zipper Hoodie",
      rating: 3,
      popularity: 7,
      date: 2,
      image: "/assets/images/products/5.jpg",
      price: {
         discounted: "$89.90",
         original: "$79.90"
      },
      sale: "sale!",
      gender: "Men",
      category: "new",
      type: "Hoodie"
   },
   {
      id: 6,
      rating: 3,
      popularity: 1,
      date: 1,
      image: "/assets/images/products/6.jpg",
      gender: "Women",
      name: "Khushal K Kurta with Palazzos",
      price: {
         discounted: "$1634",
         original: "$544"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 7,
      rating: 5,
      popularity: 10,
      date: 3,
      image: "/assets/images/products/7.jpg",
      gender: "Women",
      name: "Libas Zari Woven Design",
      price: {
         discounted: "$1709",
         original: "$449"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 8,
      rating: 2,
      popularity: 7,
      date: 10,
      image: "/assets/images/products/8.jpg",
      gender: "Women",
      name: "KALINI Kurta with Trousers & Dupatta",
      price: {
         discounted: "$887",
         original: "$369"
      },
      category: "bestseller",
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 9,
      rating: 1,
      popularity: 6,
      date: 8,
      image: "/assets/images/products/9.jpg",
      gender: "Women",
      name: "Anouk Women Yoke Design",
      price: {
         discounted: "$1375",
         original: "$429"
      },
      category: "bestseller",
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 10,
      rating: 2,
      popularity: 3,
      date: 4,
      image: "/assets/images/products/10.jpg",
      gender: "Women",
      name: "Libas Women Cotton Printed",
      price: {
         discounted: "$1119",
         original: "$279"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 11,
      rating: 5,
      popularity: 6,
      date: 1,
      image: "/assets/images/products/11.jpg",
      gender: "Women",
      name: "KALINI Embroidered Kurta Sets",
      price: {
         discounted: "$887",
         original: "$369"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 12,
      rating: 3,
      popularity: 7,
      date: 9,
      image: "/assets/images/products/12.jpg",
      gender: "Women",
      name: "SkyaSia Floral Printed",
      price: {
         discounted: "$979",
         original: "$349"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 13,
      rating: 2,
      popularity: 1,
      date: 3,
      image: "/assets/images/products/13.jpg",
      gender: "Women",
      name: "Varanga Women Yoke Design",
      price: {
         discounted: "$1549",
         original: "$499"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 14,
      rating: 2,
      popularity: 5,
      date: 4,
      image: "/assets/images/products/14.jpg",
      gender: "Women",
      name: "FASHOR A-Line Kurta Set",
      price: {
         discounted: "$1790",
         original: "$399"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 15,
      rating: 5,
      popularity: 4,
      date: 1,
      image: "/assets/images/products/15.jpg",
      gender: "Women",
      name: "Anouk Women Printed",
      price: {
         discounted: "$1375",
         original: "$429"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 16,
      name: "Tamarind Red Sweatpant",
      rating: 1,
      popularity: 5,
      date: 7,
      image: "/assets/images/products/16.jpg",
      gender: "Men",
      type: "Joggers",
      price: {
         discounted: "$94.99",
         original: "$84.99"
      },
      sale: "sale!"
   },
   {
      id: 17,
      name: "Burnt Red Sweatpant",
      rating: 3,
      popularity: 9,
      date: 5,
      image: "/assets/images/products/17.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$99.99",
         original: "$89.99"
      },
      sale: "sale!"
   },
   {
      id: 18,
      name: "Powder Blue Sweatpant",
      rating: 4,
      popularity: 8,
      date: 3,
      image: "/assets/images/products/18.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$104.99",
         original: null
      },
      sale: null
   },
   {
      id: 19,
      rating: 3,
      popularity: 8,
      date: 6,
      image: "/assets/images/products/19.jpg",
      gender: "Women",
      name: "KALINI Women Embroidered",
      price: {
         discounted: "$836",
         original: "$363"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 20,
      rating: 3,
      popularity: 9,
      date: 8,
      image: "/assets/images/products/20.jpg",
      gender: "Women",
      name: "Indo Era Women Embroidered",
      price: {
         discounted: "$1699",
         original: "$499"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 21,
      rating: 2,
      popularity: 2,
      date: 4,
      image: "/assets/images/products/21.jpg",
      gender: "Women",
      name: "Varanga Women Embroidered",
      price: {
         discounted: "$1379",
         original: "$599"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 22,
      rating: 2,
      popularity: 6,
      date: 1,
      image: "/assets/images/products/22.jpg",
      gender: "Women",
      name: "Libas Cotton Yoke Design",
      price: {
         discounted: "$1049",
         original: "$349"
      },
      sale: "Sale!",
      type: "kurti"
   },
   {
      id: 23,
      name: "Womens Cream Suede",
      rating: 4,
      popularity: 9,
      date: 1,
      image: "/assets/images/products/23.jpg",
      price: {
         discounted: "$59.90",
         original: null
      },
      sale: null,
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 24,
      name: "Less is More",
      rating: 1,
      popularity: 8,
      date: 2,
      image: "/assets/images/products/24.jpg",
      price: {
         discounted: "$54.90",
         original: "$44.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie",
      category: "bestseller"
   },
   {
      id: 25,
      name: "Titanium Grey Sweatpant",
      rating: 5,
      popularity: 6,
      date: 4,
      image: "/assets/images/products/25.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$119.99",
         original: null
      },
      sale: null
   },
   {
      id: 26,
      name: "Quarry Sweatpant",
      rating: 5,
      popularity: 9,
      date: 1,
      image: "/assets/images/products/26.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$124.99",
         original: "$114.99"
      },
      sale: "sale!"
   },
   {
      id: 27,
      name: "Mens Green Running",
      rating: 5,
      popularity: 5,
      date: 6,
      image: "/assets/images/products/27.jpg",
      price: {
         discounted: "$104.90",
         original: "$89.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 28,
      name: "Mens Classic Blue",
      rating: 2,
      popularity: 9,
      date: 8,
      image: "/assets/images/products/28.jpg",
      price: {
         discounted: "$79.90",
         original: "$69.00"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
   },
   
   {
      id: 29,
      name: "Slate Grey Sweatpant",
      rating: 1,
      popularity: 6,
      date: 2,
      image: "/assets/images/products/29.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$109.99",
         original: "$99.99"
      },
      category: "bestseller",
      sale: "sale!"
   },
   {
      id: 30,
      name: "And Life Goes On (Oversized)",
      rating: 1,
      popularity: 4,
      date: 4,
      image: "/assets/images/products/30.jpg",
      price: {
         discounted: "$64.90",
         original: "$54.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie",
      category: "bestseller",
   },
   {
      id: 31,
      name: "French Grey Sweatpant",
      rating: 2,
      popularity: 9,
      date: 9,
      image: "/assets/images/products/31.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$114.99",
         original: "$104.99"
      },
      category: "bestseller",
      sale: "sale!"
   },
   {
      id: 32,
      name: "Mens Navy Running",
      rating: 2,
      popularity: 10,
      date: 2,
      image: "/assets/images/products/32.jpg",
      price: {
         discounted: "$104.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 33,
      name: "Womens Mint Sneaker",
      rating: 1,
      popularity: 8,
      date: 6,
      image: "/assets/images/products/33.jpg",
      price: {
         discounted: "$89.90",
         original: null
      },
      sale: null,
      gender: "Women",
      type: "Shoes",
      category: "new",
   },
   {
      id: 34,
      name: "Womens Peach Training",
      rating: 4,
      popularity: 7,
      date: 4,
      image: "/assets/images/products/34.jpg",
      price: {
         discounted: "$69.90",
         original: "$57.90"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 35,
      name: "Womens Blue Training",
      rating: 1,
      popularity: 10,
      date: 4,
      image: "/assets/images/products/1.jpg",
      price: {
         discounted: "$69.90",
         original: "$60.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 36,
      name: "Mens Earth-Tone Sneaker",
      rating: 2,
      popularity: 5,
      date: 2,
      image: "/assets/images/products/36.jpg",
      price: {
         discounted: "$74.90",
         original: null
      },
      sale: null,
      type: "Shoes",
      gender: "Men",
   },
   {
      id: 37,
      name: "Mens Moonstone Sneaker",
      rating: 1,
      popularity: 6,
      date: 5,
      image: "/assets/images/products/37.jpg",
      price: {
         discounted: "$74.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 38,
      name: "Mens Classic Mint",
      rating: 4,
      popularity: 10,
      date: 10,
      image: "/assets/images/products/38.jpg",
      price: {
         discounted: "$79.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 39,
      name: "Mens Red Running",
      rating: 2,
      popularity: 7,
      date: 10,
      image: "/assets/images/products/39.jpg",
      price: {
         discounted: "$79.90",
         original: "$69.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Shoes",
      category: "bestseller",
   },
   {
      id: 40,
      name: "Mens Navy Running",
      rating: 5,
      popularity: 4,
      date: 2,
      image: "/assets/images/products/40.jpg",
      price: {
         discounted: "$104.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
   },
   {
      id: 41,
      name: "Classic Hoodie",
      rating: 5,
      popularity: 10,
      date: 5,
      image: "/assets/images/products/41.jpg",
      price: {
         discounted: "$59.90",
         original: "$49.90"
      },
      sale: "sale!",
      gender: "Men",
      category: "new",
      type: "Hoodie"
   },
   {
      id: 42,
      name: "Womens Candy City Run",
      rating: 2,
      popularity: 2,
      date: 2,
      image: "/assets/images/products/42.jpg",
      price: {
         discounted: "$54.90",
         original: "$40.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 43,
      name: "Womens Tan Sneaker",
      rating: 5,
      popularity: 8,
      date: 6,
      image: "/assets/images/products/43.jpg",
      price: {
         discounted: "$89.90",
         original: "$80.00"
      },
      sale: "sale!",
      gender: "Women",
      type: "Shoes",
   },
   {
      id: 44,
      name: "Mens Black Running",
      rating: 4,
      popularity: 9,
      date: 4,
      image: "/assets/images/products/44.jpg",
      price: {
         discounted: "$79.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Shoes",
      category: "new",
   },
   {
      id: 45,
      name: "Be Fearlessly Authentic",
      rating: 3,
      popularity: 10,
      date: 6,
      image: "/assets/images/products/45.jpg",
      price: {
         discounted: "$79.90",
         original: null
      },
      sale: null,
      gender: "Men",
      type: "Hoodie",
      category: "new",
      category: "bestseller"
   },

   {
      id: 46,
      name: "Raglan Quilted Sweatshirts",
      rating: 3,
      popularity: 6,
      date: 7,
      image: "/assets/images/products/46.jpg",
      price: {
         discounted: "$69.90",
         original: "$59.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 47,
      name: "Oversized Zip-up Sweatshirts",
      rating: 3,
      popularity: 5,
      date: 5,
      image: "/assets/images/products/47.jpg",
      price: {
         discounted: "$84.90",
         original: "$74.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 48,
      name: "Be Kind",
      rating: 3,
      popularity: 10,
      date: 2,
      image: "/assets/images/products/48.jpg",
      price: {
         discounted: "$59.90",
         original: "$49.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 49,
      name: "Be Free - Limited Edition",
      rating: 4,
      popularity: 8,
      date: 3,
      image: "/assets/images/products/49.jpg",
      price: {
         discounted: "$74.90",
         original: null
      },
      sale: null,
      gender: "Men",
      category: "new",
      type: "Hoodie"
   },
   {
      id: 50,
      name: "Wanderer - Travel Hoodie",
      rating: 4,
      popularity: 7,
      date: 7,
      image: "/assets/images/products/50.jpg",
      price: {
         discounted: "$89.90",
         original: "$79.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 51,
      name: "No One Is You (Oversized)",
      rating: 4,
      popularity: 3,
      date: 9,
      image: "/assets/images/products/51.jpg",
      price: {
         discounted: "$64.90",
         original: "$54.90"
      },
      sale: "sale!",
      gender: "Men",
      type: "Hoodie"
   },
   {
      id: 52,
      name: "Denim Blue Sweatpant",
      rating: 3,
      popularity: 8,
      date: 5,
      image: "/assets/images/products/52.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$39.99",
         original: "$29.99"
      },
      sale: "sale!"
   },
   {
      id: 53,
      name: "Granite Grey Sweatpant",
      rating: 1,
      popularity: 4,
      date: 3,
      image: "/assets/images/products/53.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$44.99",
         original: null
      },
      category: "new",
      sale: null
   },
   {
      id: 54,
      name: "Black Sweatpant",
      rating: 4,
      popularity: 7,
      date: 9,
      image: "/assets/images/products/54.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$49.99",
         original: "$39.99"
      },
      sale: "sale!"
   },
   {
      id: 55,
      name: "Burgundy Sweatpant",
      rating: 3,
      popularity: 8,
      date: 7,
      image: "/assets/images/products/55.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$54.99",
         original: "$44.99"
      },
      sale: "sale!"
   },
   {
      id: 56,
      name: "Pea Green Sweatpant",
      rating: 4,
      popularity: 5,
      date: 5,
      image: "/assets/images/products/56.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$59.99",
         original: null
      },
      category: "new",
      sale: null
   },
   {
      id: 57,
      name: "Deep Teal Sweatpant",
      rating: 3,
      popularity: 8,
      date: 1,
      image: "/assets/images/products/57.jpg",
      type: "Joggers",
      gender: "mMen",
      price: {
         discounted: "$69.99",
         original: "$59.99"
      },
      sale: "sale!"
   },
   {
      id: 58,
      name: "Smoke White Sweatpant",
      rating: 4,
      popularity: 7,
      date: 3,
      image: "/assets/images/products/58.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$74.99",
         original: null
      },
      sale: null
   },
   {
      id: 59,
      name: "Dusty Brown Sweatpant",
      rating: 4,
      popularity: 6,
      date: 1,
      image: "/assets/images/products/59.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$79.99",
         original: "$69.99"
      },
      sale: "sale!"
   },
   {
      id: 60,
      name: "Glacial Blue Sweatpant",
      rating: 4,
      popularity: 8,
      date: 1,
      image: "/assets/images/products/60.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$84.99",
         original: "$74.99"
      },
      sale: "sale!"
   },
   {
      id: 61,
      name: "Oceanic Teal Sweatpant",
      rating: 1,
      popularity: 3,
      date: 1,
      image: "/assets/images/products/61.jpg",
      type: "Joggers",
      gender: "Men",
      price: {
         discounted: "$89.99",
         original: null
      },
      sale: null
   },

];

