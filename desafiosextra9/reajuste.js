
function verificar(){

    var texto=document.getElementById("entrada").value;

    for (letra of texto){

        if (!isNaN(texto)){

            alert("Não digite números");
            document.getElementById("entrada").value="";
            return;

        }


        letraspermitidas="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ"

        var ok=false;
        for (letra2 of letraspermitidas ){

            if (letra==letra2){

                ok=true;

            }


            }


            if (!ok){
            alert("Não digite caracteres que não sejam letras ou espaços");
            document.getElementById("entrada").value="";
            return; 

            }

    }

}




function iniciar(){
    let impri = document.getElementById('res')
    impri.innerHTML= ''
    let nome = document.getElementById('nome') 
    let salario = window.prompt('Informe o valor atual que você ganha')
    let satual = Number(salario)
    if(satual <= 0){
        window.alert('O salario deve ser um valor maior que 0')

    } else {

        let porcentagem = window.prompt('Informe a porcentagem de reajuste salarial')
        let por = Number(porcentagem)

    
        if(isNaN(satual) || isNaN(por)){
            window.alert ('O seu salario e a porcentagem devem ser ambos valores numericos')
        } else {
            let aumentobruto = satual*(por/100)
            let sfinal = satual+aumentobruto
            let h2 = document.getElementById('h')
            h2.innerHTML = `Olá ${nome.value} seu novo salario e de ${sfinal.toLocaleString('pt-br',{style:'currency',currency:'brl'})}`
            impri.innerHTML+=`Seu salário era ${satual.toLocaleString('pt-br',{style:'currency',currency:'brl'})}`
        
            if(por > 0) {
                impri.innerHTML+=`<br>Com o reajuste de ${por}% você recebeu um aumento salarial de ${aumentobruto.toLocaleString('pt-br',{style:'currency',currency:'brl'})}</br>`
            } else {
                impri.innerHTML+=`<br>Com o reajuste de ${por}% você recebeu uma diminuição salarial de ${aumentobruto.toLocaleString('pt-br',{style:'currency',currency:'brl'})}</br>`
            }
        impri.innerHTML+=`Ficando com um novo salário de ${sfinal.toLocaleString('pt-br',{style:'currency',currency:'brl'})}`
        }
    }

    


    

   


}

/*function verificar(s, p){

    if(isNaN(s) || isNaN(p)){
        return true

    } else {
        return false
    }

} */