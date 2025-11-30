/**
 * Medical Conditions Database
 * Conditions reference symptoms from the symptomRegistry (loaded separately)
 */

const conditions = [
  {
    "id": "hypothermia-mild",
    "name": "Hypothermia (mild)",
    "description": "A cooling of the body's core to a temperature where brain and or muscle function is impaired.",
    "symptoms": [
      "Cold body temperature (between 95\u00b0F and 89.6\u00b0F)",
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
      "Trouble speaking"
    ],
    "treatments": [
      "Find shelter",
      "Replace wet with dry, insulating clothing",
      "Wind and waterproof layers",
      "Exercise is appropriate for mildly hypothermic patients",
      "Insulate the head and neck, hands and feet",
      "Consider a hypothermia wrap",
      "Add head packs/hot water bottles, insulate to prevent burns",
      "Encourage the patient to eat a meal",
      "Give warm, sweet, non-caffeinated, non-alcoholic liquids if the patient can swallow"
    ],
    "evacuationGuidelines": [
      "Evacuate rapidly any patient who does not respond to warming efforts"
    ],
    "references": [
      "https://my.clevelandclinic.org/health/diseases/21164-hypothermia-low-body-temperature",
      "NOLS Wilderness Medicine Field Guide, 7th edition"
    ]
  },
  {
    "id": "angina",
    "name": "Angina",
    "description": "Pain from diminished blood flow to the heart.",
    "symptoms": [
      "Nausea",
      "Discomfort in the neck",
      "Fast heart rate (tachycardia)",
      "Pale, cool, clammy skin"
    ],
    "treatments": [
      "Reduce anxiety and activity",
      "Administer oxygen",
      "Administer aspirin",
      "Evacuate"
    ],
    "evacuationGuidelines": [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ]
  },
  {
    "id": "shock-early",
    "name": "Shock (early stages)",
    "description": "The inadequate perfusion of tissue with oxygenated blood, due to a failure of the heart, blood vessels, and/or blood - to deliver oxygenated blood to the tissues.",
    "symptoms": [
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
    "treatments": [
      "Treat the underlying cause",
      "Maintain ABCs - airway, breathing, circulation",
      "Control bleeding, stabilize fractures",
      "Protect patient temperature within normal limits",
      "Elevate the legs",
      "Consider (giving) fluids"
    ],
    "evacuationGuidelines": [
      "Evacuate any patient whose vital signs do not stabilize or improve over time.",
      "Evacuate rapidly any patient with decreased mental status or deteriorating vital signs."
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    "id": "hantavirus",
    "name": "Hantavirus",
    "description": "Virus that produces a serious respiratory disease passed from the rodent reservoir to humans through inhalation of microscopic particles.",
    "symptoms": [
      "Fever",
      "Headache",
      "Muscle aches",
      "Nausea",
      "Vomiting",
      "Difficulty breathing"
    ],
    "treatments": [
      "TODO"
    ],
    "evacuationGuidelines": [
      "TODO"
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    "id": "hyperventilation",
    "name": "Hyperventilation",
    "description": "An increased respiratory rate often caused by an emotional stimulus.",
    "symptoms": [
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
      "Stabbing chest pain"
    ],
    "treatments": [
      "Calm the patient",
      "Slow their breathing",
      "Coach them to slow their breathing"
    ],
    "evacuationGuidelines": [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    "id": "asthma-mild-moderate",
    "name": "Asthma (mild to moderate)",
    "description": "Characterized by narrowing of the airways, increased mucus production, and bronchial edema (swelling or inflammation of the bronchial tubes).",
    "symptoms": [
      "Wheezing",
      "Coughing",
      "Chest tightness",
      "Shortness of breath (dyspnea)",
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
      "Increased mucus production"
    ],
    "treatments": [
      "Have patient self-administer medication (bronchodilator) with an inhaler",
      "Help the patient relax",
      "Warm, humidified air, can help relax airways and clear mucus"
    ],
    "evacuationGuidelines": [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes."
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    "id": "asthma-severe",
    "name": "Asthma (severe)",
    "description": "Characterized by narrowing of the airways, increased mucus production, and bronchial edema (swelling or inflammation of the bronchial tubes).",
    "symptoms": [
      "Sleepiness",
      "Coughing",
      "Chest tightness",
      "Shortness of breath (dyspnea)",
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
      "Increased mucus production",
      "Sleepiness",
      "Hunched over",
      "Diminished lung sounds",
      "Can only speak in one or two word clusters",
      "Cyanosis"
    ],
    "treatments": [
      "Have patient self-administer medication (bronchodilator) with an inhaler",
      "Help the patient relax",
      "Warm, humidified air, can help relax airways and clear mucus",
      "Epinephrine",
      "Steroids"
    ],
    "evacuationGuidelines": [
      "Evacuate any patient with chest pain that is not clearly musculoskeletal, pulmonary, or gastrointestinal.",
      "Expedite evacuation for any patient with chest pain that does not relieve within 20 minutes.",
      "Expedite evacuation if a severe asthma attack is unresponsive to medications."
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  },
  {
    "id": "pulmonary-embolism",
    "name": "Pulmonary Embolism",
    "description": "Occurs when a clot (usually from a leg vein) breaks loose and lodges in the blood vessels of the lung.",
    "symptoms": [
      "Sudden shortness of breath (dyspnea)",
      "Pain with inspiration",
      "Anxiety",
      "Restlessness",
      "Rapid breathing (tachypnea)",
      "Fast heart rate (tachycardia)",
      "Pale, cool, clammy skin",
      "Labored breathing"
    ],
    "treatments": [
      "Administer oxygen if available"
    ],
    "evacuationGuidelines": [
      "Can't be treated in the field",
      "Evacuate promptly"
    ],
    "references": [
      "NOLS Wilderness Medicine, 6th edition"
    ]
  }
];
