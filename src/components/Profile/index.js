import React from 'react';

import { Container, Icon } from './styles';

function Profile(props) {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <h1>{props.name} <Icon/></h1>
      <h4>{props.work}, <span>{props.city}</span></h4>
    </Container>
  );
}

export default Profile;