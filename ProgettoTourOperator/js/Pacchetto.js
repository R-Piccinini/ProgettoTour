const sfondo=document.getElementById('imgpacchetto');
const nome=document.getElementById('namepack');
const descrizione=document.getElementById('descrizionepack');
const nome2=document.getElementById('name2pack');
const prezzo=document.getElementById('prezzopack');
const sistemazione=document.getElementById('sistemazionepack');
const immagine=document.getElementById('imgpacchetto')


document.addEventListener('DOMContentLoaded', function loadPack() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `http://localhost:8080/pacchetto/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(pack => {
        console.log(pack)
        nome.innerHTML=pack.name;
        descrizione.innerHTML=pack.descrizione;
        nome2.innerHTML=pack.name +" in "+pack.durata+ " giorni";
        prezzo.innerHTML=pack.price +" €";
        sistemazione.innerHTML=pack.sistemazione;
        immagine.style.backgroundImage =`url(assets/PacchettiViaggio/${pack.immagine})`
        immagine.style.backgroundSize=cover;

    })
    .catch(error => console.error('Error:', error));
 }, false);
