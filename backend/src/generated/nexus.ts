/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { core } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ArticleCreateInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutAuthorInput'] | null; // UserCreateOneWithoutAuthorInput
    content: string; // String!
    id?: string | null; // ID
    title: string; // String!
  }
  ArticleCreateManyWithoutArticlesInput: { // input type
    connect?: NexusGenInputs['ArticleWhereUniqueInput'][] | null; // [ArticleWhereUniqueInput!]
    create?: NexusGenInputs['ArticleCreateWithoutAuthorInput'][] | null; // [ArticleCreateWithoutAuthorInput!]
  }
  ArticleCreateWithoutAuthorInput: { // input type
    content: string; // String!
    id?: string | null; // ID
    title: string; // String!
  }
  ArticleWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    articles?: NexusGenInputs['ArticleCreateManyWithoutArticlesInput'] | null; // ArticleCreateManyWithoutArticlesInput
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
  }
  UserCreateOneWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutArticlesInput'] | null; // UserCreateWithoutArticlesInput
  }
  UserCreateWithoutArticlesInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Article: { // root type
    content: string; // String!
    createdAt: any; // DateTime!
    id: string; // ID!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name?: string | null; // String
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ArticleCreateInput: NexusGenInputs['ArticleCreateInput'];
  ArticleCreateManyWithoutArticlesInput: NexusGenInputs['ArticleCreateManyWithoutArticlesInput'];
  ArticleCreateWithoutAuthorInput: NexusGenInputs['ArticleCreateWithoutAuthorInput'];
  ArticleWhereUniqueInput: NexusGenInputs['ArticleWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateOneWithoutAuthorInput: NexusGenInputs['UserCreateOneWithoutAuthorInput'];
  UserCreateWithoutArticlesInput: NexusGenInputs['UserCreateWithoutArticlesInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Article: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string; // String!
    createdAt: any; // DateTime!
    id: string; // ID!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createOneArticle: NexusGenRootTypes['Article']; // Article!
    createOneUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    findManyArticle: NexusGenRootTypes['Article'][] | null; // [Article!]
    findManyUser: NexusGenRootTypes['User'][] | null; // [User!]
    findOneArticle: NexusGenRootTypes['Article'] | null; // Article
    findOneUser: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    articles: NexusGenRootTypes['Article'][] | null; // [Article!]
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneArticle: { // args
      data: NexusGenInputs['ArticleCreateInput']; // ArticleCreateInput!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    findManyArticle: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    findManyUser: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    findOneArticle: { // args
      where: NexusGenInputs['ArticleWhereUniqueInput']; // ArticleWhereUniqueInput!
    }
    findOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  User: {
    articles: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Article" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = "ArticleCreateInput" | "ArticleCreateManyWithoutArticlesInput" | "ArticleCreateWithoutAuthorInput" | "ArticleWhereUniqueInput" | "UserCreateInput" | "UserCreateOneWithoutAuthorInput" | "UserCreateWithoutArticlesInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}