function aggiungiSfondo(element) {
    element.classList.add('sfondoTesto');
}

function rimuoviSfondo(element) {
    element.classList.remove('sfondoTesto');
}

function attivaSfondo(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('sfondo');
    });
    element.classList.add('sfondo');
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-link')) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('sfondo');
        });
    }
})

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
    }
}

