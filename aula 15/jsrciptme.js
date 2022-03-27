

function contar(){

var ini = document.getElementById ('inicio')
var fim = document.getElementById ('fim')
var pa = document.getElementById ('passo')
var ap = document.getElementById ('aparecer')
ap.innerHTML = ''

var n1 = Number.parseInt((ini.value))
var n2 = Number.parseInt((fim.value))
var n3 = Number.parseInt((pa.value))




if (n2 == 0 && n3 == 0) {
    window.alert('E necessario que as caixas sejam preenchidas, tente novamente.')
} else  if (n2 == 0) {
    window.alert ('Você deve informar o valor final.')
} else if (n1 > n2) {
    window.alert ('O primeiro valor não pode ser maior que o segundo.')


}else if (n3 == 0) {
    n3 = 1
    window.alert ('O passo não pode ser 0 considerando passo 1.')
} else if (n1 < 0 || n2 < 0 || n3 < 0) {
    window.alert ('O contador apenas suporta valores positivos ou iguais a zero.')
} else {
    
    while (n1 <= n2) {
        
        ap.innerHTML += `, ${n1}`
        n1 = n1 + n3
        
    
    }
     

    

}
}