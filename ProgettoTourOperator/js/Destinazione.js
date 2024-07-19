
const titolo = document.getElementById('titoloPag');
const nome = document.getElementById('nomePag')
const descrizione = document.getElementById('descrizionedest');
const imgcarosello = document.getElementById('imgcarol1');
const imgcarosello2 = document.getElementById('imgcarol2');
const imgcarosello3 = document.getElementById('imgcarol3');
const nomecarosello = document.getElementById('nomedest1');
const nomecarosello2 = document.getElementById('nomedest2');
const nomecarosello3 = document.getElementById('nomedest3');
const cardpack = document.getElementById('cardpack')


document.addEventListener('DOMContentLoaded', function loadDest() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const url = `http://localhost:8080/destinazione/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(dest => {
      console.log(dest)
      titolo.innerHTML = dest.name;
      nome.innerHTML = dest.name
      descrizione.innerHTML = dest.descrizione;
      if (dest.id == 1) {
        //europa
        imgcarosello.src = "assets/Carosello/lussemburgo.jpg";
        imgcarosello2.src = "assets/Carosello/spagna.jpg"
        imgcarosello3.src = "assets/Carosello/turchia.jpg"
        nomecarosello.innerHTML = "Luxemburg"
        nomecarosello2.innerHTML = "Andalusia"
        nomecarosello3.innerHTML = "Istanbul"
      } else if (dest.id == 3) {
        //africa
        imgcarosello.src = "assets/Carosello/sahara.jpg";
        imgcarosello2.src = "assets/Carosello/zanzibar.jpg"
        imgcarosello3.src = "assets/Carosello/madagascar.jpg"
        nomecarosello.innerHTML = "Sahara"
        nomecarosello2.innerHTML = "Zanzibar"
        nomecarosello3.innerHTML = "Madagascar"
      } else if (dest.id == 4) {
        //america
        imgcarosello.src = "assets/Carosello/alaska.jpg";
        imgcarosello2.src = "assets/Carosello/california.jpg"
        imgcarosello3.src = "assets/Carosello/miami.jpg"
        nomecarosello.innerHTML = "Alaska"
        nomecarosello2.innerHTML = "California"
        nomecarosello3.innerHTML = "Miami"
      } else if (dest.id == 5) {
        //oceania
        imgcarosello.src = "assets/Carosello/sydney.jpg";
        imgcarosello2.src = "assets/Carosello/california.jpg"
        imgcarosello3.src = "assets/Carosello/polinesiafrancese.jpg"
        nomecarosello.innerHTML = "Sidney"
        nomecarosello2.innerHTML = "California"
        nomecarosello3.innerHTML = "Polinesia"
      } else if (dest.id == 6) {
        //asia
        imgcarosello.src = "assets/Carosello/maldive.jpg";
        imgcarosello2.src = "assets/Carosello/nepal.jpg"
        imgcarosello3.src = "assets/Carosello/mongolia.jpg"
        nomecarosello.innerHTML = "Maldive"
        nomecarosello2.innerHTML = "Nepal"
        nomecarosello3.innerHTML = "Mongolia"
      }
    })
    .catch(error => console.error('Error:', error));
}, false);


document.addEventListener('DOMContentLoaded', function loadPacks() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const url = `http://localhost:8080/pacchetto/destinazione/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(packs => {
      packs.forEach(pack => {
        console.log(pack)
        const col = document.createElement('div')
        col.classList.add("col")
        col.innerHTML = `
           <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style="background-image: url(assets/PacchettiViaggio/${pack.immagine});background-position: center;">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-2 display-6 lh-1 fw-bold" >${pack.name}</h3>
                        <!--STELLINE -->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center">
                                        <div class="d-inline-block" id="valutazione">
                                            <span class="fa fa-star text-warning"></span>
                                            <span class="fa fa-star text-warning"></span>
                                            <span class="fa fa-star text-warning"></span>
                                            <span class="fa fa-star text-warning"></span>
                                        </div>
                                        <div class="ml-2 font-weight-bold">4.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <!--fine stelline-->
                        <ul class="d-flex list-unstyled mt-auto">
                            <li class="d-flex align-items-center me-3">
                                <small>${pack.price} €</small>
                            </li>
                            <li class="d-flex align-items-center me-auto"></li>
                            <li class="d-flex align-items-center me-3">
                                <svg class="bi me-2" width="1em" height="1em">
                                    <use xlink:href="#geo-fill"></use>
                                </svg>
                                
                            </li>
                            <li class="d-flex align-items-center">
                                <svg class="bi me-2" width="1em" height="1em">
                                    <use xlink:href="#calendar3"></use>
                                </svg>
                                <small>${pack.durata} Giorni</small>
                            </li>
                        </ul>
                        <a href="Pacchetto.html?id=${pack.id}" class="btn mt-auto">Scopri</a>
                    </div>
                </div>
                      `
        cardpack.appendChild(col)
      })
    })
    .catch(error => console.error('Error:', error));
});
