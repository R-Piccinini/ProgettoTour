
const titolo=document.getElementById('titoloPag');
const nome=document.getElementById('nomePag')
const descrizione=document.getElementById('descrizionedest');
const imgcarosello=document.getElementById('imgcarol1');
const imgcarosello2=document.getElementById('imgcarol2');
const imgcarosello3=document.getElementById('imgcarol3');
const nomecarosello=document.getElementById('nomedest1');
const nomecarosello2=document.getElementById('nomedest2');
const nomecarosello3=document.getElementById('nomedest3');


document.addEventListener('DOMContentLoaded', function loadDest() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `http://localhost:8080/destinazione/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(dest => {
        console.log(dest)
        titolo.innerHTML=dest.name;
        nome.innerHTML=dest.name
        descrizione.innerHTML=dest.descrizione;
        if(dest.id==1){
            imgcarosello.src="assets/Destinazioni/centralpark.png";
            nomecarosello.innerHTML="HELP"
        }

    })
    .catch(error => console.error('Error:', error));
 }, false);
