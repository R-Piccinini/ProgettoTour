const tableUser = document.getElementById('tableUser');

function loadUser() {
    const url = "http://localhost:8080/user";
    fetch(url)
        .then(res => res.json())
        .then(utenti => {
            tableUser.innerHTML="";
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


function deleteUser(id){
    if(confirm('Sei sicuro di volere elimiare?')){
        const url= `http://localhost:8080/user/${id}`;
        fetch(url,{
            method: 'DELETE'
        }).then(() => {
             loadUser();
        });
        
    }
   
};