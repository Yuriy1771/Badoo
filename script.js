let sign = document.querySelector('#but');

sign.onclick = function() {
    document.location.href = "woman.html";
}

const time = 10000;
const step = 8;

function outNum(num, elem) {
    let numb = document.querySelector('#num');
    n = 518789816;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            numb.innerHTML = n;
        },
        t);
}


outNum(100, 'numb');

let man = document.querySelector('#man');
let woman = document.querySelector('#woman');

man.onclick = function() {
    document.location.href = "man.html";
}

woman.onclick = function() {
    document.location.href = "woman.html";
}