var pessoas = {
    nome: '',
    idade: '',
    sexo: '',
    sexualidade: '',
    interesses: '',
}
enviar(pessoas)
function enviar() {

    let nom = document.getElementById('nome')
    let select = document.getElementById('seletor')
    let nasc = document.getElementById('data')
    let sexo = document.querySelector('input[name ="sexo"]: checked');
    let option = select.children[select.selectedIndex];
    let sexualidade = option.textContent;
    let interesses = []
       

    for(c = 1, c <= 10, c++) {
        
        if (document.getElementById('interesses')){
            pessoas.interesses = interesses[c].value
        }

    }

   
    
}

pessoas {




}







