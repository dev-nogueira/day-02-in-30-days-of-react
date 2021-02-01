import React from 'react';
import Item from '../Item'
import { Container, Items } from './styles';

function Skills() {
  return (
    <Container>
        <h2>SKILLS</h2>
        <Items>
          <Item skill="html"/>
          <Item skill="css"/>
          <Item skill="scss"/>
          <Item skill="javascript"/>
          <Item skill="nodejs"/>
          <Item skill="reactjs"/>
          <Item skill="mongodb"/>
          <Item skill="python"/>
          <Item skill="flask"/>
          <Item skill="django"/>
          <Item skill="react native"/>
          <Item skill="git"/>
          <Item skill="heroku"/>
          <Item skill="flutter"/>
        </Items>
    </Container>
  );
}

export default Skills;