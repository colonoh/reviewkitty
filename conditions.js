const symptoms = {
  "nausea": {},
  "discomfort in the neck": {},
  "rapid pulse": {"heartRate": 1.5},
  "pale, cool, clammy skin": {"skinColor": "pale", "skinTemperature": "cool", "skinMoisture": "clammy"},
  "slow pulse": {"heartRate": .5},
  "weak pulse": {"heartStrength": "weak", "bloodPressure": "weak radial pulse"},
  "irregular pulse": {"heartRhythm": "irregular"},
  "rapid breathing": {"respiratoryRate": 1.5},
  "shallow breathing": {"respiratoryEffort": "shallow"},
  "anxiety": {},
  "restlessness": {},
  "thirst": {},
  "fever": {},
  "headache": {},
  "muscle aches": {},
  "vomiting": {},  
  "difficulty breathing": {"respiratoryEffort": "labored"},
};

const conditions = [
  {
    name: "Angina",
    description: "Pain from diminished blood flow to the heart.",
    symptoms: [
      "nausea",
      "discomfort in the neck",
      "rapid pulse",
      "pale, cool, clammy skin"
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
    description: "The inadequate perfusion of tissue with oxygenated blood, due to a failure of any or all of three basic components of the circulatory system - heart, blood vessels, and blood - to deliver oxygenated blood to the tissues.",
    symptoms: [
      "pale, cool, clammy skin",
      "rapid pulse",
      "slow pulse",
      "weak pulse",
      "irregular pulse",
      "rapid breathing",
      "shallow breathing",
      "anxiety",
      "restlessness",
      "nausea",
      "thirst"    
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
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Hantavirus",
    description: "Virus that produces a serious respiratory disease passed from the rodent reservoir to humans through inhalation of microscopic particles.",
    symptoms: [
      "fever",
      "headache",
      "muscle aches",
      "nausea",
      "vomiting",
      "difficulty breathing"    
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
  }
];
