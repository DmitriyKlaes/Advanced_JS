// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #booksList = [];

  get allBooks() {
    return this.#booksList;
  }

  addBook(title) {
    if (this.#booksList.includes(title))
      throw new Error('Такая книга уже есть');
    this.#booksList.push(title);
    return this.#booksList;
  }

  removeBook(title) {
    const bookIndex = this.#booksList.indexOf(title);
    if (bookIndex === -1) throw new Error('Такой книги нет');
    this.#booksList.splice(bookIndex, 1);
    return this.#booksList;
  }

  hasBook(title) {
    return this.#booksList.includes(title);
  }

  constructor(bookArray) {
    bookArray.map((book) => {
      if (this.#booksList.includes(book))
        throw new Error(`Книга ${book} уже есть`);
      this.#booksList.push(book);
    });
  }
}

const library = new Library([
  '"Чистый код"',
  '"Джава полная документация"',
  '"Кот в шляпе"',
]);

console.log(library.allBooks);
// console.log(library.addBook('"Чистый код"'));
console.log(library.addBook('"Собрание акционеров"'));
