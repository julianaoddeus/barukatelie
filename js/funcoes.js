// Início do banner rotativo
let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];


function TrocarFoto(foto){
    document.querySelector(".banner-rotativo").src = "images/slider/" + fotos[foto];
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 3){
        fotoAtual = 0;
    }

    TrocarFoto(fotoAtual);
}, 3000);

// Fim


// Animação da galeria
$('#gallery a').lightBox();
// fim



$(document).ready(function() { 
  $('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});

$(document).ready(function() {             
  $('#loginModal').modal('show');
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  });