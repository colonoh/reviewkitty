const symptoms = {
  "A sense of suffocation": {},
  "Anxiety": {},
  "Can only speak in one or two word clusters": {},
  "Chest tightness": {},
  "Clumsiness, slow movements and reactions": {},
  "Cold body temperature (between 95°F and 89.6°F)": {"bodyTemperature": 0.95},
  "Confusion and poor judgment/loss of awareness": {},
  "Coughing": {},
  "Cyanosis": {"skinColor": "blue"},
  "Difficulty breathing": {"respiratoryEffort": "labored"},
  "Diminished lung sounds": {},
  "Discomfort in the neck": {},
  "Dizziness": {},
  "Dry mouth": {},
  "Excessive urination": {},
  "Exhaustion": {},
  "Faintness": {},
  "Fast heart rate (tachycardia)": {"heartRate": 1.7},  // should be >100, so 60*17=102
  "Fever": {},
  "Hands curl inward and become immobile (carpopedal spasms)": {},
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
  "Pale skin color": {"skinColor": "pale"},
  "Pale, cool, clammy skin": {"skinColor": "pale", "skinTemperature": "cool", "skinMoisture": "clammy"},
  "Rapid and deep breathing": {"respiratoryRate": 1.5, "respiratoryEffort": "deep"},
  "Rapid breathing (tachypnea)": {"respiratoryRate": 2.1}, // should be >25, 12*2.1=25.2
  "Restlessness": {},
  "Shallow breathing": {"respiratoryEffort": "shallow"},
  "Shivering and chattering teeth": {},
  "Shortness of breath": {"respiratoryRate": 1.5, "respiratoryRhythm": "irregular", "respiratoryEffort": "labored"}, // dyspnea
  "Sleepiness": {},
  "Slow pulse": {"heartRate": .5},
  "Stabbing chest pain": {},
  "Sudden shortness of breath": {"respiratoryRate": 1.5, "respiratoryRhythm": "irregular", "respiratoryEffort": "labored"}, // dyspnea
  "Sweating": {"skinMoisture": "sweaty"},
  "Thirst": {},
  "Tingling of the hands": {},
  "Tingling of the mouth": {},
  "Trouble speaking": {},
  "Vomiting": {},  
  "Weak pulse": {"heartStrength": "weak", "bloodPressure": "weak radial pulse"},
  "Wheezing": {},
};

const conditions = [
{
    name: "Hypothermia (mild)",
    description: "A cooling of the body's core to a temperature where brain and or muscle function is impaired.",
    symptoms: [
    "Cold body temperature (between 95°F and 89.6°F)",
    "Shivering and chattering teeth",
    "Exhaustion",
    "Clumsiness, slow movements and reactions",
    "Sleepiness",
    "Weak pulse",
    "Fast heart rate (tachycardia)",
    "Rapid breathing (tachypnea)",
    "Pale skin color",
    "Confusion and poor judgment/loss of awareness",
    "Excessive urination",
    "Trouble speaking",
    ],
    treatments: [
      "Find shelter",
      "Replace wet with dry, insulating clothing",
      "Wind and waterproof layers",
      "Exercise is appropriate for mildly hypothermic patients",
      "Insulate the head and neck, hands and feet",
      "Consider a hypothermia wrap",
      "Add head packs/hot water bottles, insulate to prevent burns",
      "Encourage the patient to eat a meal",
      "Give warm, sweet, non-caffeinated, non-alcoholic liquids if the patient can swallow",

    ],
    evacuationGuidelines: [
      "Evacuate rapidly any patient who does not respond to warming efforts",
    ],
    references: [
      "https://my.clevelandclinic.org/health/diseases/21164-hypothermia-low-body-temperature",
      "NOLS Wilderness Medicine Field Guide, 7th edition"
    ]
  },
  {
    name: "Angina",
    description: "Pain from diminished blood flow to the heart.",
    symptoms: [
      "Nausea",
      "Discomfort in the neck",
      "Fast heart rate (tachycardia)",
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
      "Fast heart rate (tachycardia)",
      "Slow pulse",
      "Weak pulse",
      "Irregular pulse",
      "Rapid breathing (tachypnea)",
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
      "Fast heart rate (tachycardia)",
      "Sweating",
      "Dry mouth",
      "Numbness of the hands",
      "Tingling of the hands",
      "Numbness of the mouth",
      "Tingling of the mouth",
      "Hands curl inward and become immobile (carpopedal spasms)",
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
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
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
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
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
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
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

/* TODO
uti
testicular torsion
epididymitis
mittelschmerz
dysmenorrhea
vaginitis
ectopic pregnancy
spontaneous pneumothorax
*/
