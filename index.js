// NOTE: conditions.js needs to be included before this otherwise `conditions` will be undefined

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

  /*
            <li>HR: {{ patient.heart_rate }} / {{ patient.heart_strength }} / {{ patient.heart_rhythm }}</li>
            <li>RR: {{ patient.respiratory_rate }} / {{ patient.respiratory_rhythm }} / {{ patient.respiratory_effort }}</li>
            <li>Skin: {{ patient.skin_color }}, {{ patient.skin_temperature }}, {{ patient.skin_moisture }}</li>
            <li>Temp: {{ patient.body_temperature|round(1) }} &#176;F</li>
            <li>Pupils: {{ patient.pupils }}</li>
            <li>BP: {{ patient.blood_pressure }}</li>

*/

  // pick a random condition
  // TODO: pick a condition filtering for the sex
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  // console.log(condition);
  // pick a subset of the symptoms

  // modify the vitals based on the symptoms

  // replace all the values with our picked values (don't do this until all values have been modified by symptoms)
  document.getElementById('age').textContent = age;
  document.getElementById('sex').textContent = sex;
  document.getElementById('name').textContent = name;

  document.getElementById('level_of_responsiveness').textContent = level_of_responsiveness;
  document.getElementById('heart_rate').textContent = heart_rate;


  for (i = 0; i < condition.treatments.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.treatments[i];
      document.getElementById("treatments").appendChild(li);
  }

  for (i = 0; i < condition.evacuation_guidelines.length; ++i) {
      let li = document.createElement('li');
      li.innerText = condition.evacuation_guidelines[i];
      document.getElementById("evacuation_guidelines").appendChild(li);
  }

}); // document.addEventListener
