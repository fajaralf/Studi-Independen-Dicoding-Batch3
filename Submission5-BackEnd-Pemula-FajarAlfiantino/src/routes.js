const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    // Create Book
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // Read All Books
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // Read Book by ID
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    // Update Book by ID
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    // Delete Book by ID
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
