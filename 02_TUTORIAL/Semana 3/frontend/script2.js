/* 
=======================
Declaração de variáveis
=======================
*/

const { get } = require("express/lib/response");

var calcResDiv = "calc";

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShow(x0, y0);
    }
}


/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y) {
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);

    /*var valor1
    var valor2
    var resultado */
}

function Clicar(num1, num2) {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
   const soma = num1 + num2 

    var resultado = parseInt(num1) + parseInt(num2);
    
    document.querySelector(".resultado").innerHTML = resultado;

    return num1 + num2;

    console.log() = resultado
};

/* Função que calcula uma operação entre dois números recebidos como parâmetro */



    /* Função que mostra a operação realizada */
    function ShowOp(x, y, op) {
        document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
        //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
    }


    /* Função que mostra o resultado obtido */
    function ShowResult(res) {
        document.getElementById(calcResDiv).innerHTML += res;
    }
