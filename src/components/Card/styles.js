import styled from 'styled-components';
import { FaClock } from 'react-icons/fa'

export const Container = styled.div`
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.2);
`;

export const Join = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 12px;
    margin: 10px;
    margin-left: 2px;
    color: #505050;
    font-weight: 500;
  }
`; 

export const Icon = styled(FaClock)`
  font-size: 12px;
  color: #505050;
  margin: 3px;
`