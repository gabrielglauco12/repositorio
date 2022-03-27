var nu = []


function adicionar() {
    
     var mostr = document.getElementById('mos')
     var ntxt = document.getElementById('numero')
     var n1 = Number(ntxt.value)
     var retorno = numerocerto (ntxt, n1)
        
        mostr.innerHTML = ''
     if (retorno == true) {
        window.alert('[ERROR] Você deve informar um numero de 1 a 100. ')
     } else if (retorno == false) { 
        var retorno2 = nre (n1, nu)

    }  if (retorno2 == true) {
       window.alert('Numeros repetidos não são permitidos')
    } else if (retorno2 == false) {
        
        nu.push(n1)
        
        var nopt = window.document.createElement('option')
        let c = (nu.length) -1
    nopt.text = `valor ${nu[c]} adicionado`
    document.getElementById('sele').appendChild(nopt)

    if (nu.length == 1) {
        let op = document.getElementById('op')
        document.getElementById('sele').removeChild(op)
    }
    
    }
    ntxt.value = ''
    ntxt.focus()        

}  
     
function numerocerto(t, n) {
   if (t.value.length == 0 || n < 1 || n > 100 ) {
      return  true
} else {
    return false
}

} function nre (n, v) {
   if(v.indexOf(n) == -1) {
        return false
    } else {
        return true
    }
   
        
} function analisar() {
    if(nu.length == 0) {
        window.alert('Você deve inserir no MINIMO um numero')
    } else {
        var mostr = document.getElementById('mos')
        mostr.innerHTML = ''
    var r2 = []
    var r1 = quantn(nu)
    r2 = maioremenorn(nu) 
    var r3 = sm(nu) 
    var r4 = median(r3, r1) 

    mostr.innerHTML = `Você inseriu ${r1} valores `
    mostr.innerHTML += `<p>O maior valor é ${r2[0]}</p>`
    mostr.innerHTML += `<p>O menor valor é ${r2[1]}</p>`
    mostr.innerHTML += `<p>A soma dos valores é ${r3}</p>`
    mostr.innerHTML += `<p>A media aritmética dos valores é ${r4}</p>`
    }
    
} 
function quantn(v) {
    return v.length
} function maioremenorn(v) {
    let maio = Math.max(...v)
    let mino = Math.min(...v)
    return [maio, mino]
} function sm(v) {
        let soma = 0
    for(let c = 0; c < v.length; c++ ) {
         soma += v[c]  
    }
    return soma
} function median(s, q) {

   let media = s/q
   return media.toFixed()
}

/* talvez criar uma função pra analisar se a caixa de texto esta vazia e se o vetor esta vazio
ou encima so analisar se a caixa de texto esta vazia e embaixo so a variavel */ 