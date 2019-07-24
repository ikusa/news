import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Text, View } from '../core-ui';
import HeadLine from '../components/HeadLine';
import { Article } from '../types/article.type';

let GET_ARTICLES = gql`
  query GET_ARTICLES {
    findManyArticle {
      title
      content
      author {
        name
      }
    }
  }
`;
function Articles() {
  return (
    <Query<{ findManyArticle: Array<Article> }> query={GET_ARTICLES}>
      {({ data, loading }) => {
        if (loading || !data) {
          return null;
        }
        return (
          <View style={styles.container}>
            <Text style={styles.title}>List Of Articles</Text>
            {data.findManyArticle.map((article, idx) => (
              <HeadLine
                key={idx}
                style={styles.headline}
                article={article}
                onDetailPress={() => console.log('Called')}
              />
            ))}
          </View>
        );
      }}
    </Query>
  );
}

const styles = {
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    margin: 10
  },
  headline: {
    padding: 10,
    marginTop: 20
  }
};
export default Articles;
