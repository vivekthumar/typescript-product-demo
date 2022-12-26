## How to run

- Clone this repo.
- rename .env.example to .env and update value in this file.
- execute command `npm i`
- Run application `npm start`
- Production build `npm run build`
- Test case for api endpoints `npm run test`
- Apis
  - Get Products 
    - Url: `/api/products/list`
    - Type: `post`
    - Body: `{
        "limit": 10,
        "offset": 0,
        "sort": ["price", "DESC"], // Optinal
        "search": "title/desc" // Optinal
    }`

  - Create Order 
    - Url: `/api/products/order`
    - Type: `post`
    - Body: `{
        "productId": 10,
        "quantity": 0,
    }`
  
