function insert(num){
    var numero = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = numero + num;
}

function clean(){
    document.getElementById('texto').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('texto').innerHTML;
    if(resultado){
        document.getElementById('texto').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('texto').innerHTML = "Nada...";
    }
}