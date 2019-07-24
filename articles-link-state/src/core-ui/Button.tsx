import * as React from 'react';

type Props = {
  children: React.ReactNode | string;
  onPress?: () => void;
  style?: Object;
  type?: 'delete' | 'primary';
};

export default function Button(props: Props) {
  let {children, style, type, onPress} = props;
  let backgroundColor = type && type === 'delete' ? 'red' : '#88F';
  let mixStyle = {...styles.default, ...style, backgroundColor};
  return (
    <button style={mixStyle} onClick={onPress}>
      {children}
    </button>
  );
}

const styles = {
  default: {
    padding: 10,
    margin: 5,
    color: '#FFF',
    minWidth: 50,
    borderRadius: 3,
    backgroundColor: '#88F',
    outline: 'none',
    cursor: 'pointer'
  }
};
