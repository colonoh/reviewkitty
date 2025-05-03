const symptoms = {
  "A sense of suffocation": {},
  "Anxiety": {},
  "Can only speak in one or two word clusters": {},
  "Chest tightness": {},
  "Coughing": {},
  "Cyanosis": {"skinColor": "blue"},
  "Difficulty breathing": {"respiratoryEffort": "labored"},
  "Diminished lung sounds": {},
  "Discomfort in the neck": {},
  "Dizziness": {},
  "Dry mouth": {},
  "Faintness": {},
  "Fever": {},
  "Hands curl inward and become immobile": {}, // carpopedal spasms
  "Headache": {},
  "Hunched over": {},
  "Increased muscus production": {},
  "Irregular pulse": {"heartRhythm": "irregular"},
  "Labored breathing": {"respiratoryEffort": "labored"},
  "Muscle aches": {},
  "Nausea": {},
  "Numbness of the hands": {},
  "Numbness of the mouth": {},
  "Pain with inspiration": {},
  "Pale, cool, clammy skin": {"skinColor": "pale", "skinTemperature": "cool", "skinMoisture": "clammy"},
  "Rapid and deep breathing": {"respiratoryRate": 1.5, "respiratoryEffort": "deep"},
  "Rapid breathing": {"respiratoryRate": 1.5},
  "Rapid pulse": {"heartRate": 1.5},
  "Restlessness": {},
  "Shallow breathing": {"respiratoryEffort": "shallow"},
  "Shortness of breath": {"respiratoryRate": 1.5, "respiratoryRhythm": "irregular", "respiratoryEffort": "labored"}, // dyspnea
  "Sleepiness": {},
  "Slow pulse": {"heartRate": .5},
  "Stabbing chest pain": {},
  "Sudden shortness of breath": {"respiratoryRate": 1.5, "respiratoryRhythm": "irregular", "respiratoryEffort": "labored"}, // dyspnea
  "Sweating": {"skinMoisture": "sweaty"},
  "Thirst": {},
  "Tingling of the hands": {},
  "Tingling of the mouth": {},
  "Vomiting": {},  
  "Weak pulse": {"heartStrength": "weak", "bloodPressure": "weak radial pulse"},
  "Wheezing": {},
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
      "Evacuate any patient whose vital signs do not stabilize or improve over time.",
      "Evacuate rapidly any patient with decreased mental status or deteriorating vital signs.",
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
    ],
    evacuationGuidelines: [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Asthma (mild to moderate)",
    description: "Characterized by narrowing of the airways, increased mucus production, and bronchial edema (swelling or inflammation of the bronchial tubes).",
    symptoms: [
      "Wheezing",
      "Coughing",
      "Chest tightness",
      "Shortness of breath",
      "Rapid breathing",
      "Rapid pulse",
      "Increased muscus production"
    ],
    treatments: [
      "Have patient self-administer medication (bronchodilator) with an inhaler",
      "Help the patient relax",
      "Warm, humidified air, can help relax airways and clear mucus",
    ],
    evacuationGuidelines: [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Asthma (severe)",
    description: "Characterized by narrowing of the airways, increased mucus production, and bronchial edema (swelling or inflammation of the bronchial tubes).",
    symptoms: [
      "Sleepiness",
      "Coughing",
      "Chest tightness",
      "Shortness of breath",
      "Rapid breathing",
      "Rapid pulse",
      "Increased muscus production",
      "Sleepiness",
      "Hunched over",
      "Diminished lung sounds",
      "Can only speak in one or two word clusters",
      "Cyanosis",

    ],
    treatments: [
      "Have patient self-administer medication (bronchodilator) with an inhaler",
      "Help the patient relax",
      "Warm, humidified air, can help relax airways and clear mucus",
      "Epinephrine",
      "Steroids"
    ],
    evacuationGuidelines: [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes.",
      "Expedite evacuation if a severe asthma attack is unresponsive to medications."
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    name: "Pulmonary Embolism",
    description: "Occurs when a clot (usually from a leg vein) breaks loose and lodges in the blood vessels of the lung.",
    symptoms: [
      "Sudden shortness of breath",
      "Pain with inspiration",
      "Anxiety",
      "Restlessness",
      "Rapid breathing",
      "Rapid pulse",
      "Pale, cool, clammy skin",
      "Labored breathing",
    ],
    treatments: [
      "Administer oxygen if available",
    ],
    evacuationGuidelines: [
      "Can't be treated in the field",
      "Evacuate promptly",
    ],
    references: [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  }
];
