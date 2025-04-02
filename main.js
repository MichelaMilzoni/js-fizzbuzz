// Scrivi un programma che stampi i numeri da 1 a 100

// RACCOLTA DATI

// - per i multipli di 3 stampi "Fizz" al posto del numero
const multipleOf3 = `Fizz`
// - per i multipli di 5 stampi "Buzz" al posto del numero
const multipleOf5 = `Buzz`
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
const multipleOf3And5 = `FizzBuzz`

// - output
const outputText = "Sei arrivato a 100!"

// SVOLGIMENTO
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
        console.log(outputText)
    }
}



