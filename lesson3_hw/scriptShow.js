const sectionForReviews = document.querySelector('.show-review');
showAllReviews();

function showAllReviews() {
    for (let i = 0; i < localStorage.length; i++) {
        let pHtml = `<ul id="${localStorage.key(i)}" data-id="article" class="reviews-headings">${localStorage.key(i)}</ul>`;
        sectionForReviews.insertAdjacentHTML('beforeend', pHtml);
    }
}
const allReviewsTitles = document.querySelectorAll('.reviews-headings');

allReviewsTitles.forEach(review => {
    review.addEventListener('click', (e) => {
        let current = e.target;
        if (current.dataset.id === 'article') {
            let arrayFromLocal = JSON.parse(localStorage.getItem(current.textContent));
            arrayFromLocal.forEach(review => {
                let html = `<li class="article" ><p class="reviews-item">${review}</p><button data-id="deleteButton" class="delete-button">Удалить отзыв</button></li>`;
                current.insertAdjacentHTML('beforeend', html);
            })
        }
        if (current.dataset.id === 'deleteButton') {
            const parent = current.parentNode;
            const key = current.parentNode.parentNode.id;

            parent.remove();

            let returnFromLocal = JSON.parse(localStorage.getItem(key));

            let elToDel;

            if (returnFromLocal.length === 1) {
                localStorage.removeItem(key);
                sectionForReviews.innerHTML = '';
                showAllReviews();
            } else {
                returnFromLocal.forEach(review => {
                    if (review === key) {
                        elToDel = returnFromLocal.indexOf(review);
                    }
                })
                returnFromLocal.splice(elToDel, 1);
                localStorage.setItem(key, JSON.stringify(returnFromLocal));
            }
        }
    })
})

// function showAllReviews() {
//     let page = window.location.href;
//     page = page.substring(page.length - 9);
//     if (page === 'show.html') {

//     }
// }
// showAllReviews();