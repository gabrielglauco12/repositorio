function tabuada() {

    
    var t1 = document.querySelector('#tabu')
    var ta = document.getElementById('ntxt')
    nt = Number(ta.value)
    t1.innerHTML = ''
    
    if (nt == 0 || ta == '') {
        window.alert ('O campo deve ser preenchido com um valor diferente de 0')
    } else {

        for (var c = 1; c <= 10; c += 1) {
            var mul = nt*c
           item = document.createElement('option')
           item.text = `${nt} X ${c} = ${mul}`
           t1.appendChild(item)
           
            
    }
   

    
       

    }
    


}

