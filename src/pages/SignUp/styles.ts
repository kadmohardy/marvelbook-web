import { FormLabel, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper).attrs({
  elevation: 1,
})`
  display: flex;
  background: #fff;
  padding: 24px 48px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 600px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 12px;
    a {
      margin: 5px;
      color: blue;
      text-decoration: none;
    }
  }

  h1 {
    margin-top: 12px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  min-width: 320px;
  flex-direction: row;

  form {
    margin-top: 24px;
    display: flex;
    flex: 1;

    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Line = styled.div`
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);
`;

export const Footer = styled.div`
  max-width: 360px;

  p {
    font-size: 12px;
  }

  a {
    margin: 5px;
    color: blue;
    text-decoration: none;
  }
`;

export const FormItemLabel = styled(FormLabel)`
  color: rgba(0, 0, 0, 0.85);
  text-transform: none;
  font-weight: bold;
`;
