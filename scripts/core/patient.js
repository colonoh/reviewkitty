/**
 * Patient Generation Module
 * Generates random patients with medical conditions and symptoms
 */

// Patient name pool
const potentialNames = [
  "Alex", "Andy", "Avery", "Blake", "Casey", "Charlie", "Dakota", "Devin", "Drew", "Elliot",
  "Emery", "Finley", "Frankie", "Harper", "Hayden", "Jamie", "Jordan", "Jules", "Kai", "Kendall",
  "Lane", "Logan", "Micah", "Morgan", "Parker", "Quinn", "Reese", "Riley", "River", "Robin",
  "Rowan", "Sage", "Sam", "Skylar", "Taylor", "Tatum", "Toby", "Tyler", "Wren"
];

// Configuration
const percentSymptomsToShow = 0.8;

/**
 * Generate a random patient with a medical condition
 * @param {string} [conditionId] - Optional specific condition ID. If not provided, random is selected
 * @returns {Object} - Patient data including patient info, condition, and symptoms
 */
function generatePatient(conditionId) {
  // Generate base patient demographics and vitals
  const basePatient = createBasePatient();

  // Select condition
  let condition;
  if (conditionId) {
    condition = conditions.find(c => c.id === conditionId);
    if (!condition) {
      console.warn(`Condition ${conditionId} not found, selecting random`);
      condition = conditions[Math.floor(Math.random() * conditions.length)];
    }
  } else {
    condition = conditions[Math.floor(Math.random() * conditions.length)];
  }

  console.log("Selecting condition:", condition);

  // Create a copy of base patient that will be modified by symptoms
  const patientVitals = structuredClone(basePatient);

  // Select symptoms and apply their effects
  const symptoms = selectSymptoms(
    condition.symptoms,
    percentSymptomsToShow,
    basePatient,
    patientVitals,
    symptomRegistry
  );

  // Apply vital modifications for each symptom
  for (const symptom of symptoms.hiddenSymptoms) {
    const modified = applySymptomEffects(patientVitals, symptom, symptomRegistry);
    Object.assign(patientVitals, modified);
  }

  return {
    patient: patientVitals,
    condition: {
      id: condition.id,
      name: condition.name,
      description: condition.description,
      treatments: condition.treatments,
      evacuationGuidelines: condition.evacuationGuidelines,
      references: condition.references
    },
    symptoms: {
      selected: symptoms.selectedSymptoms,
      hidden: symptoms.hiddenSymptoms,
      omitted: symptoms.omittedSymptoms
    }
  };
}

/**
 * Create a base patient with random demographics and default vitals
 * @returns {Object} - Base patient object
 */
function createBasePatient() {
  const age = Math.floor(Math.random() * (80 - 18 + 1) + 18); // 18-80 years
  const sex = Math.random() < 0.5 ? 'male' : 'female';
  const S = sex === "male" ? 0 : 1;  // for body temp formula
  const eps = Math.random() * 0.5;  // randomness for body temp

  return {
    age: age,
    sex: sex,
    name: potentialNames[Math.floor(Math.random() * potentialNames.length)],
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    levelOfResponsiveness: "A&O x4",
    heartRate: Math.floor(Math.random() * (100 - 60 + 1) + 60),  // 60-100 bpm
    heartStrength: 'strong',
    heartRhythm: 'regular',
    respiratoryRate: Math.floor(Math.random() * (20 - 12 + 1) + 12),  // 12-20 breaths/min
    respiratoryRhythm: 'regular',
    respiratoryEffort: 'unlabored',
    skinColor: 'pink',
    skinTemperature: 'warm',
    skinMoisture: 'dry',
    bodyTemperature: Math.round(98.2 - (0.02 * age) + (0.3 * S) + eps),
    pupils: 'equal, round, and react to light',
    bloodPressure: 'strong radial pulse'
  };
}
