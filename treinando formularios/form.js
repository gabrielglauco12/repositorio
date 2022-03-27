var obn = {
    Nome: ''

}

var obm = {
    Email: ''
} 

var obmen = {
    Mensagen: ''
}

var vn = [obn, obm, obmen]



function Enviar(){
 obn.Nome = document.getElementById('name')
 obm = document.getElementById('mail')
 obmen = document.getElementById('msg')


}

function mostrar(){

    document.write(join(vn))
    


       
    

    
   
    
}