// :rock: MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite (in allegato zip).

// :rock: MILESTONE 1:
// Stampare su console, per ogni membro del team: il nome e il ruolo.

// :rock: MILESTONE 2:
// Stampare in pagina, per ogni membro del team: nome, ruolo e immagine, come semplici stringhe.
// Svolgere questa milestone grazie a una funzione può semplificarvi il lavoro per i bonus. La funzione riceve un oggetto e restituisce una stringa di HTML


// :gift: BONUS 1:
// Trasformare il testo col percorso della foto in una immagine effettiva (in allegato txt).
// :gift: BONUS 2:
// Organizzare i singoli membri in card/schede.


// funzione per stampare in pagina
function stampaInPagina (nome, ruolo, img){
    return  `<div class="card">
                <h2>${nome}</h2>
                <h3>${ruolo}</h3>
                <img class="img-width" src="./img/${img}" alt="" srcset="">
            </div>`
}

// creo array di oggetti
let membri = [
    {nome:`Wayne Barnett`, ruolo:`Founder & CEO`, immagine:`wayne-barnett-founder-ceo.jpg`},
    {nome:`Angela Caroll`, ruolo:`Chief Editor`, immagine:`angela-caroll-chief-editor.jpg`},
    {nome:`Walter Gordon`, ruolo:`Office Manager`, immagine:`walter-gordon-office-manager.jpg`},
    {nome:`Angela Lopez`, ruolo:`Social Media Manager`, immagine:`angela-lopez-social-media-manager.jpg`},
    {nome:`Scott Estrada`, ruolo:`Developer`, immagine:`scott-estrada-developer.jpg`},
    {nome:`Barbara Ramos`, ruolo:`Graphic Designer`, immagine:`barbara-ramos-graphic-designer.jpg`}
];

let container = document.getElementById(`container`) 



// creo ciclo per stampare nome e ruolo in console e stampare card in pagina
for(let i = 0; i < membri.length; i++){
    let membro = membri[i]
    console.log(`Nome` + `: ` +membri[i].nome, `Ruolo` + `: ` +membri[i].ruolo)
    container.innerHTML += stampaInPagina(membro.nome, membro.ruolo, membro.immagine)
}



