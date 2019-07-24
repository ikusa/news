/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleData
// ====================================================

export interface ArticleData_findOneArticle_author {
  __typename: "User";
  name: string | null;
}

export interface ArticleData_findOneArticle {
  __typename: "Article";
  id: string;
  title: string;
  content: string;
  author: ArticleData_findOneArticle_author;
}

export interface ArticleData {
  findOneArticle: ArticleData_findOneArticle | null;
}

export interface ArticleDataVariables {
  id?: string | null;
}
