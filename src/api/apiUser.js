//http://api.devtoolstech.in/ecommerce/products

  export const apiProduct={
  fetch: async ()=>fetch('http://api.devtoolstech.in/ecommerce/products').then(resolve=>resolve.json())}



 /* export const apiProduct={
  fetch:()=>new Promise(resolve =>{ 
    setTimeout(()=>resolve([
      {
        "id": 1,
        "name": "Handcrafted Cotton Keyboard",
        "image": "http://placeimg.com/640/480/cats",
        "color": "black",
        "price": 614,
        "currency": "USD",
        "releaseDate": "2021-09-23T08:15:36.195Z",
        "categoryId": 2,
        "rating": 4
      },
      {
        "id": 2,
        "name": "Handcrafted Fresh Shirt",
        "image": "http://placeimg.com/640/480/cats",
        "color": "black",
        "price": 404,
        "currency": "USD",
        "releaseDate": "2021-09-22T18:52:52.949Z",
        "categoryId": 5,
        "rating": 2
      },
      {
        "id": 3,
        "name": "Sleek Steel Keyboard",
        "image": "http://placeimg.com/640/480/cats",
        "color": "white",
        "price": 64,
        "currency": "USD",
        "releaseDate": "2021-09-22T15:19:12.134Z",
        "categoryId": 1,
        "rating": 4
      },
      {
        "id": 4,
        "name": "Licensed Frozen Pizza",
        "image": "http://placeimg.com/640/480/cats",
        "color": "cyan",
        "price": 492,
        "currency": "USD",
        "releaseDate": "2021-09-23T04:12:25.601Z",
        "categoryId": 5,
        "rating": 3
      },
      {
        "id": 5,
        "name": "Ergonomic Frozen Mouse",
        "image": "http://placeimg.com/640/480/cats",
        "color": "silver",
        "price": 56,
        "currency": "USD",
        "releaseDate": "2021-09-22T13:30:14.337Z",
        "categoryId": 3,
        "rating": 5
      },
      {
        "id": 6,
        "name": "Practical Rubber Soap",
        "image": "http://placeimg.com/640/480/cats",
        "color": "gold",
        "price": 551,
        "currency": "USD",
        "releaseDate": "2021-09-23T08:48:53.479Z",
        "categoryId": 2,
        "rating": 3
      },
      {
        "id": 7,
        "name": "Refined Soft Chips",
        "image": "http://placeimg.com/640/480/cats",
        "color": "lavender",
        "price": 519,
        "currency": "USD",
        "releaseDate": "2021-09-22T23:35:15.339Z",
        "categoryId": 2,
        "rating": 5
      },
      {
        "id": 8,
        "name": "Incredible Rubber Towels",
        "image": "http://placeimg.com/640/480/cats",
        "color": "gold",
        "price": 627,
        "currency": "USD",
        "releaseDate": "2021-09-23T07:14:10.336Z",
        "categoryId": 3,
        "rating": 3
      },
      {
        "id": 9,
        "name": "Tasty Fresh Bacon",
        "image": "http://placeimg.com/640/480/cats",
        "color": "orchid",
        "price": 830,
        "currency": "USD",
        "releaseDate": "2021-09-23T06:02:26.785Z",
        "categoryId": 5,
        "rating": 1
      },
      {
        "id": 10,
        "name": "Handmade Rubber Bacon",
        "image": "http://placeimg.com/640/480/cats",
        "color": "maroon",
        "price": 862,
        "currency": "USD",
        "releaseDate": "2021-09-22T21:59:37.191Z",
        "categoryId": 3,
        "rating": 5
      },
      {
        "id": 11,
        "name": "Licensed Granite Salad",
        "image": "http://placeimg.com/640/480/cats",
        "color": "lavender",
        "price": 828,
        "currency": "USD",
        "releaseDate": "2021-09-22T21:31:33.210Z",
        "categoryId": 1,
        "rating": 3
      },
      {
        "id": 12,
        "name": "Licensed Frozen Chips",
        "image": "http://placeimg.com/640/480/cats",
        "color": "maroon",
        "price": 354,
        "currency": "USD",
        "releaseDate": "2021-09-23T10:13:54.718Z",
        "categoryId": 2,
        "rating": 3
      },
      {
        "id": 13,
        "name": "Rustic Concrete Towels",
        "image": "http://placeimg.com/640/480/cats",
        "color": "yellow",
        "price": 149,
        "currency": "USD",
        "releaseDate": "2021-09-22T22:19:11.964Z",
        "categoryId": 5,
        "rating": 2
      },
      {
        "id": 14,
        "name": "Awesome Soft Cheese",
        "image": "http://placeimg.com/640/480/cats",
        "color": "mint green",
        "price": 138,
        "currency": "USD",
        "releaseDate": "2021-09-23T10:28:49.258Z",
        "categoryId": 2,
        "rating": 3
      },
      {
        "id": 15,
        "name": "Sleek Concrete Ball",
        "image": "http://placeimg.com/640/480/cats",
        "color": "mint green",
        "price": 761,
        "currency": "USD",
        "releaseDate": "2021-09-23T05:12:28.999Z",
        "categoryId": 2,
        "rating": 3
      },
      {
        "id": 16,
        "name": "Licensed Granite Car",
        "image": "http://placeimg.com/640/480/cats",
        "color": "black",
        "price": 163,
        "currency": "USD",
        "releaseDate": "2021-09-22T20:11:33.107Z",
        "categoryId": 4,
        "rating": 5
      },
      {
        "id": 17,
        "name": "Small Soft Salad",
        "image": "http://placeimg.com/640/480/cats",
        "color": "fuchsia",
        "price": 838,
        "currency": "USD",
        "releaseDate": "2021-09-23T03:19:33.321Z",
        "categoryId": 1,
        "rating": 4
      },
      {
        "id": 18,
        "name": "Awesome Soft Soap",
        "image": "http://placeimg.com/640/480/cats",
        "color": "ivory",
        "price": 690,
        "currency": "USD",
        "releaseDate": "2021-09-23T05:50:06.856Z",
        "categoryId": 4,
        "rating": 2
      },
      {
        "id": 19,
        "name": "Small Granite Towels",
        "image": "http://placeimg.com/640/480/cats",
        "color": "teal",
        "price": 978,
        "currency": "USD",
        "releaseDate": "2021-09-22T18:33:26.350Z",
        "categoryId": 1,
        "rating": 3
      },
      {
        "id": 20,
        "name": "Intelligent Granite Towels",
        "image": "http://placeimg.com/640/480/cats",
        "color": "blue",
        "price": 557,
        "currency": "USD",
        "releaseDate": "2021-09-23T00:26:05.868Z",
        "categoryId": 2,
        "rating": 1
      }
    ]),500)
  })
} */
 
 
//http://api.devtoolstech.in/ecommerce/categories
 const apiCategory= {
  fetch:()=>new Promise(resolve=>setTimeout(()=>resolve([
    {
      "id": 1,
      "name": "Books",
      "image": "http://placeimg.com/640/480/city"
    },
    {
      "id": 2,
      "name": "Home",
      "image": "http://placeimg.com/640/480/city"
    },
    {
      "id": 3,
      "name": "Kids",
      "image": "http://placeimg.com/640/480/city"
    },
    {
      "id": 4,
      "name": "Health",
      "image": "http://placeimg.com/640/480/city"
    },
    {
      "id": 5,
      "name": "Clothing",
      "image": "http://placeimg.com/640/480/city"
    }
  ]),500)) 
    
    
}
 export default apiCategory