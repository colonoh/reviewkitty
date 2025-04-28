// NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined

/* 

Formula for body temperature (in degrees Fahrenheit) from:
  - Mackowiak, P. A., Wasserman, S. S., & Levine, M. M. (1992). A critical appraisal of 98.6°F, the upper limit of 
    the normal body temperature, and other legacies of Carl Reinhold August Wunderlich. JAMA, 268(12), 1578-1580.
  - Sund-Levander, M., Forsberg, C., & Wahren, L. K. (2002). Normal oral, rectal, tympanic, and axillary body 
    temperature in adult men and women: A systematic literature review. Scandinavian Journal of Caring Sciences, 
    16(2), 122-128. 

*/


const percentSymptomsToShow = 0.7;  // show only 70% of the total symptoms

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

// let reveal = false;  // show the condition and full symptoms when set to true

// generate the patient's default info and vitals
const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // random value from 18-80, not scientific!
const sex = Math.random() < 0.5 ? 'male' : 'female';
const S = sex === "male" ? 0 : 1;  // for body temp formula, 1 for males
const eps = Math.random() * 0.5;  // randomness for body temp

const basePatient = {
  'age': age,
  'sex': sex,
  'name': potentialNames[Math.floor(Math.random() * potentialNames.length)],  // pick a name at random
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

// pick a subset of the symptoms
shuffleArray(condition.symptoms); // randomize the order of the symptoms
let selectedSymptoms = [];
symptoms_loop:
for (const symptom of condition.symptoms) {
  if (selectedSymptoms.length >= condition.symptoms.length * percentSymptomsToShow) break;  // stop if we have enough symptoms

  // before selecting this symptom, check if it affects any symptoms which have already been affected
  for (const [vital_affected, how] of Object.entries(symptoms[symptom])) {
    // console.log(vital_affected, how);
    if (finalPatient[vital_affected] !== basePatient[vital_affected]) {
      console.log(vital_affected, "already modified!", basePatient[vital_affected], finalPatient[vital_affected]);
      continue symptoms_loop; // skip the rest of the outer for loop
    }
  }
  // okay, choose this symptom and apply it's effects
  // console.log("Selecting ", symptom);
  selectedSymptoms.push(symptom);
  for (const [vital_affected, how] of Object.entries(symptoms[symptom])) {
    if (typeof how === 'string') { 
      finalPatient[vital_affected] = how;  // text values replace the current value
    } else {
      finalPatient[vital_affected] *= how;  // non-text values (e.g. float) modify the value
      finalPatient[vital_affected] = Math.round(finalPatient[vital_affected]);
    }
  }
}
console.log("Selected symptoms:", selectedSymptoms);

// in the doc, replace all the values with the new values (don't do this until all values have been modified by symptoms)
// here to ensure the page is loaded before its code runs
document.addEventListener('DOMContentLoaded', () => { 
  
  for (const [key, value] of Object.entries(finalPatient)) {
    const element = document.getElementById(key);
    if (element) element.textContent = value;
  }

  for (i = 0; i < selectedSymptoms.length; ++i) {
      let li = document.createElement('li');
      li.innerText = selectedSymptoms[i].replace(/_/g, " "); // replace undscores with spaces in the symptom
      document.getElementById("symptoms").appendChild(li);
  }
})

// runs when the `reveal` button is pressed`
document.getElementById('reveal_button').addEventListener('click', () => {
  // condition
  document.getElementById("condition_name").textContent = condition.name;
  document.getElementById("condition_description").textContent = condition.description;

  // treatments
  for (i = 0; i < condition.treatments.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.treatments[i];
      document.getElementById("treatments").appendChild(li);
  }

  // evacuation guidelines
  for (i = 0; i < condition.evacuationGuidelines.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.evacuationGuidelines[i];
      document.getElementById("evacuationGuidelines").appendChild(li);
  }
});
