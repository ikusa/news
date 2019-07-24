import React from 'react';
import {Button, Card, Text, View} from '../core-ui';

type Props = {
  article: {
    title: string;
    content: string;
    user: {
      name: string;
    };
  };
  onDetailPress?: () => void;
  style?: Object;
};

function HeadLine(props: Props) {
  let {article, style, onDetailPress} = props;
  let containerStyle = {...styles.wrapper, ...style};
  return (
    <Card style={containerStyle}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.user.name}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <View style={styles.buttonWrapper}>
        <Button onPress={onDetailPress}>Read Article</Button>
        <Button onPress={onDetailPress} type="delete">
          Delete Article
        </Button>
      </View>
    </Card>
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
    paddingTop: 20
  }
};
export default HeadLine;
