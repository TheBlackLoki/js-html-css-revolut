// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).
$(document).ready(function(){

// faccio scomparire i dropdown

var nascondi = $(".absolute")

// con un hover sugli span faccio comparire i dropdown e li faccio scomparire al click sul documento
var dropdown = $(".dropdown")

dropdown.on({
  mouseover: function(){
    dropdown.children("ul").hide();
    $(this).children("ul").show();
  }, click:function () {
    $(this).children("ul").hide();

    }
})
$(document).click(function(){
  dropdown.children("ul").hide();
})





})
