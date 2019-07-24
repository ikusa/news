import React from 'react';
import {Text, View} from '../core-ui';
import HeadLine from '../components/HeadLine';

const articles = [
  {
    title: 'Is it Good To Be Smart?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, ... ... ...",
    user: {
      name: 'Bob Marley'
    }
  },
  {
    title: 'Is it Bad To Be Dummy?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ... ... ...",
    user: {
      name: 'Marley Bob'
    }
  }
];

function Articles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Of Articles</Text>
      {articles.map((article, idx) => (
        <HeadLine
          key={idx}
          style={styles.headline}
          article={article}
          onDetailPress={() => console.log('Called')}
        />
      ))}
    </View>
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
