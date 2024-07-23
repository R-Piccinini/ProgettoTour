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


    // Funzione per ottenere gli elementi dal server
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

});

function aggiuntaViaggio(id) {

    const nome = document.getElementById('packName');
    const descrizione = document.getElementById('packDesc');
    const sistemazione = document.getElementById('packSistem');
    const durata = document.getElementById('packDur');
    const prezzo = document.getElementById('packPrezzo');
    const immagine = document.getElementById('packImg');
    const url = `http://localhost:8080/pacchetto/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(pack => {
            console.log(pack)
            nome.innerHTML = pack.name;
            // descrizione.innerHTML = pack.descrizione;
            durata.innerHTML = "Giorni: " + pack.durata;
            prezzo.innerHTML = "Prezzo: " + pack.price + "€";
            sistemazione.innerHTML = "Alloggio: " + pack.sistemazione;
            immagine.src = `assets/PacchettiViaggio/${pack.immagine}`;
        })
        .catch(error => console.error('Error:', error));
}

async function getUserData() {
    const username = document.getElementById('usernameAcc');
    const password = document.getElementById('pswAcc');
    const email = document.getElementById('emailAcc');
    const nome = document.getElementById('nomeAcc');
    const cognome = document.getElementById('cognomeAcc');
    const dataNascita = document.getElementById('dataAcc');
    const token = window.localStorage.getItem('authToken');
    const messageElement = document.getElementById('message');
    console.log("MY TOKEN:", token);

    try {
        const response = await fetch('http://localhost:8080/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `${token}`
            }
        }).then(res => res.json())
            .then(pack => {
                console.log(pack)
                username.innerHTML = "Username: " + pack.username;
                password.innerHTML = "Password: " + pack.password;
                email.innerHTML = "Email: " + pack.email;
                nome.innerHTML = "Nome: " + pack.nome;
                cognome.innerHTML = "Cognome: " + pack.cognome;
                dataNascita.innerHTML = "Data di nascita: " + pack.dataNascita;
                aggiuntaViaggio(4);
            })
            .catch(error => console.error('Error:', error));

    } catch (error) {
        console.error('Error fetching profile:', error);
        messageElement.textContent = 'Error loading profile.';
        messageElement.style.color = 'red';
    }

}

window.onload = getUserData;



// async function getUserData() {
//     const token = localStorage.getItem('authToken');
//     const messageElement = document.getElementById('message');
//     console.log("MY TOKEN:", token);
//     try {
//         const response = await fetch('http://localhost:8080/api/me', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `${token}`
//             }
//         });

//         if (response.status === 200) {
//             const data = await response.json();
//             document.getElementById('userData').textContent = JSON.stringify(data, null, 2);
//         } else {
//             messageElement.textContent = 'Failed to get user data';
//             messageElement.style.color = 'red';
//         }
//     } catch (error) {
//         console.error('Error during fetching user data:', error);
//         messageElement.textContent = 'Error during fetching user data';
//         messageElement.style.color = 'red';
//     }
// }
