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
number => numerPressed(parseInt(number))

