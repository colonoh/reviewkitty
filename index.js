// NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined

const PERCENT_OF_SYMPTOMS = 0.7;  // show only 70% of the total symptoms

const POTENTIAL_NAMES = ["Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", 
                 "Devin", "Drew", "Elliot", "Emery", "Finley", "Frankie", "Harper", 
                 "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Lane", 
                 "Logan", "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", 
                 "River", "Robin", "Rowan", "Sage", "Sam", "Skylar", "Taylor", "Tatum", 
                 "Toby", "Tyler", "Wren"];

document.addEventListener('DOMContentLoaded', () => { // ensures page is loaded before this runs
  const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // random value from 18-80, not scientific!
  const sex = Math.random() < 0.5 ? 'male' : 'female';
  const name = POTENTIAL_NAMES[Math.floor(Math.random() * POTENTIAL_NAMES.length)];  // pick a name at random

  // generate the patient's default vitals
  const default_level_of_responsiveness = "A&O x4";
  const default_heart_rate = Math.floor(Math.random() * (100 - 60 + 1) + 60);  // random value from 60-100, not scientific!
  const default_heart_strength = "Strong";
  const default_heart_rhythm = "Regular";
  const default_respiratory_rate = Math.floor(Math.random() * (20 - 12 + 1) + 12);  // random value from 12-20, not scientific!
  const default_respiratory_rhythm = "Regular";
  const default_respiratory_effort = "Unlabored";
  const default_skin_color = "Pink";
  const default_skin_temperature = "Warm";
  const default_skin_moisture = "Dry";
  /*- Mackowiak, P. A., Wasserman, S. S., & Levine, M. M. (1992). A critical appraisal of 98.6°F, the upper limit of 
      the normal body temperature, and other legacies of Carl Reinhold August Wunderlich. JAMA, 268(12), 1578-1580.
    - Sund-Levander, M., Forsberg, C., & Wahren, L. K. (2002). Normal oral, rectal, tympanic, and axillary body 
      temperature in adult men and women: A systematic literature review. Scandinavian Journal of Caring Sciences, 
      16(2), 122-128. */
  const S = sex === "male" ? 0 : 1;
  const eps = Math.random() * 0.5;  // randomness
  const default_body_temperature = Math.round(98.2 - (0.02 * age) + (0.3 * S) + eps);
  const default_pupils = "Equal, round, and react to light";
  const default_blood_pressure = "Strong radial pulse";

  // these are the actually-used values (which may be modified from default)
  let level_of_responsiveness = default_level_of_responsiveness;
  let heart_rate = default_heart_rate;
  let heart_strength = default_heart_strength;
  let heart_rhythm = default_heart_rhythm;
  let respiratory_rate = default_respiratory_rate;
  let respiratory_rhythm = default_respiratory_rhythm;
  let respiratory_effort = default_respiratory_effort;
  let skin_color = default_skin_color;
  let skin_temperature = default_skin_temperature;
  let skin_moisture = default_skin_moisture;
  let body_temperature = default_body_temperature;
  let pupils = default_pupils;
  let blood_pressure = default_blood_pressure;

  // pick a random condition
  // TODO: pick a condition filtering for the sex
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  console.log(condition);
  // pick a subset of the symptoms
  // exclude symptoms where the vital has already been affected (i.e. the vital is already different than its default)

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
