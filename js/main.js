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
for(let i = 0; i < 16; i++){
    switch (buttons[i].innerHTML){
        case "=":
            buttons[i].addEventListener('click', equalPressed)
            break
        case "+":
            buttons[i].addEventListener('click', function (){
                if (num2 === "0"){
                    operator = "addizione";
                    calculatorDisplay.innerText = num2;
                }
            })
            break
        case "-":
            buttons[i].addEventListener('click', function (){
                if (num2 === "0"){
                    operator = "sottrazione"
                    calculatorDisplay.innerText = num2;
                }
            })
            break
        case "×":
            buttons[i].addEventListener('click', function (){
                if (num2 === "0"){
                    operator = "moltiplicazione"
                    calculatorDisplay.innerText = num2;
                }
            })
            break
        case "÷":
            buttons[i].addEventListener('click', function (){
                if (num2 === "0"){
                    operator = "divisione"
                    calculatorDisplay.innerText = num2;
                }
            })
            break
        case "C":
            buttons[i].addEventListener('click', clearPressed)
            break
        default:
            // quando viene premuto un numero la funzione number pressed viene chiamata con argomento il numero corrispondente
            // sotto forma di stringa
            buttons[i].addEventListener('click', function (){
                numberPressed(buttons[i].innerHTML)
            })
    }

}


// CLICK HANDLER FUNCTIONS 
function clearPressed(){
    num1 = "0"
    num2 = "0"
    operator = ""
    operationResult = ""
    calculatorDisplay.innerText = num1
}

function equalPressed(){
    let result
    // controllo che ci sia un operatore 
    if ( operator !== "" ){
        switch (operator){
            case "addizione":
                result = parseInt(num1) + parseInt(num2)
                break
            case "sottrazione":
                result = parseInt(num1) - parseInt(num2)
                break
            case "moltiplicazione":
                result = parseInt(num1) * parseInt(num2)
                break
            case "divisione":
                if (num2 !== "0"){
                    result = parseInt(num1) / parseInt(num2)
                } else {
                    result = "Error"
                }
                break
        }
        operationResult = result;
        calculatorDisplay.innerText = operationResult;
    }
}

function numberPressed(number){
    // il number è una stringa rappresentante un numero ad una cifra
    if (operator === ""){
        // se l'operatore è vuoto aggiorno il numero 1
        if (num1 === "0"){
            num1 = number;
        } else {
            num1 += number
        }
        calculatorDisplay.innerText = num1;
    } else if(operationResult === ""){
        // se il risultato è vuoto ma l'operatore c'è sto scrivendo 
        // il secondo numero
        if (num2 === "0"){
            num2 = number;
        } else {
            num2 += number
        }
        calculatorDisplay.innerText = num2
    } 
}

