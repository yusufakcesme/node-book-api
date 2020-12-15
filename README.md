# nodejs-book-api


# Books

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/books | `GET` | Empty | List all books. |
| /api/books | `POST` | {'title':'foo', 'author':'bar', 'score':'10', category:1990, year:1990, createdAt: "lorem", price: "30" } | Create a new book. |
| /api/books/:book_id | `GET` | Empty | Get a book. |
| /api/books/:book_id | `PUT` | {'title':'foo', 'author':'bar', 'score':'10', category:1990, year:1990, createdAt: "lorem", price: "30" } | Update a book with new info. |
| /api/books/:book_id | `DELETE` | Empty | Delete a book. |
| /api/books/top-10 | `GET` | Empty | Get the top 10 book. |
| /api/books/price/desc | `GET` | Empty | List book by price DESC. |
| /api/books/price/asc | `GET` | Empty | List book by price ASC. |
| /api/books/between/:start_year/:end_year | `GET` | Empty | Books between two dates. |
