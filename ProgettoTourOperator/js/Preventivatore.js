let currentStep = 1;
const totalSteps = 4;

const prices = {
  partenza: {
    'Milano': 60,
    'Roma': 80,
    'Napoli': 100,
    'Bari': 120,
    'Palermo': 150
  },
  destinazione: {
    'Francia': 300,
    'Inghilterra': 350,
    'Spagna': 400,
    'Grecia': 450,
    'Germania': 500,
    'Oceania': 600,
    'Stati Uniti': 700,
    'Asia': 800,
    'Nord America': 900,
    'Sud America': 1000,
    'Africa': 1100
  },
  alloggio: {
    'Ostello': 50,
    'B&B': 100,
    'Hotel': 200,
    'Resort': 300
  }
};

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
  arrivo = document.getElementById("arrivo").value;
  sistemazione = document.getElementById("alloggio").value;
  minore = document.getElementById("minore").value;
  viaggiatori = document.getElementById("nViaggiatori").value;
  giorni = document.getElementById("nGiorni").value;
  return totale;
}

function showStep() {
  const prevBtn = document.getElementById('prev-btn');
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step4 = document.getElementById('step-4');

  switch (currentStep) {
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
    case 3:
      step1.classList.remove('d-flex');
      step1.classList.add('d-none');
      step2.classList.remove('d-flex');
      step2.classList.add('d-none');
      step3.classList.remove('d-none');
      step3.classList.add('d-flex');
      step4.classList.remove('d-flex');
      step4.classList.add('d-none');
      break;
    case 4:
      step1.classList.remove('d-flex');
      step1.classList.add('d-none');
      step2.classList.remove('d-flex');
      step2.classList.add('d-none');
      step3.classList.remove('d-flex');
      step3.classList.add('d-none');
      step4.classList.remove('d-none');
      step4.classList.add('d-flex');
      break;
  }
}

function riepilogo() {
  var nome = $('#first_name').val() + ' ' + $('#last_name').val();
  var aereoPartenza = $('#partenza').val();
  var aereoArrivo = $('#arrivo').val();
  var numeroGiorni = $('#nGiorni').val();
  var numeroViaggiatori = $('#nViaggiatori').val();

  $('#nome-val').text(nome);
  $('#partenza-val').text(aereoPartenza);
  $('#arrivo-val').text(aereoArrivo);
  $('#giorni-val').text(numeroGiorni);
  $('#nViagg-val').text(numeroViaggiatori);
}

showStep();