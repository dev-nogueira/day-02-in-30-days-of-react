import { FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    margin: 5px;
    margin-top: 15px;
  }

  h4 {
    font-size: 13px;
    font-weight: 300;
    margin: 5px;
    margin-top: 15px;
  }
`;

export const Icon = styled(FaCheckCircle)`
  color: #2acfcf;
  margin-left: 5px;
`