function juros(){
    let c = document.getElementById("cap").value;
    let i = document.getElementById("taxa").value;
    let t = document.getElementById("tempo").value;
    c = parseFloat(c);
    i = parseFloat(i);
    t = parseFloat(t);

    let m = c * Math.pow(1 + i,t);
    let rendimento = m - c;
        
    document.getElementById("juros").innerHTML = "Montante: " + m + "<br>Rendimento: " + rendimento;
}