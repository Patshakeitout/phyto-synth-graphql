// src/server.ts
import * as http from "http";
import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/graphql"
});

const server = http.createServer(yoga);
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

server.listen(PORT, () => {
  console.log(`PhytoSynth GraphQL running → http://localhost:${PORT}/graphql`);
});

