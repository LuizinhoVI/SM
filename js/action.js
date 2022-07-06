function texto() {
    var palavras = document.getElementById("edit_produto");
    document.getElementById('name_produto').innerHTML = palavras.value;
    document.getElementById('name_produto_1').innerHTML = palavras.value;
}

function valor() {
    var valores = document.getElementById("valor_produto");



    document.getElementById('nome_produto').innerHTML = valores.value;
    document.getElementById('valor_produto_1').innerHTML = valores.value;
}