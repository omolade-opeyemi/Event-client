export interface Vendor {

    id?: number;
    image?: string;
    name: string;
    b_range: number;
    desc: string;
    rating: string;
    reviews: number;
    services?: any
  
  }

  export const vendorData = [
    {
      "id": 1,
      "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
      "name": "Balo Chops",
      "b_range": 25000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Small Chops and Chicken",
          "price": 36,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Pasta and Chicken",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 2,
      "image": "https://media-cdn.tripadvisor.com/media/daodao/photo-s/0a/ae/0b/86/caption.jpg",
      "name": "Oceans Basket",
      "b_range": 45000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Shrimps and Sushi",
          "price": 48,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "seafood"
        }
      ]
    },
    {
      "id": 3,
      "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
      "name": "Mr Biggs",
      "b_range": 25000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 4,
      "image": "https://cioprimeviews.com/wp-content/uploads/2020/04/breakfast-cover.jpg",
      "name": "Rhodes BBQ",
      "b_range": 22000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 5,
      "image": "https://res.cloudinary.com/hello-world/image/upload/v1559313657/m0mfnnhq9egeslgerg9l.jpg",
      "name": "Dominos",
      "b_range": 20000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 6,
      "image": "https://www.mashed.com/img/gallery/why-an-undercooked-wendys-burger-is-causing-a-commotion-on-reddit/l-intro-1658840932.jpg",
      "name": "WENDY'S",
      "b_range": 15000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 7,
      "image": "https://b.zmtcdn.com/data/pictures/chains/1/72511/bb2923c46e7125d724febbded85b3650.jpg",
      "name": "The Place",
      "b_range": 32000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    },
    {
      "id": 8,
      "image": "https://beautifuleatsandthings.com/wp-content/uploads/2019/08/Sheet-Pan-Honey-Glazed-Pork-Chops-with-Sweet-Potatoes-Apples1-1019x1024.jpg",
      "name": "Sweet Chops",
      "b_range": 25000,
      "desc": "Velit officia mollit in minim. Non voluptate amet exercitation velit ex fugiat enim reprehenderit culpa excepteur qui. Irure",
      "rating": "⭐⭐⭐⭐",
      "reviews": 45,
      "services": [
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "Cheese Burgers",
          "price": 9.99,
          "type": "special dish"
        },
        {
          "image": "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
          "name": "sea food platter",
          "price": 16,
          "type": "special dish"
        }
      ]
    }
  ]