/**
 * Symptom Registry
 * Defines all medical symptoms and their vital sign effects
 */

const symptomRegistry = {
  "A sense of suffocation": {
    vitalEffects: {}
  },
  "Anxiety": {
    vitalEffects: {}
  },
  "Can only speak in one or two word clusters": {
    vitalEffects: {}
  },
  "Chest tightness": {
    vitalEffects: {}
  },
  "Clumsiness, slow movements and reactions": {
    vitalEffects: {}
  },
  "Cold body temperature (between 95°F and 89.6°F)": {
    vitalEffects: {
      "bodyTemperature": 0.95
    }
  },
  "Confusion and poor judgment/loss of awareness": {
    vitalEffects: {}
  },
  "Coughing": {
    vitalEffects: {}
  },
  "Cyanosis": {
    vitalEffects: {
      "skinColor": "blue"
    }
  },
  "Difficulty breathing": {
    vitalEffects: {
      "respiratoryEffort": "labored"
    }
  },
  "Diminished lung sounds": {
    vitalEffects: {}
  },
  "Discomfort in the neck": {
    vitalEffects: {}
  },
  "Dizziness": {
    vitalEffects: {}
  },
  "Dry mouth": {
    vitalEffects: {}
  },
  "Excessive urination": {
    vitalEffects: {}
  },
  "Exhaustion": {
    vitalEffects: {}
  },
  "Faintness": {
    vitalEffects: {}
  },
  "Fast heart rate (tachycardia)": {
    vitalEffects: {
      "heartRate": 1.7
    }
  },
  "Fever": {
    vitalEffects: {}
  },
  "Hands curl inward and become immobile (carpopedal spasms)": {
    vitalEffects: {}
  },
  "Headache": {
    vitalEffects: {}
  },
  "Hunched over": {
    vitalEffects: {}
  },
  "Increased mucus production": {
    vitalEffects: {}
  },
  "Irregular pulse": {
    vitalEffects: {
      "heartRhythm": "irregular"
    }
  },
  "Labored breathing": {
    vitalEffects: {
      "respiratoryEffort": "labored"
    }
  },
  "Muscle aches": {
    vitalEffects: {}
  },
  "Nausea": {
    vitalEffects: {}
  },
  "Numbness of the hands": {
    vitalEffects: {}
  },
  "Numbness of the mouth": {
    vitalEffects: {}
  },
  "Pain with inspiration": {
    vitalEffects: {}
  },
  "Pale skin color": {
    vitalEffects: {
      "skinColor": "pale"
    }
  },
  "Pale, cool, clammy skin": {
    vitalEffects: {
      "skinColor": "pale",
      "skinTemperature": "cool",
      "skinMoisture": "clammy"
    }
  },
  "Rapid and deep breathing": {
    vitalEffects: {
      "respiratoryRate": 1.5,
      "respiratoryEffort": "deep"
    }
  },
  "Rapid breathing (tachypnea)": {
    vitalEffects: {
      "respiratoryRate": 2.1
    }
  },
  "Restlessness": {
    vitalEffects: {}
  },
  "Shallow breathing": {
    vitalEffects: {
      "respiratoryEffort": "shallow"
    }
  },
  "Shivering and chattering teeth": {
    vitalEffects: {}
  },
  "Shortness of breath (dyspnea)": {
    vitalEffects: {
      "respiratoryRate": 1.5,
      "respiratoryRhythm": "irregular",
      "respiratoryEffort": "labored"
    }
  },
  "Sleepiness": {
    vitalEffects: {}
  },
  "Slow pulse": {
    vitalEffects: {
      "heartRate": 0.5
    }
  },
  "Stabbing chest pain": {
    vitalEffects: {}
  },
  "Sudden shortness of breath (dyspnea)": {
    vitalEffects: {
      "respiratoryRate": 1.5,
      "respiratoryRhythm": "irregular",
      "respiratoryEffort": "labored"
    }
  },
  "Sweating": {
    vitalEffects: {
      "skinMoisture": "sweaty"
    }
  },
  "Thirst": {
    vitalEffects: {}
  },
  "Tingling of the hands": {
    vitalEffects: {}
  },
  "Tingling of the mouth": {
    vitalEffects: {}
  },
  "Trouble speaking": {
    vitalEffects: {}
  },
  "Vomiting": {
    vitalEffects: {}
  },
  "Weak pulse": {
    vitalEffects: {
      "heartStrength": "weak",
      "bloodPressure": "weak radial pulse"
    }
  },
  "Wheezing": {
    vitalEffects: {}
  }
};
