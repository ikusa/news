import * as React from 'react';

type Props = {
  children: React.ReactNode | string;
  style?: Object;
};

export default function View(props: Props) {
  let {children, style} = props;
  let mixStyle = {...styles.default, ...style};
  return <div style={mixStyle}>{children}</div>;
}

const styles = {
  default: {
    backgroundColor: '#FFF'
  }
};
