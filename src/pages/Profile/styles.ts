import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const Container = styled(Paper).attrs({
  elevation: 0,
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
  height: 100vh;
`;

export const Content = styled(Paper).attrs({
  elevation: 0,
})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ContentLeft = styled(Grid).attrs({
  container: true,
})`
  margin-top: 60px;
  padding: 0 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  div {
    margin-bottom: 24px;
  }
  border-right: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const ContentRight = styled(Box)`
  display: flex;
  flex: 8;
  margin-left: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SideButton = styled(Button)`
  color: #000;
  text-transform: none;
  font-size: 16px;
  font-weight: bold;
  width: 240px;
`;
