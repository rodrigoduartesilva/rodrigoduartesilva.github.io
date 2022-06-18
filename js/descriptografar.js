function DescriptocriptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoDescripto = texto.replace(/enter|imes|ai|ober|ufat/gi, function(texto){
        if(texto == criptografiaTexto[0]){
            return descriptografiaTexto[0];
        } else if(texto == criptografiaTexto[1]){
            return descriptografiaTexto[1];
        } else if(texto == criptografiaTexto[2]){
            return descriptografiaTexto[2];
        } else if(texto == criptografiaTexto[3]){
            return descriptografiaTexto[3];
        } else if(texto == criptografiaTexto[4]){
            return descriptografiaTexto[4];
        }
    });

    return resultadoDescripto;
}