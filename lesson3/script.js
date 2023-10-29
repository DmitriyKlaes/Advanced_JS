// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.

// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.

// Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
const mockDatabase = [
  { title: 'Новость 1', content: 'Содержимое новости 1...' },
  { title: 'Новость 2', content: 'Содержимое новости 2...' },
  // ... другие статьи
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.1 ? resolve(mockDatabase) : reject(new Error('Ошибка'));
        }, 2000);
    });
}

// При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).
load.addEventListener('click', () => {
    load.disabled = true;
    fetchNews().then((resolve) => {
        resolve.forEach((value) => {
          let newP = `<p>${value.title}: ${value.content}</p>`;
          news.insertAdjacentHTML('beforeend', newP);
        });
      }).catch(() => {
        console.log('error');
      }).finally(() => {
        load.disabled = false;
      });
});

// // Вы разрабатываете прототип веб - приложения для чтения новостей.Статьи "хранятся" во внутреннем массиве(имитируя базу данных).Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.

// // Создайте базовую HTML - структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// const mockDatabase = [
//     { title: "Новость 1", content: "Содержимое новости 1..." },
//     { title: "Новость 2", content: "Содержимое новости 2..." },
//     // ... другие статьи
// ];
// // Реализуйте функцию fetchNews(), возвращающую промис.Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных.Для добавления интереса: с вероятностью 10 % она должна возвращать ошибку вместо данных.
// const fetchNews = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let probability = Math.floor(Math.random() * 10)
//             if (probability) {
//                 resolve(mockDatabase);
//             } else {
//                 reject('Произошла ошибка');
//             }
//         }, 2000);
//     });
// }

// // При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch ().
// // При успешной загрузке отобразите статьи на странице.При ошибке покажите сообщение об ошибке.

// load.addEventListener('click', (e) => {
//     fetchNews()
//         .then(response => {
//             for (const article of response) {
//                 const articleDiv = document.createElement('div');
//                 const articleTitle = document.createElement('h4');
//                 articleTitle.textContent = article.title;
//                 const articleContent = document.createElement('p');
//                 articleContent.textContent = article.content;
//                 articleDiv.appendChild(articleTitle);
//                 articleDiv.appendChild(articleContent);
//                 news.appendChild(articleDiv);
//             }
//         })
//         .catch(error => console.error(error));
// })
// // Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции(будь то успешная загрузка или ошибка).
// const mockDatabase = [
//     { title: "Новость 1", content: "Содержимое новости 1..." },
//     { title: "Новость 2", content: "Содержимое новости 2..." },
//     // ... другие статьи
// ];

// const btn = document.querySelector('.btn');
// const news = document.querySelector('.news-box');




// btn.addEventListener('click', () => {
//     btn.disabled = true;
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.floor(Math.random() * 10) + 1;
//             console.log(random);
//             if (random === 5) {
//                 reject(new Error('Ошибка данных'));
//             } else {
//                 resolve(mockDatabase);
//             }
//         }, 2000);
//     }).then((resolve) => {
//         resolve.forEach(element => {
//             const listItem = document.createElement('li');
//             listItem.textContent = element;
//             news.append(listItem);
//         });
//     }).catch((error) => {
//         console.log("Ошибка:" + error);
//     }).finally(() => {
//         btn.disabled = false;
//     });
// })
/*

Вы разрабатываете онлайн - магазин по заказу индивидуальных мебельных комплектов.Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура.После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки.При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.
Создайте базовую HTML - структуру с различными элементами мебели(например, стол, стул, диван) и возможными параметрами для них(цвет, материал, дизайн).
Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
Убедитесь, что у пользователей есть возможность очистить сохраненные настройки(очистить куки).
*/


saveBtn.addEventListener('click', () => {
    Cookies.set(tableColor.value, chairMaterial.value);
});


loadBtn.addEventListener('click', () => {
    const cookies = document.cookie.split('=');
    console.log(cookies);
    // Cookies.set(tableColor.value, chairMaterial.value);
});














// saveBtn.addEventListener('click', () => {

//     // document.cookie = `color=${tableColor.value}`;
//     // document.cookie = `material=${chairMaterial.value}`;
//     Cookies.set('myname', 'New');
// });

// console.log(document.cookie);

// loadBtn.addEventListener('click', () => {
//     const cookies = document.cookie.split(/;/);
//     console.log(document.cookie.split(/;/));
//     for (let i = 0; i < cookies.length; i++) {

//         if (cookies[i].split('=')[0] === 'color') {
//             tableColor.value = cookies[i].split('=')[1];
//         }
//         if (cookies[i].split('=')[0] === 'material') {
//             chairMaterial.value = cookies[i].split('=')[1];
//         }
//     }
// });
clearBtn.addEventListener('click', () => {
    const allCookie = document.cookie.split(/;/)
    for (let i = 0; i < allCookie.length; i++) {
        let nnn = allCookie[i].split('=');
        // Cookies.set(allCookie[i].split('=')[0], 'New')
        // Cookies.set(nnn[0], 'New')
        // Cookies.remove('color');
        console.log(nnn[0]);
        Cookies.remove(nnn[0], { path: '' });
    }
    Cookies.remove('white', { path: '' });
})
console.log(document.cookie);