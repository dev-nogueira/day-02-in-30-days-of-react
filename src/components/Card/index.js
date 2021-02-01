import React from 'react';
import { Container, Join, Icon } from './styles';
import Profile from '../Profile'
import Skills from '../Skills'

function Card() {
  return (
  <Container>
      <Profile
        image="https://avatars.githubusercontent.com/u/65539816?v=4"
        name="Gabriel Nogueira"
        work="Junior Developer"
        city="São Paulo"
      />
      <Skills/>
      <Join>
        <Icon/> 
        <h3>Joined on Feb 1, 2021</h3>
      </Join>
    </Container>
  )
}

export default Card;