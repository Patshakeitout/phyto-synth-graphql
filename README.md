# PhytoSynth GraphQL (TypeScript)

A tiny, well-typed GraphQL API that models plant-derived **ingredients**, their **extracts**, and simple **blends** with a computed `suitabilityScore`. It includes a minimal semantic-HTML client to demonstrate queries.

## Features

- **TypeScript** everywhere (server + tiny client)
- **GraphQL Yoga** server with SDL-first schema
- In-memory demo data (swap for DB later)
- Minimal, accessible **semantic HTML** client
- Clean architecture: `schema` / `resolvers` / `data`

## Quickstart

```bash
# 1) install
npm i

# 2) dev server
npm run dev

# 3) open GraphiQL
# http://localhost:4000/graphql

# 4) run the tiny client
npm run client   # serves ./client on http://localhost:5174
