// src/resolvers.ts
import { ingredients, extracts } from "./data.js";

type Blend = {
  id: string;
  name: string;
  componentIds: string[];
};

const blends: Blend[] = []; // TODO: persist later

export const resolvers = {
  Ingredient: {
    extracts: (root: any) => extracts.filter(e => e.ingredientId === root.id),
  },
  Extract: {
    ingredient: (root: any) => ingredients.find(i => i.id === root.ingredientId),
  },
  Blend: {
    components: (root: Blend) => root.componentIds.map(id => extracts.find(e => e.id === id)).filter(Boolean),
    suitabilityScore: (root: Blend, args: { desiredTags?: string[] }) => {
      const comps = root.componentIds.map(id => extracts.find(e => e.id === id)).filter(Boolean) as typeof extracts;
      const compTags = new Set<string>();
      comps.forEach(c => {
        const ing = ingredients.find(i => i.id === c.ingredientId);
        ing?.tags.forEach(t => compTags.add(t));
      });
      const match = (args.desiredTags ?? []).filter(t => compTags.has(t)).length;
      const spread = (() => {
        const vals = comps.map(c => c.polarity);
        const rng = Math.max(...vals) - Math.min(...vals);
        return 1 - Math.abs(0.5 - rng); // silly heuristic
      })();
      return Math.min(1, (match / Math.max(1, (args.desiredTags ?? []).length)) * 0.6 + spread * 0.4);
    },
    estimatedDermalLimit: () => null // TODO: add rule-of-thumb
  },
  Query: {
    ingredients: (_: unknown, args: { search?: string }) => {
      if (!args.search) return ingredients;
      const q = args.search.toLowerCase();
      return ingredients.filter(i =>
        i.commonName.toLowerCase().includes(q) ||
        i.latinName.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q))
      );
    },
    extracts: (_: unknown, args: { tag?: string }) => {
      if (!args.tag) return extracts;
      const tag = args.tag.toLowerCase();
      const ids = new Set(ingredients.filter(i => i.tags.some(t => t.toLowerCase() === tag)).map(i => i.id));
      return extracts.filter(e => ids.has(e.ingredientId));
    },
    blend: (_: unknown, args: { id: string }) => blends.find(b => b.id === args.id)
  },
  Mutation: {
    createBlend: (_: unknown, args: { input: { name: string; extractIds: string[] } }) => {
      // TODO: validation with zod if you like
      const id = `blend-${String(blends.length + 1).padStart(2, "0")}`;
      const b = { id, name: args.input.name, componentIds: args.input.extractIds };
      blends.push(b);
      return b;
    }
  }
};
