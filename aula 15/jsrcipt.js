

function contar(){

var ini = document.getElementById ('inicio')
var fim = document.getElementById ('fim')
var pa = document.getElementById ('passo')
var ap = document.getElementById ('aparecer')
ap.innerHTML = ''



if (ini.value == '' || fim.value == '' || pa.value == '') {

    window.alert('[ERROR] Faltam dados.')


} else {

  var n1 = Number(ini.value)
  var n2 = Number(fim.value)
  var n3 = Number(pa.value)  

} if (n3<= 0) {

  window.alert ('[INVALIDO] o passo deve ser positivo, considerando passo 1')
  n3 = 1

} 

if (n1 < n2) {
for (let c = n1; c <= n2; c += n3) 
    ap.innerHTML += `${c} \u{1F449}`
}  else  {
 for (let c2 = n1; c2 >= n2; c2 -= n3)
   ap.innerHTML += `${c2} \u{1F449}`
}
  ap.innerHTML += `\u{1F942}` 
}




