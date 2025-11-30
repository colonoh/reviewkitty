/**
 * Symptom Selection and Processing Module
 * Handles selection and filtering of symptoms based on patient state
 */

/**
 * Shuffle array in-place using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Select and categorize symptoms from a condition
 * @param {Array<string>} conditionSymptoms - Symptoms from the condition
 * @param {number} percentToShow - Percentage of symptoms to show (0-1)
 * @param {Object} baseVitals - Base patient vitals for conflict detection
 * @param {Object} currentVitals - Current patient vitals (may be modified)
 * @param {Object} symptomRegistry - Registry mapping symptoms to vital effects
 * @returns {Object} - { selected, hidden, omitted }
 */
function selectSymptoms(conditionSymptoms, percentToShow, baseVitals, currentVitals, symptomRegistry) {
  const selectedSymptoms = [];
  const hiddenSymptoms = [];
  const omittedSymptoms = [];

  // Make a copy of the symptoms array and shuffle it
  const symptoms = [...conditionSymptoms];
  shuffleArray(symptoms);

  for (const symptom of symptoms) {
    // If we already have enough symptoms, don't use them
    if ((selectedSymptoms.length + hiddenSymptoms.length + omittedSymptoms.length) >=
        conditionSymptoms.length * percentToShow) {
      omittedSymptoms.push(symptom);
      continue;
    }

    // Check for conflicts: if this symptom affects a vital already modified
    const vitalEffects = symptomRegistry[symptom].vitalEffects;
    let hasConflict = false;

    for (const [vital_affected] of Object.entries(vitalEffects)) {
      if (currentVitals[vital_affected] !== baseVitals[vital_affected]) {
        hasConflict = true;
        break;
      }
    }

    if (hasConflict) {
      omittedSymptoms.push(symptom);
      continue;
    }

    // If symptom affects vitals, add to hidden symptoms (its effects will show in vitals)
    if (Object.keys(vitalEffects).length > 0) {
      hiddenSymptoms.push(symptom);
    } else {
      // Otherwise it's a visible symptom
      selectedSymptoms.push(symptom);
    }
  }

  return { selectedSymptoms, hiddenSymptoms, omittedSymptoms };
}

/**
 * Apply vital effects from a single symptom to patient vitals
 * @param {Object} patientVitals - Patient vital signs object
 * @param {string} symptom - Symptom name
 * @param {Object} symptomRegistry - Registry of symptoms
 * @returns {Object} - Modified vitals object
 */
function applySymptomEffects(patientVitals, symptom, symptomRegistry) {
  const vitals = structuredClone(patientVitals);
  const vitalEffects = symptomRegistry[symptom].vitalEffects;

  for (const [vital_affected, how] of Object.entries(vitalEffects)) {
    if (typeof how === 'string') {
      vitals[vital_affected] = how;  // text values replace the current value
    } else {
      vitals[vital_affected] *= how;  // numeric values multiply
      vitals[vital_affected] = Math.round(vitals[vital_affected]);
    }
  }

  return vitals;
}
