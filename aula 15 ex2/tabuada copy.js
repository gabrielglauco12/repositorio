function tabuada() {


    var t1 = document.querySelector('#tabu')
    var t2 = document.querySelector('#tabu2')
    var t3 = document.querySelector('#tabu3')
    var t4 = document.querySelector('#tabu4')
    var t5 = document.querySelector('#tabu5')
    var t6 = document.querySelector('#tabu6')
    var t7 = document.querySelector('#tabu7')
    var t8 = document.querySelector('#tabu8')
    var t9 = document.querySelector('#tabu9')
    var t10 = document.querySelector('#tabu10')


    var ta = document.getElementById('ntxt')
    nt = Number(ta.value)
    
    if (nt == 0 || ta == '') {
        window.alert ('O campo deve ser preenchido com um valor diferente de 0')
    } else {

        for (var c = 1; c <= 10; c += 1) {
            var mul = nt*c
            if (c == 1) {
                t1.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 2) {
                t2.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 3){
                t3.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 4) {
                t4.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 5) {
                t5.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 6) {
                t6.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 7) {
                t7.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 8) {
                t8.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 9) {
                t9.innerHTML += `${nt} X ${c} = ${mul} `
            } else if (c == 10) {
                t10.innerHTML += `${nt} X ${c} = ${mul} `
            
            }
    }
   

    
       

    }
    


}

