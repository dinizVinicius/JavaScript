function dobrar(){
    let n = document.getElementById('quant').value;
    n = parseInt(n);

    let ovos = n * 3;
    let acucar = n * 2;
    let fuba = n * 2;
    let trigo = n * 3;
    let oleo = n * 1/2;
    let leite = n * 1;
    let fermento = n * 1;

document.getElementById('demo').innerHTML = ovos + " ovos inteiros <br>"
                                        + acucar + " xícaras (chá) de açúcar <br>"
                                        + fuba + " xícaras (chá) de fubá <br>"
                                        + trigo + " colheres (sopa) de farinha de trigo <br>"
                                        + oleo + " 1/2 copo (americano) de óleo <br>"
                                        + leite + " copo (americano) de leite <br>"
                                        + fermento + " colher (sopa) de fermento em pó <br>";
}