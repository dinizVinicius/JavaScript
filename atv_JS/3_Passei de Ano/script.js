// function calcular(){
//     let HTML = "";
//     let nome = "<br>name: " + document.getElementById("name").value;
//     let freq =  document.getElementById("freq").value;
//     freq = parseInt (freq);
//     let av1 = document.getElementById("av1").value;
//     let av2 =  document.getElementById("av2").value;
//     let av3 =  document.getElementById("av3").value;
//     let av4 =   document.getElementById("av4").value;
//     av1 = parseInt (av1);
//     av2 = parseInt (av2);
//     av3 = parseInt (av3);
//     av4 = parseInt (av4);
//     document.getElementById("demo").innerHTML = HTML;
//     let notafinal = 0;
    
//     notafinal = (av1 + av2 + av3 + av4)/4

//      if (notafinal>=6 && freq>=75 ){
//         document.getElementById("demo").innerHTML = "APROVADO " + notafinal ;
//      }else if(notafinal<6 && freq>=75){
//         document.getElementById("demo").innerHTML = "reprovado por nota, sinto muito!" + notafinal; 
//     }else if( notafinal>=6 && freq <75) {
//         document.getElementById("demo").innerHTML = "reprovado por falta, sinto muito!" + notafinal;
//     }
        
//}

function passei(){
    var nota1 = document.getElementById("n1").value;
    var nota2 = document.getElementById("n2").value;
    var nota3 = document.getElementById("n3").value;
    var nota4 = document.getElementById("n4").value;
    var peso1 = document.getElementById("p1").value;
    var peso2 = document.getElementById("p2").value;
    var peso3 = document.getElementById("p3").value;
    var peso4 = document.getElementById("p4").value;
    var frequencia = document.getElementById("freq").value;
    var pesos = peso1 + peso2 + peso3 + peso4;

    if (nota1 > 10 || nota1 < 0){
        document.getElementById("demo").innerHTML = "Insira Notas Validas";
    } else if (nota2 > 10 || nota2 < 0){
        document.getElementById("demo").innerHTML = "Insira Notas Validas";
    } else if (nota3 > 10 || nota3 < 0){
        document.getElementById("demo").innerHTML = "Insira Notas Validas";
    } else if (nota4 > 10 || nota4 < 0){
        document.getElementById("demo").innerHTML = "Insira Notas Validas";
    } else if (frequencia > 100 || frequencia < 0){
        document.getElementById("demo").innerHTML = "Insira Frequencia Valida";
    } else if(pesos =! 10){
        document.getElementById("demo").innerHTML = "A soma dos pesos não é 10! <br> Insira um peso valido!";
    } else {
        var primNota = nota1 * peso1;
        var segNota = nota2 * peso2;
        var terNota = nota3 * peso3;
        var quarNota = nota4 * peso4;
        var media = (primNota + segNota + terNota + quarNota)/10;

        if(media >= 6 && frequencia >= 75){
            document.getElementById("demo").innerHTML = "Passou de ano!";
        } else if(media < 6 && frequencia >= 75){
            document.getElementById("demo").innerHTML = "Reprovou por Nota!";
        } else if(frequencia < 75){
            document.getElementById("demo").innerHTML = "Reprovou por Frequencia!";
        } else if(media > 10 && frequencia >= 75){
            document.getElementById("demo").innerHTML = "Conselho";
        } else {
            document.getElementById("demo").innerHTML = "Insira as notas";
        }
    }
}
