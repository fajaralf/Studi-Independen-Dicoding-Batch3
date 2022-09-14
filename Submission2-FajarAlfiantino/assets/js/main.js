const InCompleteBookList = "InCompleteBookList";
const CompleteBookList = "CompleteBookList";
const FavoriteBookList = "FavoriteBookList";
const bookId = "itemId";

function addBook() {
  const incompleteBookshelfList = document.getElementById(InCompleteBookList);
  const completeBookshelfList = document.getElementById(CompleteBookList);
  const favoriteBookshelfList = document.getElementById(FavoriteBookList);

  const inputBookTitle = document.getElementById("inputBookTitle").value;
  const inputBookAuthor = document.getElementById("inputBookAuthor").value;
  const inputBookYear = document.getElementById("inputBookYear").value;
  const inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;
  const inputBookFavorite = document.getElementById("inputBookFavorite").checked;

  const book = createBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete, inputBookFavorite);
  const bookObject = composebookObject(
    inputBookTitle,
    inputBookAuthor,
    inputBookYear,
    inputBookIsComplete,
    inputBookFavorite
  );

  book[bookId] = bookObject.id;
  books.push(bookObject);

  if (inputBookFavorite == true) {
    favoriteBookshelfList.append(book);
  } else {
    favoriteBookshelfList.append(book);
    if (inputBookIsComplete == false) {
      incompleteBookshelfList.append(book);
    } else {
      completeBookshelfList.append(book);
    }
  }
  updateDataToStorage();
}

function createBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete, inputBookFavorite) {
  const bookTitle = document.createElement("h3");
  bookTitle.innerText = inputBookTitle;
  bookTitle.classList.add("bookTittle");

  const bookAuthor = document.createElement("span");
  bookAuthor.innerText = inputBookAuthor;

  const bookYears = document.createElement("p");
  bookYears.classList.add("year");
  bookYears.innerText = inputBookYear;

  const bookIsComplete = createCompleteButton();

  const bookFavorite = createFavoriteButton();

  const bookRemove = createRemoveButton();
  bookRemove.innerText = "Hapus Buku";

  const bookAction = document.createElement("div");
  bookAction.classList.add("action");

  if (inputBookFavorite == true) {
    bookFavorite.innerText = "Hapus Favorite";
    bookIsComplete.style.display = "none";
  } else {
    bookFavorite.innerText = "Tambahkan Favorite";
    if (inputBookIsComplete == true) {
      bookIsComplete.innerText = "Belum selesai";
    } else if (inputBookIsComplete == false) {
      bookIsComplete.innerText = "Sudah selesai";
    }
  }

  bookAction.append(bookIsComplete, bookFavorite, bookRemove);
  const bookItem = document.createElement("article");
  bookItem.classList.add("bookItem");
  bookItem.append(bookTitle, bookAuthor, bookYears, bookAction);

  return bookItem;
}

function createButton(buttonAction, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonAction);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

function createCompleteButton() {
  return createButton("green", function (event) {
    if (book.isFavorite == false) {
      const parent = event.target.parentElement;
      addBookToCompleted(parent.parentElement);
    }
  });
}

function createFavoriteButton() {
  return createButton("yellow", function (event) {
    const parent = event.target.parentElement;
    addBookToFavorite(parent.parentElement);
  });
}

function addBookToFavorite(bookElement) {
  const bookTitle = bookElement.querySelector(".bookItem > h3").innerText;
  const bookAuthor = bookElement.querySelector(".bookItem > span").innerText;
  const bookYear = bookElement.querySelector(".bookItem > p").innerText;
  const bookIsComplete = bookElement.querySelector(".green").innerText;
  const bookIsFavorite = bookElement.querySelector(".yellow").innerText;

  if (bookIsFavorite == "Tambahkan Favorite") {
    const newBook = createBook(bookTitle, bookAuthor, bookYear, bookIsComplete, true);

    const book = findbook(bookElement[bookId]);
    book.isFavorite = true;
    newBook[bookId] = book.id;

    const favoriteBookshelfList = document.getElementById(FavoriteBookList);
    favoriteBookshelfList.append(newBook);
  } else {
    const newBook = createBook(bookTitle, bookAuthor, bookYear, bookIsComplete, false);
    const book = findbook(bookElement[bookId]);
    book.isFavorite = false;

    if (book.isCompleted == false) {
      book.isCompleted = false;
      newBook[bookId] = book.id;

      const incompleteBookshelfList = document.getElementById(InCompleteBookList);
      incompleteBookshelfList.append(newBook);
    } else {
      book.isCompleted = true;
      newBook[bookId] = book.id;

      const completeBookshelfList = document.getElementById(CompleteBookList);
      completeBookshelfList.append(newBook);
    }
  }
  bookElement.remove();
  updateDataToStorage();
}

function addBookToCompleted(bookElement) {
  const bookTitle = bookElement.querySelector(".bookItem > h3").innerText;
  const bookAuthor = bookElement.querySelector(".bookItem > span").innerText;
  const bookYear = bookElement.querySelector(".bookItem > p").innerText;
  const bookIsComplete = bookElement.querySelector(".green").innerText;
  const bookIsFavorite = bookElement.querySelector(".yellow").innerText;

  if (bookIsComplete == "Sudah selesai") {
    const newBook = createBook(bookTitle, bookAuthor, bookYear, true, bookIsFavorite);

    const book = findbook(bookElement[bookId]);
    book.isCompleted = true;
    newBook[bookId] = book.id;

    const completeBookshelfList = document.getElementById(CompleteBookList);
    completeBookshelfList.append(newBook);
  } else {
    const newBook = createBook(bookTitle, bookAuthor, bookYear, false, bookIsFavorite);

    const book = findbook(bookElement[bookId]);
    book.isCompleted = false;
    newBook[bookId] = book.id;

    const incompleteBookshelfList = document.getElementById(InCompleteBookList);
    incompleteBookshelfList.append(newBook);
  }
  bookElement.remove();

  updateDataToStorage();
}

function removeBook(bookElement) {
  const bookPosition = findbookIndex(bookElement[bookId]);
  if (window.confirm("Apakah anda ingin menghapus buku ini dari rak?")) {
    books.splice(bookPosition, 1);
    bookElement.remove();
  }
  updateDataToStorage();
}

function createRemoveButton() {
  return createButton("red", function (event) {
    const parent = event.target.parentElement;
    removeBook(parent.parentElement);
  });
}

function refreshDataFrombooks() {
  const listUncompleted = document.getElementById(InCompleteBookList);
  const listCompleted = document.getElementById(CompleteBookList);
  const listFavorite = document.getElementById(FavoriteBookList);

  for (book of books) {
    const newbook = createBook(book.title, book.author, book.year, book.isCompleted, book.isFavorite);
    newbook[bookId] = book.id;
    if (book.isFavorite == true) {
      listFavorite.append(newbook);
    } else {
      if (book.isCompleted == true) {
        listCompleted.append(newbook);
      } else {
        listUncompleted.append(newbook);
      }
    }
  }
}

function searchBook() {
  const inputSearch = document.getElementById("searchBookTitle").value;
  const titleBook = document.querySelectorAll(".bookTittle");

  for (bookTittle of titleBook) {
    if (inputSearch !== bookTittle.innerText) {
      console.log(inputSearch);
      bookTittle.parentElement.remove();
    }
  }
}
