const {ApolloServer} = require('apollo-server-express')
const dotenv = require('dotenv')
const {typeDefs} = require('./schema/typedefs')
const {resolvers} = require('./schema/resolvers')
const {context} = require("./schema/context")
const connectDb = require("./db/connect")
const express = require('express')
dotenv.config()

const startApolloServer = async ()=> {
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
    await new Promise(resolve => app.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at http://${process.env.HOST}:${process.env.PORT}${server.graphqlPath}`);
    return { server, app };
  }

 connectDb( startApolloServer)