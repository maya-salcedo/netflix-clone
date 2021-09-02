import React from 'react';
import { Container, Inner, Item, SubTitle, Title } from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}></Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronContainer({ children, restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronContainer({ children, restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
