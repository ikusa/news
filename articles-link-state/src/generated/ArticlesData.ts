/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticlesData
// ====================================================

export interface ArticlesData_findManyArticle_author {
  __typename: "User";
  name: string | null;
}

export interface ArticlesData_findManyArticle {
  __typename: "Article";
  title: string;
  content: string;
  author: ArticlesData_findManyArticle_author;
}

export interface ArticlesData {
  findManyArticle: ArticlesData_findManyArticle[] | null;
}
