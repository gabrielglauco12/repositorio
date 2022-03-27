var nu = []

function adicionar() {
    let res = document.getElementById('mos')
    let sele = document.getElementById('sele')
    let ntxt = document.getElementById('numero')
    var n1 = Number(ntxt.value)

    if(isnumero(n1) && islista(n1, nu)) {
        nu.push(n1)
        let op = document.createElement('option')
        op.text = `Valor ${ntxt.value} foi adicionado`
        sele.appendChild(op)
        res.innerHTML = ''
        if (nu.length == 1) {
            var notop = document.getElementById('op')
            sele.removeChild(notop)
        }
    } else {
        window.alert('O numero e invalido ou ja esta na lista')
    }
    ntxt.value = ''
    ntxt.focus()
}
function isnumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
} 
function islista(n, v) {
    if(v.indexOf (n) == -1) {
        return true
    } else {
        return false
    }
    
}
function analisar() {
    if(nu.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
    let res = document.getElementById('mos')    
    let tot = nu.length
    let maior = nu[0]
    let menor = nu[0]
    let soma = 0
    

    for (let c in nu){
        soma += nu[c]
      if (nu[c] > maior)  {
          maior = nu[c]
      } if (nu[c] < menor){
          menor = nu[c]
      }
    } let media = soma/tot

    res.innerHTML = `A quantidade de valores inseridos e ${tot}`
    res.innerHTML += `<p>O maior valor inserido e ${maior}</p>`
    res.innerHTML += `<p>O menor valor inserido e ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores inseridos e ${soma}</p>`
    res.innerHTML += `<p>A media dos valores inseridos e ${media}</p>`

    }
    
    
}