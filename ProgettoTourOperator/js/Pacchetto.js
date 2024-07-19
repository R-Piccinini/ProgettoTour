const sfondo=document.getElementById(imgpacchetto);
const nome=document.getElementById(namepack);
const descrizione=document.getElementById(descrizionepack);
const nome2=document.getElementById(name2pack);
const durata=document.getElementById(duratapack);
const prezzo=document.getElementById(prezzopack);
const sistemazione=document.getElementById(sistemazionepack);

function loadPack(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `http://localhost:8080/pacchetto/1`;
    fetch(url)
      .then(res => res.json())
      .then(pack => {
        console.log(pack)
        nome.innerHTML=pack.name
        descrizione.innerHTML=pack.descrizione
        nome2.innerHTML=pack.name
        durata.innerHTML=pack.durata
        prezzo.innerHTML=pack.price
        sistemazione.innerHTML=pack.sistemazione
    })
    .catch(error => console.error('Error:', error));
}



