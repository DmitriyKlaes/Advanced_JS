// /*Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
// Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
// Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
// Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.*/

// я делал :
// class BankAccount {
//   // Приватное свойство для хранения баланса
//   #balance = 0;
//   // Геттер для получения текущего баланса
//   get getBalance() {
//     return this.#balance;
//   }
//   // Метод для внесения денег на счет
//   deposit(amount) {
//     if (amount < 0) throw new Error('Операция невозможна');
//     else this.#balance += amount;
//   }
//   // withdraw(amount) Метод для снятия денег со счета
//   withdraw(amount) {
//     if (this.#balance < amount) throw new Error('Операция невозможна');
//     else this.#balance -= amount;
//   }
//   // constructor(initialBalance) Конструктор для инициализации начального баланса
//   constructor(initialBalance) {
//     if (initialBalance < 0) throw new Error('Операция невозможна');
//     this.#balance = initialBalance;
//   }
// }

// // Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.getBalance); // Выводит: 500

// account.deposit(200);
// console.log(account.getBalance); // Выводит: 700

// account.withdraw(100);
// console.log(account.getBalance); // Выводит: 600

// одногруппники делали:
// class BankAccount {
//     // Приватное свойство для хранения баланса
//     _name = '';
//     #balance = 0;
//     // Геттер для получения текущего баланса
//     get balance() {
//         return this.#balance;
//     }
//     // Метод для внесения денег на счет
//     deposit(amount) {
//         if (amount < 0) throw new Error('Невозможно зачислить то, чего нет!');
//         this.#balance += amount;
//         return this.#balance;
//     }
//     // withdraw(amount) Метод для снятия денег со счета
//     withdraw(amount) {
//         if (amount > this.#balance) throw new Error('Вы не такой богатый!');
//         if (amount < 0) throw new Error('Сумма отрицательная!');
//         this.#balance -= amount;
//         return this.#balance;
//     }
//     // constructor(initialBalance) Конструктор для инициализации начального баланса
//     constructor(initialBalance) {
//         if (initialBalance < 0) throw new Error('В вашем положении счет лучше не открывать!');
//         this.#balance = initialBalance;
//     }
// }

// // Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.balance); // Выводит: 500

// account.deposit(100);
// console.log(account.balance); // Выводит: 700

// account.withdraw(100);
// console.log(account.balance); // Выводит: 600


// /*
// У вас есть базовый список пользователей.Некоторые из них имеют информацию о своем премиум - аккаунте, а некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум - аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией(например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые наследуются от User.Класс PremiumUser должен иметь свойство premiumAccount(допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум - аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.
// */

// я делал:
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class PremiumUser extends User {
  premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}

// создать RegularUser
class RegularUser extends User {  
}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    return console.log("Это премиум пользователь");;
  } else {
    console.log("Это обычный пользователь");
  }
// Премиум аккаунт действителен до такой-то даты или информация отсутствует

// пользователь без премиум аккаунта
// Тип пользователя не определен"
}

// Проверка

// коллеги делали:
// // class User {
// //     _name;
// //     _surname;
// //     constructor(name, surname) {
// //         this._name = name;
// //         this._surname = surname;
// //     }
// // }

// // class PremiumUser extends User {
// //     premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
// // }

// // // создать RegularUser
// // class RegularUser extends User {
// // }

// // function getAccountInfo(user) {
// //     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
// //     if (user instanceof User) {
// //         const prem = user?.premiumAccount;
// //         if (prem) {
// //             console.log("Премиум аккаунт действителен до:" + prem);
// //         } else {
// //             console.log("пользователь без премиум аккаунта");
// //         }
// //     } else {
// //         console.log("Тип пользователя не определен");
// //     }

// //     // пользователь без премиум аккаунта

// //     // Тип пользователя не определен"
// // }

// // // Проверка
// // const user1 = new PremiumUser();
// // const user2 = new RegularUser();
// // const user3 = new Object();
// // getAccountInfo(user1);
// // getAccountInfo(user2);
// // getAccountInfo(user3);

// class User {
//     name;
//     surname;
//     constructor(userName, userSurname) {
//         this.name = userName;
//         this.surname = userSurname;
//     }

// }

// class PremiumUser extends User {
//     premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год впере
// }

// // создать RegularUser
// class RegularUser extends User {

// }
// function getAccountInfo(user) {
//     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//     console.log(user instanceof PremiumUser ?? user instanceof RegularUser ?? )
//     if (user instanceof PremiumUser) {
//         console.log(`Премиум аккаунт действителен до ${premiumAccount}`);
//     }
//     if (user instanceof RegularUser) {
//         console.log(`Информация отсутствует`);
//     }
//     else {
//         console.log(`Тип пользователя не определен`);
//     }
// }

// const premiumUser = new PremiumUser();
// const regularUser = new RegularUser();
// const otherUser = new Object();
// getAccountInfo(premiumUser);
// getAccountInfo(regularUser);
// getAccountInfo(otherUser);
/*
Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.

Создайте HTML - структуру: текстовое поле для ввода числа и кнопку "Проверить".
Добавьте место(например, div) для вывода сообщения пользователю.
Напишите функцию, которая будет вызвана при нажатии на кнопку.Эта функция должна использовать try и catch для проверки вводимого значения.*/

checkInput.addEventListener('click', () => {
  try {
    const userInp = userInput.value;
    if (isNaN(userInp) || userInp.trim() === '') {
      hintForUser.textContent = 'Вы ошиблись!';
      throw new Error('Введено не число');
    } else {
      hintForUser.textContent = 'Вы молодец!';
    }
  } catch (error) {
    console.log(error);
  }
});
