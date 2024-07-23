const tableUser = document.getElementById('tableUser');
const tablePack = document.getElementById('tablePack');
const editUsernameUser = document.getElementById('editUsernameUser')
const editPasswordUser = document.getElementById('editPasswordUser')
const editEmailUser = document.getElementById('editEmailUser')
const editNomeUser = document.getElementById('editNomeUser')
const editCognomeUser = document.getElementById('editCognomeUser')
const editIndirizzoUser = document.getElementById('editIndirizzoUser')
const editDataUser = document.getElementById('editDataUser')
const editPacchettoUser = document.getElementById('editPacchettoUser')
const idUser = document.getElementById('idUser')
const idPack=document.getElementById('idPack')
const editNamePack=document.getElementById('editNamePack')
const editPrezzoPack=document.getElementById('editPrezzoPack')
const editDescrizionePack=document.getElementById('editDescrizionePack')
const editSistemazionePack=document.getElementById('editSistemazionePack')
const editDurataPack=document.getElementById('editDurataPack')
const editImgPack=document.getElementById('editImgPack')



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
                            href="#tabellamodificauser" type="button" onclick='loadSingleUser(${utente.id})'
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

function loadSingleUser(id) {
    const url = `http://localhost:8080/user/${id}`
    fetch(url)
        .then(res => res.json())
        .then(utente => {
            idUser.value = utente.id
            editUsernameUser.value = utente.username
            editPasswordUser.value = utente.password
            editEmailUser.value = utente.email
            editNomeUser.value = utente.nome
            editCognomeUser.value = utente.cognome
            editIndirizzoUser.value = utente.indirizzo
            editDataUser.value = utente.dataNascita

        })
}

function clearUser() {
    idUser.value = ''
    editUsernameUser.value = ''
    editPasswordUser.value = ''
    editEmailUser.value = ''
    editNomeUser.value = ''
    editCognomeUser.value = ''
    editIndirizzoUser.value = ''
    editDataUser.value = ''
}

function editUser() {
    const id = idUser.value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8080/user/${id}` : 'http://localhost:8080/user';
    const user = {
        id: id,
        username: editUsernameUser.value,
        password: editPasswordUser.value,
        email: editEmailUser.value,
        nome: editNomeUser.value,
        cognome: editCognomeUser.value,
        indirizzo:editIndirizzoUser.value,
        dataNascita:editDataUser.value
    };

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(() => {
        loadUser()
    });
};



function loadPack() {
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
                            href="#tabellamodificapacchetto" type="button" onclick='loadSinglePack(${pack.id})'
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

function loadSinglePack(id) {
    const url = `http://localhost:8080/pacchetto/${id}`
    fetch(url)
        .then(res => res.json())
        .then(pack => {
            idPack.value = pack.id
            editNamePack.value = pack.name
            editPrezzoPack.value = pack.price
            editDescrizionePack.value = pack.descrizione
            editSistemazionePack.value = pack.sistemazione
            editDurataPack.value = pack.durata
            editImgPack.value = pack.immagine
        })
}

function clearPack() {
    idPack.value = ''
    editNamePack.value = ''
    editPrezzoPack.value = ''
    editDescrizionePack.value = ''
    editSistemazionePack.value = ''
    editDurataPack.value = ''
    editImgPack.value = ''
}

function editPack() {
    const id = idPack.value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8080/pacchetto/${id}` : 'http://localhost:8080/pacchetto';
    const pack = {
        id: id,
        name: editNamePack.value,
        price: editPrezzoPack.value,
        descrizione: editDescrizionePack.value,
        sistemazione: editSistemazionePack.value,
        durata: editDurataPack.value,
        immagine:editImgPack.value,
    };

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pack)
    }).then(() => {
        loadPack()
    });
};