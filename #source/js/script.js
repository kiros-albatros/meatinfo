let leaveComment = document.querySelector(".social__response");
let popupBackground = document.querySelector(".popup__background");
let popup = document.querySelector(".popup");
let popupButton = document.querySelector(".popup__button");

leaveComment.addEventListener("click", function () {
    popupBackground.classList.add("show-bg");
    popup.classList.add("show-popup");
    popupBackground.addEventListener("click", function () {
        popupBackground.classList.remove("show-bg");
        popup.classList.remove("show-popup");
    })
})

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        popupBackground.classList.remove("show-bg");
        popup.classList.remove("show-popup");
    }
});

popupButton.addEventListener("click", function () {
    popupBackground.classList.remove("show-bg");
    popup.classList.remove("show-popup");
})