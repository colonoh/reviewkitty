// NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined

const percentSymptomsToShow = 0.7;  // show only 70% of the total symptoms

const potentialNames = ["Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", 
                 "Devin", "Drew", "Elliot", "Emery", "Finley", "Frankie", "Harper", 
                 "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Lane", 
                 "Logan", "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", 
                 "River", "Robin", "Rowan", "Sage", "Sam", "Skylar", "Taylor", "Tatum", 
                 "Toby", "Tyler", "Wren"];

// stolen from https://stackoverflow.com/a/12646864
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


document.addEventListener('DOMContentLoaded', () => { // ensures page is loaded before this runs
  const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // random value from 18-80, not scientific!
  const sex = Math.random() < 0.5 ? 'male' : 'female';
  const name = potentialNames[Math.floor(Math.random() * potentialNames.length)];  // pick a name at random

  // generate the patient's default vitals
  const defaultLevelOfResponsiveness = "A&O x4";
  const defaultHeartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);  // random value from 60-100, not scientific!
  const defaultHeartStrength = "strong";
  const defaultHeartRhythm = "regular";
  const defaultRespiratoryRate = Math.floor(Math.random() * (20 - 12 + 1) + 12);  // random value from 12-20, not scientific!
  const defaultRespiratoryRhythm = "regular";
  const defaultRespiratoryEffort = "unlabored";
  const defaultSkinColor = "Pink";
  const defaultSkinTemperature = "warm";
  const defaultSkinMoisture = "dry";
  /* Formula for body temperature (in degrees Fahrenheit) from:
    - Mackowiak, P. A., Wasserman, S. S., & Levine, M. M. (1992). A critical appraisal of 98.6°F, the upper limit of 
      the normal body temperature, and other legacies of Carl Reinhold August Wunderlich. JAMA, 268(12), 1578-1580.
    - Sund-Levander, M., Forsberg, C., & Wahren, L. K. (2002). Normal oral, rectal, tympanic, and axillary body 
      temperature in adult men and women: A systematic literature review. Scandinavian Journal of Caring Sciences, 
      16(2), 122-128. */
  const S = sex === "male" ? 0 : 1;
  const eps = Math.random() * 0.5;  // randomness
  const defaultBodyTemperature = Math.round(98.2 - (0.02 * age) + (0.3 * S) + eps);
  const defaultPupils = "Equal, round, and react to light";
  const defaultBloodPressure = "Strong radial pulse";

  // the values start with the default values but may be modified by the symptoms
  let levelOfResponsiveness = defaultLevelOfResponsiveness;
  let heartRate = defaultHeartRate;
  let heartStrength = defaultHeartStrength;
  let heartRhythm = defaultHeartRhythm;
  let respiratoryRate = defaultRespiratoryRate;
  let respiratoryRhythm = defaultRespiratoryRhythm;
  let respiratoryEffort = defaultRespiratoryEffort;
  let skinColor = defaultSkinColor;
  let skinTemperature = defaultSkinTemperature;
  let skinMoisture = defaultSkinMoisture;
  let bodyTemperature = defaultBodyTemperature;
  let pupils = defaultPupils;
  let bloodPressure = defaultBloodPressure;

  // pick a random condition
  // TODO: pick a condition filtering for the sex
  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  // pick a subset of the symptoms
  shuffleArray(condition.symptoms);
  let selectedSymptoms = [];
  for (const symptom of condition.symptoms) {
    if (selectedSymptoms.length >= condition.symptoms.length * percentSymptomsToShow) break;  // stop if we have enough symptoms

    // exclude symptoms where the vital has already been affected (i.e. the vital is already different than its default)
    console.log(symptoms[symptom]);
    for (const [vital, modifier] of Object.entries(symptoms[symptom])) {
      console.log(vital, modifier);
    }
    selectedSymptoms.push(symptom);

  }

  // console.log(selectedSymptoms);
  

  

  // modify the vitals based on the symptoms


  // replace all the values with our picked values (don't do this until all values have been modified by symptoms)
  // TODO: replace this with a loop
  document.getElementById('age').textContent = age;
  document.getElementById('sex').textContent = sex;
  document.getElementById('name').textContent = name;

  document.getElementById('levelOfResponsiveness').textContent = levelOfResponsiveness;
  document.getElementById('heartRate').textContent = heartRate;
  document.getElementById('heartStrength').textContent = heartStrength;
  document.getElementById('heartRhythm').textContent = heartRhythm;

  document.getElementById('respiratoryRate').textContent = respiratoryRate;
  document.getElementById('respiratoryRhythm').textContent = respiratoryRhythm;
  document.getElementById('respiratoryEffort').textContent = respiratoryEffort;

  document.getElementById('skinColor').textContent = skinColor;
  document.getElementById('skinTemperature').textContent = skinTemperature;
  document.getElementById('skinMoisture').textContent = skinMoisture;

  document.getElementById('bodyTemperature').textContent = bodyTemperature;
  document.getElementById('pupils').textContent = pupils;
  document.getElementById('bloodPressure').textContent = bloodPressure;

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

}); // document.addEventListener
