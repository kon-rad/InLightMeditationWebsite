console.log("first typescript app Go!")

// node-graphql/src/index.js

// import { ApolloServer } from 'apollo-server'
// import { typeDefs } from './schema'
// import { resolvers } from './resolvers'

// const port = process.env.PORT || 9090;

// const server = new ApolloServer({ resolvers, typeDefs });

// server.listen({ port }, () => console.log(`GraphQL server runs at: http://localhost:${port}`));


import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { PrismaClient } from '@prisma/client';
// import { resolvers } from "@generated/type-graphql";
import Express from 'express'
import * as tq from 'type-graphql';

import { MemberResolver } from './resolvers/memberResolver'

const prisma = new PrismaClient()

async function main() {
  const schema = await tq.buildSchema({
    resolvers: [MemberResolver], 
    emitSchemaFile: true,
})

//   const schema = await buildSchema({
//     resolvers: [MemberResolver],
//     emitSchemaFile: true,
//   })

  const app = Express()

  const context = () => {
    return {
      prisma
    }
  }

  const server = new ApolloServer({
    schema,
    context,
  })

  await server.start()

  server.applyMiddleware({ app })

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  )
}

main()