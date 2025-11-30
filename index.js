/**
 * ReviewKitty - UI Orchestration
 * Handles DOM manipulation and event handling
 */

let reveal_hit = false;
let currentPatientData = null;

// Generate initial patient when page loads
document.addEventListener('DOMContentLoaded', () => {
  generateAndDisplayPatient();
  setupRevealButton();
});

/**
 * Generate a new patient and populate the UI
 */
function generateAndDisplayPatient() {
  currentPatientData = generatePatient();
  displayPatientInfo(currentPatientData);
  displayVitals(currentPatientData);
  displaySelectedSymptoms(currentPatientData);
}

/**
 * Display patient demographics (name, age, sex)
 */
function displayPatientInfo(patientData) {
  document.getElementById('age').textContent = patientData.patient.age;
  document.getElementById('sex').textContent = patientData.patient.sex;
  document.getElementById('name').textContent = patientData.patient.name;
}

/**
 * Display all vital signs
 */
function displayVitals(patientData) {
  const { patient } = patientData;
  const vitalFields = [
    'time', 'levelOfResponsiveness', 'heartRate', 'heartStrength', 'heartRhythm',
    'respiratoryRate', 'respiratoryRhythm', 'respiratoryEffort', 'skinColor',
    'skinTemperature', 'skinMoisture', 'pupils', 'bloodPressure', 'bodyTemperature'
  ];

  for (const field of vitalFields) {
    const element = document.getElementById(field);
    if (element) {
      element.textContent = patient[field];
    }
  }
}

/**
 * Display initially visible symptoms
 */
function displaySelectedSymptoms(patientData) {
  const container = document.getElementById('selectedSymptoms');
  container.innerHTML = '';

  for (const symptom of patientData.symptoms.selected) {
    const li = document.createElement('li');
    li.innerText = symptom;
    container.appendChild(li);
  }
}

/**
 * Setup the reveal button event handler
 */
function setupRevealButton() {
  const button = document.getElementById('reveal_button');

  button.addEventListener('click', () => {
    if (reveal_hit === true) {
      // Second click: reload for new patient
      window.location.reload();
    } else {
      // First click: reveal condition details
      reveal_hit = true;
      button.innerText = 'New patient';
      revealCondition(currentPatientData);
    }
  });
}

/**
 * Reveal condition information and remaining symptoms
 */
function revealCondition(patientData) {
  const { condition, symptoms } = patientData;

  // Show condition name and description
  document.getElementById('condition_name').textContent = condition.name;
  document.getElementById('condition_description').textContent = condition.description;

  // Show hidden symptoms (those that modify vitals)
  displaySymptomCategory('hiddenSymptoms', 'hiddenSymptomTemplate', symptoms.hidden);

  // Show omitted symptoms (those not present in this patient)
  displaySymptomCategory('omittedSymptoms', 'omittedSymptomTemplate', symptoms.omitted);

  // Show treatments
  displayListItems('treatmentsHeader', 'Treatments', 'treatments', condition.treatments);

  // Show evacuation guidelines
  displayListItems('evacuationGuidelinesHeader', 'Evacuation guidelines',
    'evacuationGuidelines', condition.evacuationGuidelines);
}

/**
 * Display a category of symptoms using a template
 */
function displaySymptomCategory(containerId, templateId, symptoms) {
  const container = document.getElementById(containerId);

  for (const symptom of symptoms) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    const span = clone.querySelector('span');
    span.innerText = symptom;
    container.appendChild(clone);
  }
}

/**
 * Display a list of items (treatments, guidelines, etc.)
 */
function displayListItems(headerId, headerText, listId, items) {
  document.getElementById(headerId).textContent = headerText;
  const container = document.getElementById(listId);

  for (const item of items) {
    const li = document.createElement('li');
    li.innerText = item;
    container.appendChild(li);
  }
}
