function carregar() {

    var data = new Date().getFullYear()
    var ano = window.document.getElementById('txtano')
    var res = window.document.getElementById ('mostrador')

   
    if (ano.value.length == 0 || ano.value > data) {
    window.alert ('As informações estão incorretas, tente novamente')
    
    } else {
        

        var sexo = document.querySelectorAll("input[type='radio']")
        var genero = ''
        var idade = data - ano.value
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        
               
    if (sexo[0].checked) {

        var genero = 'Homem'
        if (idade > 0 && idade < 10) {
            imagem.setAttribute = ('src','homem-criança.png')
        } else if  (idade >= 10){
            imagem.setAttribute = ('scr', 'homem-jovem.png')
        } else if (idade >= 30 ) {
            imagem.setAttribute = ('src', 'homem-adulto.png')
        } else if (idade >= 60) {
            imagem.setAttribute = ('src', 'homem-velho.png')
        }


        }  if (sexo[1].checked) {
          var genero = 'Mulher'
      } if (idade > 0 && idade < 10) {
        imagem.setAttribute = ('src','mulher-criança.png')
    } else if  (idade >= 10){
        imagem.setAttribute = ('scr', 'mulher-jovem.png')
    } else if (idade >= 30 ) {
        imagem.setAttribute = ('src', 'mulher-adulta.png')
    } else if (idade >= 60) {
        imagem.setAttribute = ('src', 'mulher-velha.png')
    }

     res.style.textAlign = 'center'
     res.innerHTML = `E ${genero} com ${idade} anos de idade`
     res.appendChild (imagem)
    }
    

}  
    

     
