"use strict";

addButton.addEventListener('click', addReview);

function addReview() {
    const reviewTitle = goodTitle.value;
    const reviewText = goodText.value;

    if (localStorage.getItem(reviewTitle) !== null) {

        let returnFromLocal = JSON.parse(localStorage.getItem(reviewTitle));

        returnFromLocal.push(reviewText);

        localStorage.setItem(reviewTitle, JSON.stringify(returnFromLocal));
    }
    else {
        const arr = [];
        arr.push(reviewText);
        localStorage.setItem(reviewTitle, JSON.stringify(arr));
    }
    goodTitle.value = '';
    goodText.value = '';
}