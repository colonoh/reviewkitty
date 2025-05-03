const symptoms = {
  "Nausea": {},
  "Discomfort in the neck": {},
  "Rapid pulse": {"heartRate": 1.5},
  "Pale, cool, clammy skin": {"skinColor": "pale", "skinTemperature": "cool", "skinMoisture": "clammy"},
  "Slow pulse": {"heartRate": .5},
  "Weak pulse": {"heartStrength": "weak", "bloodPressure": "weak radial pulse"},
  "Irregular pulse": {"heartRhythm": "irregular"},
  "Rapid breathing": {"respiratoryRate": 1.5},
  "Shallow breathing": {"respiratoryEffort": "shallow"},
  "Anxiety": {},
  "Restlessness": {},
  "Thirst": {},
  "Fever": {},
  "Headache": {},
  "Muscle aches": {},
  "Vomiting": {},  
  "Difficulty breathing": {"respiratoryEffort": "labored"},
  "A sense of suffocation": {},
  "Rapid and deep breathing": {"respiratoryRate": 1.5, "respiratoryEffort": "deep"},
  "Dizziness": {},
  "Faintness": {},
  "Sweating": {"skinMoisture": "sweaty"},
  "Dry mouth": {},
  "Numbness of the hands": {},
  "Tingling of the hands": {},
  "Numbness of the mouth": {},
  "Tingling of the mouth": {},
  "Hands curl inward and become immobile": {}, // carpopedal spasms
  "Stabbing chest pain": {},
};

const conditions = [
  {
    name: "Angina",
    description: "Pain from diminished blood flow to the heart.",
    symptoms: [
      "Nausea",
      "Discomfort in the neck",
      "Rapid pulse",
      "Pale, cool, clammy skin"
    ],
    treatments: [
      "Reduce anxiety and activity",
      "Administer oxygen",
      "Administer aspirin",
      "Evacuate"
    ],
    evacuationGuidelines: [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ]
  },
  {
    name: "Shock (early stages)",
    description: "The inadequate perfusion of tissue with oxygenated blood, due to a failure of the heart, blood vessels, and/or blood - to deliver oxygenated blood to the tissues.",
    symptoms: [
      "Pale, cool, clammy skin",
      "Rapid pulse",
      "Slow pulse",
      "Weak pulse",
      "Irregular pulse",
      "Rapid breathing",
      "Shallow breathing",
      "Anxiety",
      "Restlessness",
      "Nausea",
      "Thirst"    
    ],
    treatments: [
      "Treat the underlying cause",
      "Maintain ABCs - airway, breathing, circulation",
      "Control bleeding, stabilize fractures",
      "Protect patient temperature within normal limits",
      "Elevate the legs",
      "Consider (giving) fluids"
    ],
    evacuationGuidelines: [
      "TODO",
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Hantavirus",
    description: "Virus that produces a serious respiratory disease passed from the rodent reservoir to humans through inhalation of microscopic particles.",
    symptoms: [
      "Fever",
      "Headache",
      "Muscle aches",
      "Nausea",
      "Vomiting",
      "Difficulty breathing"
    ],
    treatments: [
      "TODO",
    ],
    evacuationGuidelines: [
      "TODO",
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Hyperventilation",
    description: "An increased respiratory rate often caused by an emotional stimulus.",
    symptoms: [
      "Anxiety",
      "A sense of suffocation",
      "Rapid and deep breathing",
      "Rapid pulse",
      "Sweating",
      "Dry mouth",
      "Numbness of the hands",
      "Tingling of the hands",
      "Numbness of the mouth",
      "Tingling of the mouth",
      "Hands curl inward and become immobile",
      "Stabbing chest pain",
    ],
    treatments: [
      "Calm the patient",
      "Slow their breathing",
      "Coach them to slow their breathing",
      "Calm the patient",
    ],
    evacuationGuidelines: [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  }
];
