//prendo tutti i bottoni presenti nel document
const buttons = document.getElementsByTagName("button")

// itero tra tutti i bottoni
// ×
// ÷
for(let i = 0; i < 16; i++){
    switch (buttons[i].innerHTML){
        case "=":
            buttons[i].addEventListener('click', equalPressed)
            break
        case "+":
            buttons[i].addEventListener('click', plusPressed)
            break
        case "-":
            buttons[i].addEventListener('click', minusPressed)
            break
        case "×":
            buttons[i].addEventListener('click', moltiplicationPressed)
            break
        case "÷":
            buttons[i].addEventListener('click', divisionPressed)
            break
        case "C":
            buttons[i].addEventListener('click', clearPressed)
            break
        default:
            buttons[i].addEventListener('click', function (){
                numberPressed(parseInt(buttons[i].innerHTML))
            })
    }

}


// FUNCTIONS
function clearPressed(){
    console.log("clear")
}

function equalPressed(){
    console.log("=")
}

function plusPressed(){
    console.log("+")
}

function minusPressed(){
    console.log("-")
}

function divisionPressed(){
    console.log("/")
}

function moltiplicationPressed(){
    console.log("x")
}

function numberPressed(number){
    console.log(number)
}