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
  sistemazione: {
    'Ostello': 50,
    'B&B': 100,
    'Hotel': 200,
    'Resort': 300
  }
};

function nextStep() {
  event.preventDefault();

  const form = document.getElementById('form-content');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

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

function showStep() {
  const formContent = document.getElementById('form-content');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  
  switch (currentStep) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
  }
}

function calculateSummary() {
  const nome = document.getElementById('nome').value;
  const cognome = document.getElementById('cognome').value;
  const indirizzo = document.getElementById('indirizzo').value;
  const dataNascita = new Date(document.getElementById('dataNascita').value);
  const today = new Date();
  const age = today.getFullYear() - dataNascita.getFullYear();
  const isMinor = age < 18;
  const partenzaCost = prices.partenza[document.getElementById('partenza').value];
  const destinazioneCost = prices.destinazione[document.getElementById('destinazione').value];
  const sistemazioneCost = prices.sistemazione[document.getElementById('sistemazione').value];
  const numeroViaggiatori = parseInt(document.getElementById('numero-viaggiatori').value);
  const numeroGiorni = parseInt(document.getElementById('numero-giorni').value);

  let totale = (partenzaCost + destinazioneCost + (sistemazioneCost * numeroGiorni)) * numeroViaggiatori;

  if (isMinor) {
    totale *= 0.9;
  }

  const riepilogo = `
        <h2>Step 4</h2>
        <div>
            <p>Nome: ${nome}</p>
            <p>Cognome: ${cognome}</p>
            <p>Indirizzo: ${indirizzo}</p>
            <p>Data di nascita: ${dataNascita.toLocaleDateString()}</p>
            <p>Partenza: ${partenzaCost}€</p>
            <p>Destinazione: ${destinazioneCost}€</p>
            <p>Tipologia di sistemazione: ${sistemazioneCost}€</p>
            <p>Numero di viaggiatori: ${numeroViaggiatori}</p>
            <p>Numero di giorni: ${numeroGiorni}</p>
            <p><strong>Totale: ${totale.toFixed(2)}€</strong></p>
        </div>
    `;
  document.getElementById('form-content').innerHTML = riepilogo;
}

showStep(); // Per avviare il processo di visualizzazione del form