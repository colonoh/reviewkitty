const symptoms = {
  "nausea": {},
  "discomfort_in_the_neck": {},
  "rapid_pulse": {"heartRate": -.5},
  "pale_cool_clammy_skin": {},
  "slow_pulse": {},
  "weak_pulse": {},
  "irregular_pulse": {},
  "rapid_breathing": {},
  "shallow_breathing": {},
  "anxiety": {},
  "restlessness": {},
  "nausea": {},
  "thirst": {},

};
const conditions = [
  {
    name: "Angina",
    description: "Pain from diminished blood flow to the heart.",
    symptoms: [
      "nausea",
      "discomfort_in_the_neck",
      "rapid_pulse",
      "pale_cool_clammy_skin"
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
      "pale_cool_clammy_skin",
      "rapid_pulse",
      "slow_pulse",
      "weak_pulse",
      "irregular_pulse",
      "rapid_breathing",
      "shallow_breathing",
      "anxiety",
      "restlessness",
      "nausea",
      "thirst"    
    ],
    treatments: [
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
  }
];
