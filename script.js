console.log ('js ok');

let ticket = (km * 0.21);
console.log(ticket);

if(age > 65) {
    ticket = (ticket - (ticket * 0.40))
} else if (age < 18 ) {
    ticket = (ticket - (ticket * 0.20));
}

const finalTicket = document .getElementById('finalTicket')

document.getElementById('finalTicket').innerHTML = 'Il tuo biglietto costa'+''+ ticket +' '+ '€'

const button = document.getElementById('carica')
button.addEventListener ("click", function() {
    'km' = parseInt( prompt('Quanti km vuoi percorrere?', '100') )
  
})


