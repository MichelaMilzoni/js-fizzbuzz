// Scrivi un programma che stampi i numeri da 1 a 100

// RACCOLTA DATI

// - per i multipli di 3 stampi "Fizz" al posto del numero
const multipleOf3 = `Fizz`
// - per i multipli di 5 stampi "Buzz" al posto del numero
const multipleOf5 = `Buzz`
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
const multipleOf3And5 = `FizzBuzz`

// - output
let outputText;

// SVOLGIMENTO
function primoSvolgimento() {
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(multipleOf3And5);  // verifico che il numero sia multiplo di 3 e di 5, se vero stampo 'FizzBuzz'
    } else if (i % 3 === 0) {
        console.log(multipleOf3); //verifico che il numero sia multiplo di 3, se vero stampo 'Fizz'
    } else if (i % 5 === 0) { 
        console.log(multipleOf5); //verifico che il numero sia multiplo di 5, se vero stampo 'Buzz'
    } else {
        console.log(i); // se non  è multiplo di 3, 5 o entrambi stampo il numero        
    }

    // quando i arriva a 100, stampo outputText
    if (i === 100) {
        outputText ="Sei arrivato a 100!"
        console.log(outputText) 
    }
}

// Separatore
console.log("--------- Fine primo svolgimento ---------");
}



// svolgimento 2

function secondoSvolgimento() {
for (let i = 1; i <= 100; i++) { // inizialmente i = 1, ripeto il for aggiungendo 1 al valore i fino a quando i è <=100 
    let outputText = ""; //assegno a output una stringa vuota

    if (i % 3 === 0) { //se il valore i diviso per 3 dà resto 0  
        outputText += multipleOf3; // aggiungi "Fizz"
    }
    if (i % 5 === 0) { //se il valore i diviso per 5 dà resto 0  
        outputText += multipleOf5; //aggiungi "Buzz"
    }

    console.log(outputText || i); // se la stringa resta vuota, i non è multiplo nè di 3 nè di 5
    // ||="OR logico" valuta due espressioni restitendo il primo valore VERO che incontra, 
    // se nessuna espressione è vera, rstituisce l'ultimo valore
    // * in questo caso, restituisce sia Fizz che Buzz quando il numero è multiplo sia di 3 che di 5
}
outputText ="Sei arrivato a 100!"
console.log(outputText) 

// Separatore
console.log("--------- Fine secondo svolgimento ---------");
}

// svolgimento 3
function terzoSvolgimento() {
    for (let i = 1; i <= 100; i++) {
        const outputText = (i % 3 === 0 && i % 5 === 0) ? multipleOf3And5 :
                        (i % 3 === 0) ? multipleOf3 :
                        (i % 5 === 0) ? multipleOf5 :
                        i;

    console.log(outputText) 
}
outputText ="Sei arrivato a 100!"
console.log(outputText)

// Separatore
console.log("--------- Fine terzo svolgimento ---------");
}


// chiamata delle funzioni 
primoSvolgimento();
secondoSvolgimento();
terzoSvolgimento();