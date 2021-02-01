import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  h2 {
    font-size: 12px;
    display: flex;
    margin: 5px;
  }  
`;

export const Items = styled.div`
  margin-top: 15px;
  max-width: 600px;
  display: flex;
  flex-flow: wrap;
`;