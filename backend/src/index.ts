import * as path from 'path';

import { nexusPrismaPlugin } from '@generated/nexus-prisma';
import Photon from '@generated/photon';
import { objectType, makeSchema, idArg } from '@prisma/nexus';
import { GraphQLServer } from 'graphql-yoga';

// Expose the full "Query" building block
const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.findOneUser();
    t.crud.findManyUser();
    t.crud.findOneArticle();
    t.crud.findManyArticle();
  }
});

// Customize the "Mutation" building block
const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneArticle();
    t.crud.createOneUser();
  }
});

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.articles();
  }
});
const Article = objectType({
  name: 'Article',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.title();
    t.model.content();
    t.model.author();
  }
});

const photon = new Photon();

const nexusPrisma = nexusPrismaPlugin({
  photon: ctx => photon
});

const schema = makeSchema({
  types: [Query, Mutation, User, Article, nexusPrisma],
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
});

const server = new GraphQLServer({
  schema,
  context: { photon }
});
server.start(() => console.log('Server is running on http://localhost:4000'));
