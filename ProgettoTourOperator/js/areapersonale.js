function aggiungiSfondo(element) {
    element.classList.add('sfondoTesto');
}

function rimuoviSfondo(element) {
    element.classList.remove('sfondoTesto');
}

function attivaSfondo(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('sfondo');
    });
    element.classList.add('sfondo');
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-link')) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('sfondo');
        });
    }
})

/*function categoria1(){
    document.querySelectorAll(".container").forEach(function(element) {
       element.style.display = "none";
   });
   document.getElementById("containerCat1").style.display = "block";
}*/