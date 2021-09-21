let exit = document.querySelector("#exit");

exit.onclick = function() {
    document.location.href = "index.html";
};

let offset = 0; //смещение от левого края
const sliderLine = document.querySelector("#slider-line")

let like = document.querySelector("#like").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

let dis = document.querySelector("#dislike").addEventListener("click", function() {
    offset = offset + 300;
    if (offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

let prev = document.querySelector("#prev").addEventListener("click", function() {
    let sum = prompt('Что бы вернуться назад заплатите 100 рублей');
    if (sum >= 100) {
        offset = offset - 300;
        if (offset < 0) {
            offset = 2400;
        }
        sliderLine.style.left = -offset + 'px';
    } else {
        alert("Вы не заплатили!");
    }

})

// let prev = document.querySelector("#prev");
// prev.onclick = function() {
//     let num = 'lkl';
//     let sum = prompt('Что бы вернуться назад заплатите 100 рублей');
//     console.log(sum);
//     if (sum.value === num) {
//         offset = offset - 300;
//         if (offset < 0) {
//             offset = 2100;
//         }
//         sliderLine.style.left = -offset + 'px';
//     } else {
//         alert("Вы не заплатили!");
//     }

// }

// let slides = document.querySelectorAll(".imgF");
// console.log(slides);
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
//     slider[i] = slides[i].srs;
//     slides[i].remove();
// }
// console.log(slider);
// let step = 0;
// let offset = 0;
// // function draw() {
//     //     let img = document.createElement('img');
//     //     img.src = slider[step];
//     //     img.classList.add('imgF');
//     //     img.style.left = offset * 300 + 'px';
//     //     document.querySelector("#slider-line").appendChild(img);
//     // }
//     // draw();