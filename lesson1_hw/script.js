// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  albums: [
    { title: 'X', artist: 'Louna', year: '2015' },
    { title: 'Песни Эдуарда Сурового', artist: 'Эдуард Суровый', year: '2022' },
    { title: 'Звезда по именни солнце', artist: 'КИНО', year: '1989' },
  ],
  [Symbol.iterator]() {
    this.current = 0;
    return this;
  },
  next() {
    if (this.current < this.albums.length) {
      return { done: false, value: this.albums[this.current++] };
    } else {
      return { done: true };
    }
  },
};

for (let album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const foodChef = new Map();
foodChef
  .set('Пицца "Маргарита"', 'повар: Виктор')
  .set('Пицца "Пепперони"', 'повар: Виктор')
  .set('Суши "Филадельфия"', 'повар: Ольга')
  .set('Суши "Калифорния"', 'повар: Ольга')
  .set('"Тирамису"', 'повар: Дмитрий')
  .set('"Чизкейк"', 'повар: Дмитрий');

const restaurant = {
  listOfOrders: new Map(),
  cookers: foodChef,
  cooks: [],
};

const restaurantView = {
  addToList() {
    const allChoiceButtons = document.querySelectorAll('.good-choose');
    allChoiceButtons.forEach((element) => {
      element.addEventListener('click', (e) => {
        const li = `<li class="goods-in-chart">${e.target.dataset.id}</li>`;
        clientChoice.insertAdjacentHTML('beforeend', li);
      });
    });
  },
  sendOrder() {
    order.addEventListener('click', function () {
      const client = { name: clientName.value };
      const choice = [];
      document.querySelectorAll('.goods-in-chart').forEach((product) => {
        choice.push(product.textContent);
      });
      restaurantController.makeOrder(client, choice);
      clientName.value = '';
      clientChoice.innerHTML = '';
    });
  },
  showCook(array) {
    const cooks = [];
    array.forEach((product) => {
      cooks.push(foodChef.get(product));
    });
    return cooks;
  },
  showOrders() {
    orderBox.lastElementChild.remove();
    const ul = document.createElement('ul');
    for (let order of restaurant.listOfOrders) {
      const li = document.createElement('li');
      li.textContent = `Клиент: ${order[0].name} заказал(а): ${
        order[1]
      } Исполнители: ${this.showCook(order[1])}`;
      ul.append(li);
    }
    orderBox.append(ul);
  },
};

const restaurantController = {
  restaurant: restaurant,
  makeOrder(client, choice) {
    restaurant.listOfOrders.set(client, choice);
    restaurantView.showOrders();
  },
};

restaurantView.addToList();
restaurantView.sendOrder();
