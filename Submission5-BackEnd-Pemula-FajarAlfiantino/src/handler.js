/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const { nanoid } = require('nanoid');
const books = require('./books');

/*
  POST BOOK
*/
const addBookHandler = (request, res) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  // Name is Required
  if (name === undefined) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // PageCount Harus lebih besar dari ReadPage
  if (readPage > pageCount) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = res.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

/*
  GET ALL BOOKS
*/
const getAllBooksHandler = (request, res) => {
  const { name, reading, finished } = request.query;

  let filteredBooks = books;
  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  } else if (reading !== undefined) {
    filteredBooks = filteredBooks.filter((book) => book.reading === !!Number(reading));
  } else if (finished !== undefined) {
    filteredBooks = filteredBooks.filter((book) => book.finished === !!Number(finished));
  }

  const response = res.response({
    status: 'success',
    data: {
      books: filteredBooks.map((bookItem) => ({
        id: bookItem.id,
        name: bookItem.name,
        publisher: bookItem.publisher,
      })),
    },
  });
  response.code(200);

  return response;
};

/*
  GET BOOK By ID
*/
const getBookByIdHandler = (request, res) => {
  const { id } = request.params;

  const book = books.filter((bookItem) => bookItem.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }
  const response = res.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

/*
  EDIT BOOK
*/
const editBookByIdHandler = (request, res) => {
  const { id } = request.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const index = books.findIndex((book) => book.id === id);

  const finished = pageCount === readPage;
  const updatedAt = new Date().toISOString();

  if (index !== -1) {
    // Name is Required
    if (name === undefined) {
      const response = res.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }

    // PageCount Harus lebih besar dari ReadPage
    if (readPage > pageCount) {
      const response = res.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }

    // Updated Book
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };

    const response = res.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  // ID not Found
  const response = res.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

/*
  DELETE BOOK BY ID
*/
const deleteBookByIdHandler = (request, res) => {
  const { id } = request.params;
  const index = books.findIndex((book) => book.id === id);

  // ID not Found
  if (index !== -1) {
    books.splice(index, 1);
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  // ID Found
  const response = res.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
