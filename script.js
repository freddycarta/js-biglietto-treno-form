console.log ('js ok')
// FORM
const nameField = document.getElementById ('name')
const kmsField = document.getElementById ('kms')
const ageField = document.getElementById ('age')
const btnconfirm = document.getElementById ('btnconfirm')
const btncancel = document.getElementById ('btncancel')
const btnbuy = document.getElementById ('btnbuy')

// TICKET
const passengerElement = document.getElementById ('passenger')
const rateElement = document.getElementById ('rate')
const carElement = document.getElementById ('car')
const pnrElement = document.getElementById ('pnr')
const priceElement = document.getElementById ('price')
const ticketSection = document.getElementById ('ticketsection')

btnconfirm .addEventListener('click', function(){
    const nameValue = nameField.value;
    const kmsValue = kmsField.value;
    const ageValue = ageField.value;
    console.log(nameValue, kmsValue, ageValue);

    let rateName = 'Tariffa ordinaria';
    let price = 0.21 * kmsValue;
    

    if (ageValue === 'min'){
        price *= 0.8;
        rateName= 'Tariffa minorenni';
    } else if (ageValue === 'over'){
        price *= 0.6;
        rateName= 'Tariffa over 65';
    }

    console.log(price, rateName);

    passengerElement.innerText = 'jjjj';
    rateElement.innerText = rateName;
    carElement.innerText = '7';
    pnrElement.innerText = '9494';
    priceElement.innerText = '€' + ' '+ price;
})



