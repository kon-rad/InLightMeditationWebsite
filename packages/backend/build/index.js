"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("first typescript app Go!");
// node-graphql/src/index.js
// import { ApolloServer } from 'apollo-server'
// import { typeDefs } from './schema'
// import { resolvers } from './resolvers'
// const port = process.env.PORT || 9090;
// const server = new ApolloServer({ resolvers, typeDefs });
// server.listen({ port }, () => console.log(`GraphQL server runs at: http://localhost:${port}`));
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const Express = __importStar(require("express"));
const type_graphql_1 = require("type-graphql");
const memberResolver_1 = require("./resolvers/memberResolver");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers: [memberResolver_1.MemberResolver],
            emitSchemaFile: true,
        });
        const app = Express();
        const server = new apollo_server_express_1.ApolloServer({
            schema,
        });
        server.applyMiddleware({ app });
        app.listen(4000, () => console.log('Server is running on http://localhost:4000/graphql'));
    });
}
main();
