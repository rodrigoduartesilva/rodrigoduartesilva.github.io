function criptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoCripto = texto.replace(/e|i|a|o|u/gi, function(texto){
        if(texto == descriptografiaTexto[0]){
            return criptografiaTexto[0];
        } else if(texto == descriptografiaTexto[1]){
            return criptografiaTexto[1];
        } else if(texto == descriptografiaTexto[2]){
            return criptografiaTexto[2];
        } else if(texto == descriptografiaTexto[3]){
            return criptografiaTexto[3];
        } else if(texto == descriptografiaTexto[4]){
            return criptografiaTexto[4];
        }
    });

    return resultadoCripto;
}