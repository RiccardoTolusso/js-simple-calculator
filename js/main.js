// definisco le mie variabili
let num1 = "0"
let num2 = "0"
let operator = ""
let operationResult = ""

// display della calcolatrice
const calculatorDisplay = document.getElementById("result")

//prendo tutti i bottoni presenti nel document
const buttons = document.getElementsByTagName("button")

// itero tra tutti i bottoni
// e ad ogni bottone assegno il corretto eventListener
// andando a basarmi sul loro innerHTml     
for(let i = 0; i < 16; i++){
    if (buttons[i].innerHTML === "="){
        // se l'inner HTML è =
        buttons[i].addEventListener('click', equalPressed)
    } else if (buttons[i].innerHTML === "C"){
        // se l'innerHTML è C
        buttons[i].addEventListener('click', clearPressed)
    } else if(!isNaN(Number(buttons[i].innerHTML))){
        // se l'innerHTML è un numero
        buttons[i].addEventListener('click', function (){
            numberPressed(buttons[i].innerHTML)
        })
    } else {
        // se l'innerHTML è un operatore
        buttons[i].addEventListener('click', function(){
            operatorPressed(buttons[i].innerHTML)
        })
    }


}

function operatorPressed(parameterOperator){
    switch (parameterOperator){
        case "+":
            if (num2 === "0"){
                operator = "addizione";
                calculatorDisplay.innerText = num2;
            }
            break
        case "-":
            if (num2 === "0"){
                operator = "sottrazione"
                calculatorDisplay.innerText = num2;
            }
            break
        case "×":
            if (num2 === "0"){
                operator = "moltiplicazione"
                calculatorDisplay.innerText = num2;
            }
            break
        case "÷":
            if (num2 === "0"){
                operator = "divisione"
                calculatorDisplay.innerText = num2;
            }
            break
    }
}



// CLICK HANDLER FUNCTIONS 
// gestisco la pressione del pulsante C Clear
function clearPressed(){
    // reimposto le variabili al loro valore originario 
    num1 = "0"
    num2 = "0"
    operator = ""
    operationResult = ""
    // mostro il valore di default di num1 = 0
    calculatorDisplay.innerText = num1
}

// gestisco la pressione dell'uguale =
function equalPressed(){
    // controllo che ci sia un operatore 
    if ( operator !== "" ){
        switch (operator){
            case "addizione":
                operationResult = parseInt(num1) + parseInt(num2)
                break
            case "sottrazione":
                operationResult = parseInt(num1) - parseInt(num2)
                break
            case "moltiplicazione":
                operationResult = parseInt(num1) * parseInt(num2)
                break
            case "divisione":
                // controllo che non si stia dividendo per 0
                if (num2 !== "0"){
                    operationResult = parseInt(num1) / parseInt(num2)
                } else {
                    // se divido per 0 do come risultato errore
                    operationResult = "Error"
                }
                break
        }
        calculatorDisplay.innerText = operationResult;
    }
}

function numberPressed(number){
    // il number è una stringa rappresentante un numero ad una cifra
    if (operator === ""){
        // se l'operatore è vuoto aggiorno il numero 1
        // perchè vuol dire che non ho ancora salvato il numero 1
        if (num1 === "0"){
            num1 = number;
        } else {
            num1 += number
        }
        calculatorDisplay.innerText = num1;
    } else if(operationResult === ""){
        // se il risultato è vuoto ma l'operatore c'è vuol dire che 
        // ho salvato il primo numero ma sto ancora scrivendo il secondo
        if (num2 === "0"){
            num2 = number;
        } else {
            num2 += number
        }
        calculatorDisplay.innerText = num2
    } 
}

