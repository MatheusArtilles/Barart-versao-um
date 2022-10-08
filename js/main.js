const btnMobile = document.getElementById('btn-mobile')
var imagem_um = document.getElementById('img-1')
imagem_um.src = 'img/alexa-removebg-preview.png'
var imagem_dois = document.getElementById('img-2')
imagem_dois.src = 'img/iphone-removebg-preview.png'
var imagem_tres = document.getElementById('img-3')
imagem_tres.src = 'img/notebook.jpg'
var imagem_quatro = document.getElementById('img-4')
imagem_quatro.src = 'img/microondas-removebg-preview.png'
var imagem_cinco = document.getElementById('img-5')
imagem_cinco.src = 'img/smart.png'
var imagem_seis = document.getElementById('img-6')
imagem_seis.src = 'img/z-flip.jfif'
btnMobile.addEventListener('click', function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const ativo = nav.classList('active')
    event.currentTarget.setAttribute('aria-expanded', 'true')

})
btnMobile.addEventListener('touchstart', toggleMenu)
function fechaMenu() {
    const nav = document.getElementById('nav')
    nav.classList.remove('active')
}

function acao() {
    let modal = document.getElementById('modal')

    modal.style.display = "block"
    
}

function fecha() {
    document.getElementById('modal').style.display = "none"

}
var modall = document.getElementById('modal')
modall.addEventListener('click', function (e) {
    if (e.target == this) {
        fecha()
    }
})


function apagar() {
    document.getElementById('input').value = ''
    
}

