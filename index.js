// NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined

const PERCENT_OF_SYMPTOMS = 0.7;  // show only 70% of the total symptoms

document.addEventListener('DOMContentLoaded', () => { // ensures page is loaded before this runs
  // fill placeholders with randomly generated values
  const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // random value from 18-80, not scientific!
  const sex = Math.random() < 0.5 ? 'male' : 'female';
  const names = ["Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", 
                 "Devin", "Drew", "Elliot", "Emery", "Finley", "Frankie", "Harper", 
                 "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Lane", 
                 "Logan", "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", 
                 "River", "Robin", "Rowan", "Sage", "Sam", "Skylar", "Taylor", "Tatum", 
                 "Toby", "Tyler", "Wren"];
  const name = names[Math.floor(Math.random() * names.length)];


  // generate the patient's vitals
  let level_of_responsiveness = "A&O x4";

  let heart_rate = Math.floor(Math.random() * (100 - 60 + 1) + 60);  // random value from 60-100, not scientific!
  let heart_strength = "Strong";
  let heart_rhythm = "Regular";
  
  let respiratory_rate = Math.floor(Math.random() * (20 - 12 + 1) + 12);  // random value from 12-20, not scientific!
  let respiratory_rhythm = "Regular";
  let respiratory_effort = "Unlabored";

  let skin_color = "Pink"
  let skin_temperature = "Warm";
  let skin_moisture = "Dry";

  /*- Mackowiak, P. A., Wasserman, S. S., & Levine, M. M. (1992). A critical appraisal of 98.6°F, the upper limit of 
      the normal body temperature, and other legacies of Carl Reinhold August Wunderlich. JAMA, 268(12), 1578-1580.
    - Sund-Levander, M., Forsberg, C., & Wahren, L. K. (2002). Normal oral, rectal, tympanic, and axillary body 
      temperature in adult men and women: A systematic literature review. Scandinavian Journal of Caring Sciences, 
      16(2), 122-128. */
  const S = sex == "male" ? 0 : 1
  const eps = Math.random() * 0.5;  // randomness
  let body_temperature = Math.round(98.2 - (0.02 * age) + (0.3 * S) + eps);
  let pupils = "Equal, round, and react to light"
  let blood_pressure = "Strong radial pulse"

            // <li>Pupils: {{ patient.pupils }}</li>
            // <li>BP: {{ patient.blood_pressure }}</li>



  // pick a random condition
  // TODO: pick a condition filtering for the sex
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  console.log(condition);
  // pick a subset of the symptoms
  // exclude symptoms where the vital has already been affected

  // modify the vitals based on the symptoms


  // replace all the values with our picked values (don't do this until all values have been modified by symptoms)
  // TODO: replace this with a loop
  document.getElementById('age').textContent = age;
  document.getElementById('sex').textContent = sex;
  document.getElementById('name').textContent = name;

  document.getElementById('level_of_responsiveness').textContent = level_of_responsiveness;
  document.getElementById('heart_rate').textContent = heart_rate;
  document.getElementById('heart_strength').textContent = heart_strength;
  document.getElementById('heart_rhythm').textContent = heart_rhythm;

  document.getElementById('respiratory_rate').textContent = respiratory_rate;
  document.getElementById('respiratory_rhythm').textContent = respiratory_rhythm;
  document.getElementById('respiratory_effort').textContent = respiratory_effort;

  document.getElementById('skin_color').textContent = skin_color;
  document.getElementById('skin_temperature').textContent = skin_temperature;
  document.getElementById('skin_moisture').textContent = skin_moisture;

  document.getElementById('body_temperature').textContent = body_temperature;
  document.getElementById('pupils').textContent = pupils;
  document.getElementById('blood_pressure').textContent = blood_pressure;

  // treatments
  for (i = 0; i < condition.treatments.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.treatments[i];
      document.getElementById("treatments").appendChild(li);
  }

  // evacuation guidelines
  for (i = 0; i < condition.evacuation_guidelines.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.evacuation_guidelines[i];
      document.getElementById("evacuation_guidelines").appendChild(li);
  }

}); // document.addEventListener
