import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Button, Card, Text, View } from '../core-ui';
import { ArticleData, ArticleDataVariables } from '../generated/ArticleData';
// import { Article } from '../types/article.type';

type Props = {
  id: string;
  onDetailPress?: () => void;
  style?: Object;
};

let GET_ARTICLE = gql`
  query ArticleData($id: ID) {
    findOneArticle(where: { id: $id }) {
      id
      title
      content
      author {
        name
      }
    }
  }
`;
function HeadLine(props: Props) {
  let { id, style, onDetailPress } = props;
  let containerStyle = { ...styles.wrapper, ...style };
  return (
    <Query<ArticleData, ArticleDataVariables>
      query={GET_ARTICLE}
      variables={{ id }}
    >
      {({ data, loading }) => {
        if (!loading) {
          console.log('my data ', data);
        }
        if (loading || !data || !data.findOneArticle) {
          return null;
        }
        let article = data.findOneArticle;
        return (
          <Card style={containerStyle}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>{article.author.name}</Text>
            <Text style={styles.content}>{article.content}</Text>
            <View style={styles.buttonWrapper}>
              <Button onPress={onDetailPress}>Read Article</Button>
              <Button onPress={onDetailPress} type="delete">
                Delete Article
              </Button>
            </View>
          </Card>
        );
      }}
    </Query>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    maxWidth: 700,
    backgroundColor: 'rgba(250,205,250, 0.2)',
    flexDirection: 'column'
  },
  title: {
    fontSize: 28,
    color: '#004'
  },
  author: {
    fontSize: 12,
    color: '#DA0',
    paddingBottom: 20
  },
  content: {
    fontSize: 14
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    backgroundColor: 'transperent'
  }
};
export default HeadLine;
