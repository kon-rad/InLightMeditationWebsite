import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { createContext } from './graphql/context';
import { resolvers } from './graphql/resolvers'
import { schema } from './graphql/schema';
import Express from 'express'


async function main() {

  const app = Express()

  // const context = () => {
  //   return {
  //     prisma
  //   }
  // }
  const apolloServer = new ApolloServer({
    schema,
    resolvers,
    context: createContext
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  )
}

main()