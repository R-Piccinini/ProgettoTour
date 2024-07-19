// Funzione per ottenere gli elementi dal server
document.addEventListener('DOMContentLoaded', () => {
const titolo = document.getElementById('titoloPag');
const descrizione = document.getElementById('descrizionedest');
const imgcarosello = document.getElementById('imgcarol1');
const imgcarosello2 = document.getElementById('imgcarol2');
const imgcarosello3 = document.getElementById('imgcarol3');
const nomecarosello1 = document.getElementById('nomedest1');
const nomecarosello2 = document.getElementById('nomedest2');
const nomecarosello3 = document.getElementById('nomedest3');

const europa = document.getElementById('destinazione1');
const africa = document.getElementById('destinazione2');
const america = document.getElementById('destinazione3');
const asia = document.getElementById('destinazione1');
const oceania = document.getElementById('destinazione2');
const stelline = document.getElementById('valutazione');

const immagine=document.getElementById('imgpacchetto');

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `http://localhost:8080/destinazione/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(pack => {
            console.log(pack)
            europa.innerHTML = "Europa" + pack.europa;






            titolo.innerHTML = pack.name;
            descrizione.innerHTML = "bhoo";
            if (pack.id == 1) {
                imgcarosello.src = `url(assets/Destinazioni/canada-1.png)`;
            }
            if (pacchetto1.innerHTML)


    })
        .catch(error => console.error('Error:', error));
}, false);
