MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto


devo prima selezionare tutti i bottoni dal DOM

itero sulla lista di bottoni così trovata e ad ogni iterazione 

controllo se l'inner HTML corrisponde a 
= => equal pressed
C => clear pressed
+ => operatorPressed('+')
- => operatorPressed('-')
&#215; => operatorPressed('&#215;')
&#247; => operatorPressed('&#247;')
con uno switch e negli altri casi 
number => numerPressed(number)

così facendo al click dei diversi pulsanti attivo diverse funzioni 

Definisco delle "variabili globali"
    definisco una costante calculatorDisplay che conterrà l'elemento HTML con id = "result"
    
    definisco 4 variabili 
    num1 = ""
    num2 = ""
    operator = ""
    operatioResult = ""

Definisco la funzione numberPressed
    controllo se operator è vuoto 
        allora modifico e stampo a schermo num1
    altrimenti se operationResult è vuoto
        allora modifico e stampo num2
    altrimenti 
        non faccio nulla