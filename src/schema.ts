// src/schema.ts:
export const typeDefs = /* GraphQL */ `
  "Base plant ingredient"
  type Ingredient {
    id: ID!
    latinName: String!
    commonName: String!
    tags: [String!]!
    extracts: [Extract!]!
  }

  "An extract of an ingredient with a given solvent"
  type Extract {
    id: ID!
    ingredient: Ingredient!
    solvent: String!
    polarity: Float!
    safetyNote: String
  }

  "A blend composed of multiple extracts"
  type Blend {
    id: ID!
    name: String!
    components: [Extract!]!
    "0..1, heuristically computed based on tags & polarity spread"
    suitabilityScore(desiredTags: [String!]): Float!
    estimatedDermalLimit: Float
  }

  input BlendInput {
    name: String!
    extractIds: [ID!]!
  }

  type Query {
    ingredients(search: String): [Ingredient!]!
    extracts(tag: String): [Extract!]!
    blend(id: ID!): Blend
  }

  type Mutation {
    createBlend(input: BlendInput!): Blend!
  }
`;
