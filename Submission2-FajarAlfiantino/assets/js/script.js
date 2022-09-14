const inputBook = document.querySelector(".input input");
const submitButton = document.querySelector(".input_section button");

inputBook.onkeyup = () => {
  let bookData = inputBook.value;
  if (bookData.trim() != 0) {
    submitButton.classList.add("active");
  } else {
    submitButton.classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");

  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  const searchBooks = document.getElementById("searchBook");

  searchBooks.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondatasaved", () => {
  console.log("Data berhasil disimpan.");
});
document.addEventListener("ondataloaded", () => {
  refreshDataFrombooks();
});
