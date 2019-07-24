import * as React from 'react';
import View from './View';
type Props = {
  style?: Object;
  children: React.ReactNode | string;
};

export default function Card(props: Props) {
  let {children, style} = props;
  let mixStyle = {...styles.default, ...style};
  return <View style={mixStyle}>{children}</View>;
}

const styles = {
  default: {
    margin: 5,
    padding: 5,
    minHeight: 100,
    borderRadius: 5,
    border: 'solid 0.01em rgba(0,0,0,0.55)',
    boxShadow: '2px 2px 1px 1px rgba(0,0,0,0.55)'
  }
};
