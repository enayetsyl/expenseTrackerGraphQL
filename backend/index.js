import http from 'http';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mergedResolvers from "./resolvers/index.js"
import mergedTypeDef from './typeDefs/index.js'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {connectDB} from './db/connectDB.js'
import passport from 'passport';
import session from 'express-session'
import connectMongo from 'connect-mongodb-session'
import { buildContext } from 'graphql-passport'; 
import { configurePassport } from './passport/passport.config.js';

const app = express();
dotenv.config()
configurePassport()
const httpServer = http.createServer(app);


const MongoDBStore = connectMongo(session)

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions"
})

store.on('Error', (error) => {
  console.log(error)
})

app.use(
  session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
  store: store
})
)

app.use(passport.initialize())
app.use(passport.session())

const server = new ApolloServer({
  typeDefs: mergedTypeDef,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start();

app.use(
  '/graphql',
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    // methods: ['GET', 'POST'],
  }),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({req,res}),
  }),
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB()

console.log(`🚀 Server ready at http://localhost:4000/`);