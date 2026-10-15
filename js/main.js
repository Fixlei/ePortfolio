const tag = document.querySelector('.typewriter-text');
const text = tag.textContent;
tag.textContent = '';

let i = 0;

function typeNext() {
    i++;
    tag.textContent = text.slice(0, i);
    if (i < text.length) {
        setTimeout(typeNext, 120);
    }
}

setTimeout(typeNext, 500);