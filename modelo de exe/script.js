function carregar() {

   var msg = window.document.getElementById ('msg')
   var msg2 = window.document.getElementById ('msg2')
   var img = window.document.getElementById ('foto')
   var data = new Date ()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 5 && hora < 12 ) {
     img.innerHTML = '<img src="foto manha.png">'
     document.body.style.background = ('#ffffe0')
     msg2.innerHTML = ('Bom dia, espero que o princeso tenha acordado antes das dez')  
       } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="foto tarde.png">'
        msg2.innerHTML = ('Boa tarde, E hora de dar um rolê... ou trabalhar :(')
        document.body.style.background = ('orange') 
           } else if (hora >= 18 && hora != 0) {
              img.innerHTML = '<img src="foto noite.png">' 
              document.body.style.background = ('purple')
              msg2.innerHTML = ('Boa noite, Vamos conversar no zap com a cremosa enquanto olhamos a lua')
           } else {
              img.innerHTML = '<img src="foto-madrugada.png">'
              document.body.style.background = ('#00009C')
              msg2.innerHTML = ('E madruga, ja e hora de descansar, VAI DORMIR SEU MERDA')
           }
        }

