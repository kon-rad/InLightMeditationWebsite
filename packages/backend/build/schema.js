"use strict";
//* node-graphql/src/schema.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require('apollo-server');
exports.typeDefs = gql `

  type Student {
    id: ID!
    email: String!
    fullName: String!
    dept: String
    enrolled: Boolean
  }

  type Query {
    enrollment: [Student!]
    students: [Student!]!
    student(id: ID!): Student
  }

  type Mutation {
    registerStudent(email: String!, fullName: String!, dept: String): Student!
    enroll(id: ID!): Student
  }
`;
