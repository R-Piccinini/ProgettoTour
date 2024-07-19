// Funzione per l'aggiunta dello sfondo onmouseover
function aggiungiSfondo(element) {
    element.classList.add('sfondoTesto');
}

// Funzione per la rimozione dello sfondo onmouseout
function rimuoviSfondo(element) {
    element.classList.remove('sfondoTesto');
}

// Funzione per lasciare lo sfondo attivo onclick
function attivaSfondo(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('sfondo');
    });
    element.classList.add('sfondo');
}

// // Funzione per rimuovere lo sfondo al click fuori
// document.addEventListener('click', function (event) {
//     if (!event.target.closest('.nav-link')) {
//         const links = document.querySelectorAll('.nav-link');
//         links.forEach(link => {
//             link.classList.remove('sfondo');
//         });
//     }
// })

// Funzione che mostra la sezione
function mostraSezione(sezione) {
    // Nasconde tutte le sezioni
    var sezioni = document.querySelectorAll('.sezione');
    sezioni.forEach(function (item) {
        item.style.display = 'none';
    });

    // Mostra la sezione selezionata
    var sezioneSelezionata = document.querySelector('.' + sezione);
    if (sezioneSelezionata) {
        sezioneSelezionata.style.display = 'block';
    }

    var h2 = document.querySelector('#sezione-contenuti h2')
    if (h2) {
        h2.style.display = 'none';
    }

    var p = document.querySelector('#sezione-contenuti p')
    if (p) {
        p.style.display = 'none';
    } else {
        console.error('Paragrafo non trovato');
    }
}

