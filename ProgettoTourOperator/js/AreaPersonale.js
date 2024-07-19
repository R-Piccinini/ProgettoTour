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

// Funzione per ottenere gli elementi dal server
document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('usernameAcc');
    const password = document.getElementById('pswAcc');
    const email = document.getElementById('emailAcc');
    const nome = document.getElementById('nomeAcc');
    const cognome = document.getElementById('cognomeAcc');
    const dataNascita = document.getElementById('dataAcc');

    // Funzione per ottenere gli elementi dal server
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `http://127.0.0.1:8080/user/1`;
    fetch(url)
        .then(res => res.json())
        .then(pack => {
            console.log(pack)

            username.innerHTML = "Username: " + pack.username;
            password.innerHTML = "Password: " + pack.password;
            email.innerHTML = "Email: " + pack.email;
            nome.innerHTML = "Nome: " + pack.nome;
            cognome.innerHTML = "Cognome: " + pack.cognome;
            dataNascita.innerHTML = "Data di nascita: " + pack.dataNascita;
            aggiuntaViaggio(pack.pacchetto_id);
        })
        .catch(error => console.error('Error:', error));
});

function aggiuntaViaggio(id) {
    
    const url = `http://127.0.0.1:8080/pacchetto/${id}`

}
