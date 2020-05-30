let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let index = 0; index < imagenes.length; index++) {
    imagenes[index].addEventListener('click',function(e){
        modal.classList.toggle('modal--open');
        let src = e.target.src;
        img.setAttribute("src",src);
    });
}

boton.addEventListener('click',function(){
    modal.classList.toggle('modal--open');
})