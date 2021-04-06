import { Button, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  background: ${props => props.theme.palette.primary.main};
  color: #ffffff;
  height: 42px;
  border-radius: 24px;
  text-transform: none;
`;

export const Loading = styled(CircularProgress).attrs({
  color: 'inherit',
  size: 20,
})`
  margin-right: 5px;
`;
