var btnCripto = document.querySelector(".botao-criptografar");
var btnDescripto = document.querySelector(".botao-descriptografar");
var btnCopiar = document.querySelector(".btn-copiar");
var containerSaida = document.querySelector(".container-saida");
var containerSaidaResultado = document.querySelector(".container-saida-resultado");
var letrasAcentuadas = /[áàâãéèêíïóôõöúçñ]+/i;

btnCripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    
    if(letrasAcentuadas.test(textoDigitado)){
        alert("Digitar apenas palavras sem acento!");
    } else if(textoDigitado != ""){
        paragrafo.textContent = criptografarTextoDigitado(textoDigitado.toLowerCase());
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser criptografado!");
    }
});

btnDescripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    
    if(letrasAcentuadas.test(textoDigitado)){
        alert("Digitar apenas palavras sem acento!");
    } else if(textoDigitado != ""){
        paragrafo.textContent = DescriptocriptografarTextoDigitado(textoDigitado.toLowerCase());
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser descriptografado!");
    }
});

btnCopiar.addEventListener("click", function(){
    var campoResultado = document.querySelector(".container-saida-resultado").textContent;
    navigator.clipboard.writeText(campoResultado);
});