//Como modificar todo o conteúdo de uma classe do HTML

var p2 = document.querySelectorAll('.paragrafo');

// O .length significa o comprimento/quantidade que possui esse array, então é preciso
// colocar a variável com ele
//o p[i] é essencial, pois ali ele vai estar modificando o style da var p2 na posição de [i]
for(var i=0; i<p2.length; i++){
    p2[i].style = "color: red";
}
