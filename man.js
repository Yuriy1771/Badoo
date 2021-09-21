let exit = document.querySelector("#exit");

exit.onclick = function() {
    document.location.href = "index.html";
};

let offset = 0; //смещение от левого края
const sliderLine = document.querySelector("#slider-line")
let slid = document.querySelector("#slider");

let like = document.querySelector("#like").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    // slider.style.border = "2px solid #61d480";
});

let dis = document.querySelector("#dislike").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    // slider.style.border = "2px solid #d64747";

});

let prev = document.querySelector("#prev").addEventListener("click", function() {
    let sum = prompt('Что бы вернуться назад заплатите 100 рублей');
    if (sum >= 100) {
        alert("Пожалуйста подождите, ваш платеж обрабатывается ⌛");
        alert("Ваш платеж успешно завершен 👍")
        offset = offset - 300;
        if (offset < 0) {
            offset = 900;
        }
        sliderLine.style.left = -offset + 'px';
    } else {
        alert("Вы не заплатили!");
    }

})