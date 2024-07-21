const tableUser = document.getElementById('tableUser');
const tablePack = document.getElementById('tablePack');

function loadUser() {
    const url = "http://localhost:8080/user";
    fetch(url)
        .then(res => res.json())
        .then(utenti => {
            tableUser.innerHTML = "";
            utenti.forEach(utente => {
                console.log(utente)
                const tr = document.createElement('tr')
                tr.innerHTML = `
                 <td>${utente.id}</td>
                    <td>${utente.username}</td>
                    <td>${utente.password}</td>
                    <td>${utente.email}</td>
                    <td>${utente.nome}</td>
                    <td>${utente.cognome}</td>
                    <td>${utente.indirizzo}</td>
                    <td>${utente.dataNascita}</td>
                    <td>${utente.pacchetto}</td>
                    <td> <button class="btn me-md-2 mb-3" type="button"
                            style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .3rem;" onclick='deleteUser(${utente.id})'>Elimina</button></td>
                    <td><button class="btn me-md-2 mb-3" id="btnmodifiche" data-bs-toggle="collapse"
                            href="#tabellamodificauser" type="button"
                            style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .3rem;">Modifica</button></td>
                            `
                tableUser.appendChild(tr)
            })
        })
        .catch(error => console.error('Error:', error));
}


function deleteUser(id) {
    if (confirm('Sei sicuro di volere elimiare?')) {
        const url = `http://localhost:8080/user/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            loadUser();
        });

    }

};

function editUser() {

}


function loadPack(){
    const url = "http://localhost:8080/pacchetto";
    fetch(url)
        .then(res => res.json())
        .then(packs => {
            tablePack.innerHTML = "";
            packs.forEach(pack => {
                console.log(pack)
                const tr = document.createElement('tr')
                tr.innerHTML = `
                 <td>${pack.id}</td>
                    <td>${pack.name}</td>
                    <td>${pack.price} €</td>
                    <td class="text-wrap">${pack.descrizione}</td>
                    <td>${pack.sistemazione}</td>
                    <td>${pack.durata} gg</td>
                    <td>${pack.immagine}</td>
                    <td> <button class="btn me-md-2 mb-3" type="button"
                            style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .3rem;" onclick='deletePack(${pack.id})'>Elimina</button></td>
                    <td><button class="btn me-md-2 mb-3" id="btnmodifiche" data-bs-toggle="collapse"
                            href="#tabellamodificapacchetto" type="button"
                            style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .3rem;">Modifica</button></td>
                            `
                tablePack.appendChild(tr)
            })
        })
        .catch(error => console.error('Error:', error));
}

function deletePack(id) {
    if (confirm('Sei sicuro di volere elimiare?')) {
        const url = `http://localhost:8080/pacchetto/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            loadPack();
        });

    }

};