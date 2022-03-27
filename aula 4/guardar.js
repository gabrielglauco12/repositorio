var r1 = quantn(nu)
r2 = maioremenorn(nu) 
var r3 = sm(nu) 
var r4 = median(r1[3], r1[0]) 

mostr.innerHTML += `A quantidade de numeros e ${r1}`
mostr.innerHTML += `O maior numero e ${r1[1]}`
mostr.innerHTML += `O menor numero e ${r1[2]}`
mostr.innerHTML += `A soma dos numeros e ${r2}`
mostr.innerHTML += `A media dos numeros e ${r1[4]}`
} 
function quantn(v) {
return [v.length]
} function maioremenorn(v) {
let maio = Math.max(...v)
let mino = Math.min(...v)
return [maio, mino]
} function sm(v) {
    let soma = 0
for(let c = 0; c < v.length; c++ ) {
     soma += v[c]  
}
return [soma]
} function median(s, q) {

let media = s/q
return  [media]
}
