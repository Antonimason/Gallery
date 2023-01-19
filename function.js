$(document).ready(function (){
   let picture1 = $('#picture1');
   let picture2 = $('#picture2');
   let show1 = $('#show1');
   let show2 = $('#show2');

   /* TITLE PAGE GOING TO SELECTION PAGE */
   $('#btn-main').click(function(){
      $('#main').removeClass("d-flex");
      $('#main').addClass("d-none");
      $('#primera').removeClass("d-none");
   })
   
   /* MOSTRAR GALERIA 1 */
   show1.click(function(){
      $('#primera').addClass("d-none");
      $("#first-wp").fadeIn(function(){
         $("#first-wp").removeClass("d-none");
      })
   })
   show2.click(function(){
      $('#primera').addClass("d-none");
      $("#second-wp").fadeIn(function(){
         $("#second-wp").removeClass("d-none");
      })
   })

   /* Boton de regreso en galeria*/
   $('.regret').click(function(){
      $("#first-wp").addClass("d-none");
      $("#second-wp").addClass("d-none");
      $("#primera").fadeIn(function(){
         $('#main').addClass("d-none");
         $("#primera").removeClass("d-none");
         $("#primera").addClass("d-block");
      })
   })

/* ELECCIÓN DE FOTO GALERIA 1*/
   $('.photo').click(function(e){
      let put = $('#put');
      let joder = $('#joder');
      joder.removeClass("d-none");
      joder.addClass("d-flex");
      let current = e.currentTarget.src;
      let pickk = ` <img class="imagen" height="500px" src="${current}" alt="${e.currentTarget.alt}"/>`
            
      put.append(pickk);

   })

   $('#close').click(function(){
      $('#joder').removeClass('d-flex');
      $('#joder').addClass("d-none");
      $('#put').empty();
      $('#primera').addClass("d-none");
      console.log("lo borre");
   });

/* ELECCIÓN DE FOTO GALERIA 2 */
   $('.photo2').click(function(e){
      let put2 = $('#put2');
      let joder2 = $('#joder2');
      joder2.removeClass("d-none");
      joder2.addClass("d-flex");
      let current = e.currentTarget.src;
      let pickk = ` <img class="imagen" width="auto" height="500px" src="${current}" alt="${e.currentTarget.alt}"/>`
            
      put2.append(pickk);
   })

   $('#close2').click(function(){
      $('#joder2').removeClass('d-flex');
      $('#joder2').addClass("d-none");
      $('#put2').empty();
      $('#primera').addClass("d-none");
      console.log("lo borre");
   });
   
   
})
