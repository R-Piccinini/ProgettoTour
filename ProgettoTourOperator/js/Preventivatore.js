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
  formContent.innerHTML = '';

  switch (currentStep) {
    case 1:
      formContent.innerHTML = `
                <h4>STEP 1</h4>
                <div class="form-group col-6">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" required>
                </div>
                <div class="form-group col-6">
                    <label for="cognome">Cognome</label>
                    <input type="text" class="form-control" id="cognome" required>
                </div>
                <div class="form-group col-6">
                    <label for="indirizzo">Indirizzo</label>
                    <input type="text" class="form-control" id="indirizzo" required>
                </div>
                <div class="form-group col-6">
                    <label for="dataNascita">Data di Nascita</label>
                    <input type="date" class="form-control" id="dataNascita" required>
                </div>
                <div class="form-group col-4">
                    <button type="button" class="btn my-3" id="next-btn" onclick="nextStep()">Avanti</button>
                </div>
            `;
      break;
    case 2:
      formContent.innerHTML = `
                <h2>Step 2</h2>
                <div class="d-flex justify-content-center">
                    <div class="form-group col-4">
                        <label for="partenza">Partenza:</label>
                        <select id="partenza" name="partenza">
                            <option>Milano</option>
                            <option>Roma</option>
                            <option>Napoli</option>
                            <option>Bari</option>
                            <option>Palermo</option>
                        </select>
                    </div>
                    <div class="form-group col-4">
                        <label for="destinazione">Destinazione:</label>
                        <select id="destinazione" name="destinazione">
                            <optgroup label="Europa">
                                <option>Francia</option>
                                <option>Inghilterra</option>
                                <option>Spagna</option>
                                <option>Grecia</option>
                                <option>Germania</option>
                            </optgroup>
                            <optgroup label="Internazionale">
                                <option>Oceania</option>
                                <option>Stati Uniti</option>
                                <option>Asia</option>
                                <option>Nord America</option>
                                <option>Sud America</option>
                                <option>Africa</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="form-group col-4">
                    <button type="button" class="btn my-3" id="prev-btn" onclick="prevStep()">Indietro</button>
                    <button type="button" class="btn" id="next-btn" onclick="nextStep()">Avanti</button>
                </div>
            `;
      break;
    case 3:
      formContent.innerHTML = `
                <h2>Step 3</h2>
                <div class="form-group col-6">
                    <label for="sistemazione">Tipologia di sistemazione:</label>
                    <select id="sistemazione" name="sistemazione">
                        <option>Ostello</option>
                        <option>B&B</option>
                        <option>Hotel</option>
                        <option>Resort</option>
                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="numero-viaggiatori">Numero di viaggiatori</label>
                    <input type="number" id="numero-viaggiatori" name="numero-viaggiatori" min="1" required>
                </div>
                <div class="form-group col-6">
                    <label for="numero-giorni">Numero di giorni</label>
                    <input type="number" id="numero-giorni" name="numero-giorni" min="1" required>
                </div>
                <div class="form-group col-4">
                    <button type="button" class="btn my-3" id="prev-btn" onclick="prevStep()">Indietro</button>
                    <button type="button" class="btn" id="next-btn" onclick="nextStep()">Avanti</button>
                </div>
            `;
      break;
    case 4:
      calculateSummary();
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