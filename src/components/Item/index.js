import React from 'react';

import { Container } from './styles';

function Item(props) {
  return (
    <Container>
      <h1>{props.skill}</h1>
    </Container>
  );
}

export default Item;