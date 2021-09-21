let exit = document.querySelector("#exit");

exit.onclick = function() {
    document.location.href = "index.html";
};

let offset = 0; //смещение от левого края
const sliderLine = document.querySelector("#slider-line")

let like = document.querySelector("#like").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

let dis = document.querySelector("#dislike").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

let prev = document.querySelector("#prev").addEventListener("click", function() {
    let sum = prompt('Что бы вернуться назад заплатите 100 рублей');
    if (sum >= 100) {
        offset = offset - 300;
        if (offset < 0) {
            offset = 900;
        }
        sliderLine.style.left = -offset + 'px';
    } else {
        alert("Вы не заплатили!");
    }

})
