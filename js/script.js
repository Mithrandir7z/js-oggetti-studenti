// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var studente = {
    'nome': 'Mattia',
    'cognome': 'Manfreda',
    'eta': '29' 
};

console.log("Ex 1");

for ( var key in studente ) {
    if ( key == 'nome' ) {
        console.log( "chiave:", key );
        console.log( "valore:", studente[key] );
    } else if ( key == 'cognome' ) {
        console.log( 'chiave', key );
        console.log( "valore:", studente[key] );
    } else if ( key == 'eta' ) {
        console.log( "chiave:", key );
        console.log( "valore:", studente[key] );
    }
}


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

console.log("Ex 2");

var arrayStudenti = [
    {
        'nome': 'Giacomo',
        'cognome': 'Leopardi',
        'eta': 80
    },

    {
        'nome': 'Aldo',
        'cognome': 'Rossi',
        'eta': 32
    },

    {
        'nome': 'Pippo',
        'cognome': 'Verdi',
        'eta': 15
    }
    
];


for ( var i = 0; i < arrayStudenti.length; i++ ) {

    var thisObject = arrayStudenti[i];

    console.log("Nome: ", thisObject.nome);
    console.log("Cognome: ", thisObject.cognome);
}



// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

console.log("Inserire col prompt un oggetto nell'array di oggetti");

var nuovoOggettoNome = prompt("Inserisci il nome: ", "Inserisci");
var nuovoOggettoCognome = prompt("Inserisci il cognome: ", "Inserisci");
var nuovoOggettoEta = prompt("Inserisci l'età: ", "Inserisci");

var nuovoOggetto = {
    'nome': nuovoOggettoNome,
    'cognome': nuovoOggettoCognome,
    'eta': nuovoOggettoEta
};

console.log("oggetto da inserire", nuovoOggetto);

arrayStudenti.push(nuovoOggetto);

console.log("array studenti con nuovo oggetto inserito", arrayStudenti);