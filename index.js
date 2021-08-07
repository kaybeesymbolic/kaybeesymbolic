const {ApolloServer} = require('apollo-server-express')
const dotenv = require('dotenv')
const {typeDefs} = require('./src/schema/typedefs')
const {resolvers} = require('./src/schema/resolvers')
const {context} = require("./src/schema/context")
const connectDb = require("./src/db/connect")
const express = require('express')


const startApolloServer = async ()=> {
    let host = process.env.HOSTNAME
    let port = process.env.PORT
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context,
    });
    await server.start();
  
    const app = express();
  
    // Additional middleware can be mounted at this point to run before Apollo.
    //app.use('*', jwtCheck, requireAuth, checkScope);
  
    // Mount Apollo middleware here.
    server.applyMiddleware({ app, path: '/graphql' });
    await new Promise(resolve => app.listen({ port: port}, resolve));
    console.log(`🚀 Server ready at ${host}:${port}/${server.graphqlPath}`);
    return { server, app };
  }

 connectDb( startApolloServer)