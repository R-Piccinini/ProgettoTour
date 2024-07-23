let currentStep = 1;
const totalSteps = 4;

function nextStep() {

  if (currentStep < totalSteps) {
    currentStep++;
    showStep();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep();
  }
}

function saveData() {
  totale = 0
  partenza = document.getElementById("partenza").value;
  destinazione = document.getElementById("destinazione").value;
  alloggio = document.getElementById("alloggio").value;
  viaggiatori = document.getElementById("num-viaggiatori").value;
  giorni = document.getElementById("num-giorni").value;
  minori = document.getElementById("minori").value;
  return totale;
}

function preventivo() {
  
  saveData();
  if (partenza === "Milano") {
    totale = totale + 60;
  } else if (partenza === "Roma") {
    totale = totale + 80;
  } else if (partenza === "Napoli") {
    totale = totale + 100;
  } else if (partenza === "Bari") {
    totale = totale + 120;
  } else if (partenza === "Palermo") {
    totale = totale + 150;
  }

  if (destinazione === "Francia") {
    totale = totale + 300;
  } else if (destinazione === "Inghilterra") {
    totale = totale + 350;
  } else if (destinazione === "Spagna") {
    totale = totale + 400;
  } else if (destinazione === "Grecia") {
    totale = totale + 450;
  } else if (destinazione === "Germania") {
    totale = totale + 500;
  } else if (destinazione === "Oceania") {
    totale = totale + 600;
  } else if (destinazione === "Stati Uniti") {
    totale = totale + 700;
  } else if (destinazione === "Asia") {
    totale = totale + 800;
  } else if (destinazione === "Nord America") {
    totale = totale + 900;
  } else if (destinazione === "Sud America") {
    totale = totale + 1000;
  } else if (destinazione === "Africa") {
    totale = totale + 1100;
  }

  if (alloggio === "Ostello") {
    totale = totale + 50;
  } else if (alloggio === "B&B") {
    totale = totale + 100;
  } else if (alloggio === "Hotel") {
    totale = totale + 200;
  } else if (alloggio === "Resort") {
    totale = totale + 300;
  }

  totale = totale * viaggiatori;

  totale = totale * giorni;

  if (minori === "Si") {
    totale * 0.9;
  }
  
  return totale;

};

// Funzione per visualizzazione step
function showStep() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step4 = document.getElementById('step-4');

  switch (currentStep) {
    // Visualizzazione step 1 (nasconde tutti gli altri step)
    case 1:
      step1.classList.remove('d-none');
      step1.classList.add('d-flex');
      step2.classList.remove('d-none');
      step2.classList.add('d-none');
      step3.classList.add('d-none');
      step4.classList.add('d-none');
      prevBtn.classList.remove('d-inlineblock');
      prevBtn.classList.add('d-none');
      break;
    // Visualizzazione step 2
    case 2:
      step1.classList.remove('d-flex');
      step1.classList.add('d-none');
      step2.classList.remove('d-none');
      step2.classList.add('d-flex');
      step3.classList.remove('d-flex');
      step3.classList.add('d-none');
      step4.classList.remove('d-flex');
      step4.classList.add('d-none');
      prevBtn.classList.remove('d-none');
      prevBtn.classList.add('d-inlineblock');
      break;
    // Visualizzazione step 3
    case 3:
      step1.classList.remove('d-flex');
      step1.classList.add('d-none');
      step2.classList.remove('d-flex');
      step2.classList.add('d-none');
      step3.classList.remove('d-none');
      step3.classList.add('d-flex');
      step4.classList.remove('d-flex');
      step4.classList.add('d-none');
      nextBtn.classList.remove('d-none');
      nextBtn.classList.add('d-inlineblock');
      break;
    // Visualizzazione step 4  
    case 4:
      step1.classList.remove('d-flex');
      step1.classList.add('d-none');
      step2.classList.remove('d-flex');
      step2.classList.add('d-none');
      step3.classList.remove('d-flex');
      step3.classList.add('d-none');
      step4.classList.remove('d-none');
      step4.classList.add('d-flex');
      nextBtn.classList.remove('d-inlineblock');
      nextBtn.classList.add('d-none');

      // Richiama funzione preventivo per il calcolo
      preventivo();

      var nome = 'Nome: ' + $('#nome').val() + ' ' + $('#cognome').val();
      var aereoPartenza = 'Aeroporto di partenza: ' + $('#partenza').val();
      var aereoArrivo = 'Aeroporto di arrivo: ' + $('#destinazione').val();
      var numeroGiorni = 'Numero giorni: ' + $('#num-giorni').val();
      var numeroViaggiatori = 'Numero viaggiatori: ' + $('#num-viaggiatori').val();

      // Aggiunge il testo
      $('#nome-val').text(nome);
      $('#partenza-val').text(aereoPartenza);
      $('#destinazione-val').text(aereoArrivo);
      $('#giorni-val').text(numeroGiorni);
      $('#nViagg-val').text(numeroViaggiatori);
      $('#totale-val').text("Prezzo: " + totale + " €");

      break;
  }
}



showStep();