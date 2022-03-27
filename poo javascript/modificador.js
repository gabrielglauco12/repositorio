function capitalizarobj(colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        var resultado = colecao.map(function (obj) {
            var letrainicial = obj[atributo].charAt(0).toUpperCase()
            var restotexto = obj[atributo].slice(1)
            obj[atributo] = letrainicial + restotexto
            return obj
        })
        console.log(resultado)
    } 
}


function capitalizar(vetor) {
    var modificado = []
    for(let i = 0; i < vetor.lenght; i++) {
        var letrainicial = vetor[i].charAt(0).toUpperCase()
        var restotexto = vetor[i].slice(1)
        var resultado = (letrainicial + restotexto)
        modificado[i] = resultado 
    }
    return modificado
}


function ordenar(vetor) {
    return vetor.sort(function(a, b) {
        return a.localeCompare(b);
        
    });
  
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
    capitalizarobj : capitalizarobj
};