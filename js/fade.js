'use strict'

window.addEventListener('scroll', function(){

  function fade(direccion){
    let imagen = document.querySelectorAll('.fade__'+direccion)

    for(let i=0; i < imagen.length; i++){
      let altura = window.innerHeight/1.3
      let distancia = imagen[i].getBoundingClientRect().top
      imagen[i].classList.add('transform_'+direccion)

      if(distancia <= altura){
        imagen[i].classList.add('img__show')
      } else{
        imagen[i].classList.remove('img__show')
      }
    }
  }
  fade('show')
  fade('up')
  fade('down')
  fade('left')
  fade('right')
})