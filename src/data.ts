// src/data.ts

export type Ingredient = {
  id: string;
  latinName: string;
  commonName: string;
  tags: string[];
};

export type Extract = {
  id: string;
  ingredientId: string;
  solvent: "ethanol" | "glycerol" | "water" | "co2";
  polarity: number; // 0..1
  safetyNote?: string;
};

export const ingredients: Ingredient[] = [
  { id: "ing-1", latinName: "Chamomilla recutita", commonName: "Chamomile", tags: ["soothing", "calming"] },
  { id: "ing-2", latinName: "Calendula officinalis", commonName: "Calendula", tags: ["restorative", "balancing"] },
  { id: "ing-3", latinName: "Camellia sinensis", commonName: "Green Tea", tags: ["antioxidant", "stimulating"] },
  { id: "ing-4", latinName: "Lavandula angustifolia", commonName: "Lavender", tags: ["calming", "aromatic"] },
  { id: "ing-5", latinName: "Rosmarinus officinalis", commonName: "Rosemary", tags: ["circulatory", "energizing"] },
  { id: "ing-6", latinName: "Mentha piperita", commonName: "Peppermint", tags: ["cooling", "refreshing"] },
  { id: "ing-7", latinName: "Aloe vera", commonName: "Aloe Vera", tags: ["hydrating", "soothing"] },
  { id: "ing-8", latinName: "Hypericum perforatum", commonName: "St. John’s Wort", tags: ["restorative", "protective"] },
  { id: "ing-9", latinName: "Citrus limon", commonName: "Lemon", tags: ["toning", "refreshing"] },
  { id: "ing-10", latinName: "Citrus sinensis", commonName: "Sweet Orange", tags: ["uplifting", "aromatic"] },
  { id: "ing-11", latinName: "Echinacea purpurea", commonName: "Echinacea", tags: ["immune-support", "restorative"] },
  { id: "ing-12", latinName: "Salvia officinalis", commonName: "Sage", tags: ["antimicrobial", "balancing"] },
  { id: "ing-13", latinName: "Thymus vulgaris", commonName: "Thyme", tags: ["antimicrobial", "energizing"] },
  { id: "ing-14", latinName: "Melissa officinalis", commonName: "Lemon Balm", tags: ["calming", "balancing"] },
  { id: "ing-15", latinName: "Zingiber officinale", commonName: "Ginger", tags: ["warming", "circulatory"] },
  { id: "ing-16", latinName: "Curcuma longa", commonName: "Turmeric", tags: ["antioxidant", "restorative"] },
  { id: "ing-17", latinName: "Ginkgo biloba", commonName: "Ginkgo", tags: ["circulatory", "cognitive"] },
  { id: "ing-18", latinName: "Sambucus nigra", commonName: "Elderberry", tags: ["immune-support", "antioxidant"] },
  { id: "ing-19", latinName: "Ocimum basilicum", commonName: "Basil", tags: ["aromatic", "balancing"] },
  { id: "ing-20", latinName: "Urtica dioica", commonName: "Nettle", tags: ["restorative", "mineral-rich"] }
];

export const extracts: Extract[] = [
  { id: "ext-1", ingredientId: "ing-1", solvent: "glycerol", polarity: 0.7, safetyNote: "Avoid eye contact" },
  { id: "ext-2", ingredientId: "ing-2", solvent: "ethanol", polarity: 0.5 },
  { id: "ext-3", ingredientId: "ing-3", solvent: "water", polarity: 0.9 },
  { id: "ext-4", ingredientId: "ing-4", solvent: "ethanol", polarity: 0.6 },
  { id: "ext-5", ingredientId: "ing-5", solvent: "co2", polarity: 0.4 },
  { id: "ext-6", ingredientId: "ing-6", solvent: "water", polarity: 0.8, safetyNote: "May irritate sensitive skin" },
  { id: "ext-7", ingredientId: "ing-7", solvent: "glycerol", polarity: 0.95 },
  { id: "ext-8", ingredientId: "ing-8", solvent: "ethanol", polarity: 0.55 },
  { id: "ext-9", ingredientId: "ing-9", solvent: "co2", polarity: 0.45, safetyNote: "Phototoxic in high concentration" },
  { id: "ext-10", ingredientId: "ing-10", solvent: "ethanol", polarity: 0.5 },
  { id: "ext-11", ingredientId: "ing-11", solvent: "water", polarity: 0.85 },
  { id: "ext-12", ingredientId: "ing-12", solvent: "ethanol", polarity: 0.6 },
  { id: "ext-13", ingredientId: "ing-13", solvent: "co2", polarity: 0.35 },
  { id: "ext-14", ingredientId: "ing-14", solvent: "glycerol", polarity: 0.75 },
  { id: "ext-15", ingredientId: "ing-15", solvent: "ethanol", polarity: 0.5, safetyNote: "Warming sensation on skin" },
  { id: "ext-16", ingredientId: "ing-16", solvent: "water", polarity: 0.65 },
  { id: "ext-17", ingredientId: "ing-17", solvent: "ethanol", polarity: 0.55 },
  { id: "ext-18", ingredientId: "ing-18", solvent: "glycerol", polarity: 0.8 },
  { id: "ext-19", ingredientId: "ing-19", solvent: "co2", polarity: 0.5 },
  { id: "ext-20", ingredientId: "ing-20", solvent: "water", polarity: 0.7 }
];


