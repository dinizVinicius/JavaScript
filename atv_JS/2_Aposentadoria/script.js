function verificarAposentadoria() {
    // Obter os valores do usuário
    var sexo = document.getElementById("sexo").value.toUpperCase();
    var tempoContribuicao = Number(document.getElementById("tempoContribuicao").value);
    var idade = Number(document.getElementById("idade").value);

    // Verificar se a pessoa pode se aposentar
    var podeAposentar = false;

    if (sexo === "F" && idade >= 57 && tempoContribuicao >= 30) {
        podeAposentar = true;
    } else if (sexo === "M" && idade >= 62 && tempoContribuicao >= 35) {
        podeAposentar = true;
    }

    // Exibir o resultado na tela
    if (podeAposentar) {
        document.getElementById("resultado").innerHTML = "Você já pode se aposentar.";
    } else {
        document.getElementById("resultado").innerHTML = "Você ainda não pode se aposentar.";
    }
}
