let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}


/*modal */
function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal1() {
    const modal = document.getElementById('janela-modal1')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal2() {
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal3() {
    const modal = document.getElementById('janela-modal3')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal4() {
    const modal = document.getElementById('janela-modal4')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal5() {
    const modal = document.getElementById('janela-modal5')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal6() {
    const modal = document.getElementById('janela-modal6')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharmodal') {
            modal.classList.remove('abrir')
        }
    })
}









