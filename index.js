// hello there
document.addEventListener('DOMContentLoaded', () => {
  min_age = 18;
  max_age = 80;
  const patient_age = Math.floor(Math.random() * (max_age - min_age + 1) + min_age);
  const patient_sex = Math.random() < 0.5 ? 'male' : 'female';

  const names = ["Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", 
                 "Devin", "Drew", "Elliot", "Emery", "Finley", "Frankie", "Harper", 
                 "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Lane", 
                 "Logan", "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", 
                 "River", "Robin", "Rowan", "Sage", "Sam", "Skylar", "Taylor", "Tatum", 
                 "Toby", "Tyler", "Wren"];
  const patient_name = names[Math.floor(Math.random() * names.length)];

  document.getElementById('patient_age').textContent = patient_age;
  document.getElementById('patient_sex').textContent = patient_sex;
  document.getElementById('patient_name').textContent = patient_name;
});
