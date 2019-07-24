import * as React from 'react';

type Props = {
  children: React.ReactNode | string;
  style?: Object;
};

export default function Text(props: Props) {
  let {children, style} = props;
  let mixStyle = {...styles.default, ...style};
  return <span style={mixStyle}>{children}</span>;
}

const styles = {
  default: {
    color: '#002',
    fontSize: 14
  }
};
