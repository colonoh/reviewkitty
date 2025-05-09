/* 
NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined!

Formula for body temperature (in degrees Fahrenheit) from:
  - Mackowiak, P. A., Wasserman, S. S., & Levine, M. M. (1992). A critical appraisal of 98.6°F, the upper limit of 
    the normal body temperature, and other legacies of Carl Reinhold August Wunderlich. JAMA, 268(12), 1578-1580.
  - Sund-Levander, M., Forsberg, C., & Wahren, L. K. (2002). Normal oral, rectal, tympanic, and axillary body 
    temperature in adult men and women: A systematic literature review. Scandinavian Journal of Caring Sciences, 
    16(2), 122-128. 
*/

const percentSymptomsToShow = 0.8;  // show only X% of the total symptoms

const potentialNames = ["Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", "Devin", "Drew", "Elliot", 
  "Emery", "Finley", "Frankie", "Harper", "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Lane", "Logan", 
  "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", "River", "Robin", "Rowan", "Sage", "Sam", "Skylar", 
  "Taylor", "Tatum", "Toby", "Tyler", "Wren"];

// stolen from https://stackoverflow.com/a/12646864
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// generate the patient's default info and vitals
const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // random value from 18-80, not scientific!
const sex = Math.random() < 0.5 ? 'male' : 'female';
const S = sex === "male" ? 0 : 1;  // for body temp formula, 1 for males
const eps = Math.random() * 0.5;  // randomness for body temp

let reveal_hit = false;

const basePatient = {
  'age': age,
  'sex': sex,
  'name': potentialNames[Math.floor(Math.random() * potentialNames.length)],  // pick a name at random
  'time': new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),  // now e.g. 01:30 AM
  'levelOfResponsiveness': "A&O x4",
  'heartRate': Math.floor(Math.random() * (100 - 60 + 1) + 60),  // random value from 60-100, not scientific!
  'heartStrength': 'strong',
  'heartRhythm': 'regular',
  'respiratoryRate': Math.floor(Math.random() * (20 - 12 + 1) + 12),  // random value from 12-20, not scientific!
  'respiratoryRhythm': 'regular',
  'respiratoryEffort': 'unlabored',
  'skinColor': 'pink',
  'skinTemperature': 'warm',
  'skinMoisture': 'dry',
  'bodyTemperature': Math.round(98.2 - (0.02 * age) + (0.3 * S) + eps),
  'pupils': 'equal, round, and react to light',
  'bloodPressure': 'strong radial pulse',
};

let finalPatient = structuredClone(basePatient);  // copy the default values but some may be modified by the symptoms

// pick a random condition
// TODO: pick a condition filtering for the sex
const condition = conditions[Math.floor(Math.random() * conditions.length)];
console.log("Selecting ", condition);
// pick a subset of the symptoms
shuffleArray(condition.symptoms); // randomize the order of the symptoms
let selectedSymptoms = [];
let hiddenSymptoms = [];
let omittedSymptoms = [];
symptoms_loop:
for (const symptom of condition.symptoms) {
  // if we already have enough symptoms, don't use them
  if ((selectedSymptoms.length + hiddenSymptoms.length + omittedSymptoms.length) >= condition.symptoms.length * percentSymptomsToShow) {
    omittedSymptoms.push(symptom); // not present in this patient
    continue;
  }

  // before selecting this symptom, check if it affects any symptoms which have already been affected
  console.log("Symptom", symptom, symptoms[symptom]);
  for (const [vital_affected, how] of Object.entries(symptoms[symptom])) {
    if (finalPatient[vital_affected] !== basePatient[vital_affected]) {
      omittedSymptoms.push(symptom);
      continue symptoms_loop; // skip the rest of the outer for loop
    }
  }

  // okay, choose this symptom and apply it's effects
  if (Object.keys(symptoms[symptom]).length) {  // if this symptom affects any vitals
    // for each vital affected, figure out how to modify the relevant vital
    for (const [vital_affected, how] of Object.entries(symptoms[symptom])) {
      if (typeof how === 'string') { 
        finalPatient[vital_affected] = how;  // text values replace the current value
      } else {
        finalPatient[vital_affected] *= how;  // non-text values (e.g. float) multiply the value
        finalPatient[vital_affected] = Math.round(finalPatient[vital_affected]);
      }
    }
    hiddenSymptoms.push(symptom); // hidden because it's seen in its effect on the vitals
  } else {
    selectedSymptoms.push(symptom);
  }
}

// here to ensure the page is loaded before its code runs
document.addEventListener('DOMContentLoaded', () => { 
  // in the doc, replace all the values with the new values (don't do this until all values have been modified by symptoms)
  // this relies on the HTML tag ids matching the `finalPatient` keys
  for (const [key, value] of Object.entries(finalPatient)) {
    const element = document.getElementById(key);
    if (element) element.textContent = value;
  }

  for (i = 0; i < selectedSymptoms.length; ++i) {
      let li = document.createElement('li');
      li.innerText = selectedSymptoms[i];
      document.getElementById("selectedSymptoms").appendChild(li);
  }
})

// runs when the `reveal` button is pressed`
document.getElementById('reveal_button').addEventListener('click', () => {

  // the first time the button is hit, it does the rest of the code
  // the second time, it reloads the page
  if (reveal_hit === true ) window.location.reload();
  else {
    reveal_hit = true;

    // show the condition
    document.getElementById("condition_name").textContent = condition.name;
    document.getElementById("condition_description").textContent = condition.description;
    
    // the rest of the symptoms
    for (let i = 0; i < hiddenSymptoms.length; ++i) {
        const clone = document.getElementById('hiddenSymptomTemplate').content.cloneNode(true);
        const span = clone.querySelector('span');
        span.innerText = hiddenSymptoms[i];
        document.getElementById("hiddenSymptoms").appendChild(clone);
    }

    for (let i = 0; i < omittedSymptoms.length; ++i) {
        const clone = document.getElementById('omittedSymptomTemplate').content.cloneNode(true);
        const span = clone.querySelector('span');
        span.innerText = omittedSymptoms[i];
        document.getElementById("omittedSymptoms").appendChild(clone);
    }

    // treatments
    document.getElementById("treatmentsHeader").textContent = "Treatments";
    for (i = 0; i < condition.treatments.length; ++i) {
        let li = document.createElement('li');
        li.innerText = condition.treatments[i];
        document.getElementById("treatments").appendChild(li);
    }

    // evacuation guidelines
    document.getElementById("evacuationGuidelinesHeader").textContent = "Evacuation guidelines";
    for (i = 0; i < condition.evacuationGuidelines.length; ++i) {
        let li = document.createElement('li');
        li.innerText = condition.evacuationGuidelines[i];
        document.getElementById("evacuationGuidelines").appendChild(li);
    }
  }

  
});
