var nu = []


function adicionar() {

     var ntxt = document.getElementById('numero')
     var n1 = Number(ntxt.value)
     
     var retorno = nuc (n1, ntxt.value )

    if (retorno == true) {
        window.alert('[ERROR] Você deve informar um numero de 1 a 100. ')

    } else {
        var retorno2 = nrep(n1, nu)
         

    } if (retorno2 == true) {
        window.alert('esse numero ja existe')
    } else {
        nu.push(n1)
        var nopt = window.document.createElement('option')
        let c = (nu.length) -1
    nopt.text = `valor ${nu[c]} adicionado`
    document.getElementById('sele').appendChild(nopt);
}

} function nuc(n, t) {
    if (n.value.length == 0 || t < 1 || t > 100 ) {
       return  true
 } else {
     return false
 }
 
}


 function nrep (n, v ) {
    for(let c = 0; c <= (v.length)-1; c++ ) {
        if (v[c] == n) {
            return true
        } else {
        return false
    }
}

}