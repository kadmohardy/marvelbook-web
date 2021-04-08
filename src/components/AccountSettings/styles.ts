import { Button, FormLabel, Paper, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper).attrs({
  elevation: 0,
})`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CancelButton = styled(Button).attrs({
  variant: 'outlined',
})`
  color: ${props => props.theme.palette.primary.main};
  text-transform: none;
  border: none;
  height: 42px;
`;

export const DeleteButton = styled(Button).attrs({
  variant: 'outlined',
})`
  color: red;
  text-transform: none;
  border: none;
  height: 42px;
`;

export const FormItemLabel = styled(FormLabel)`
  color: rgba(0, 0, 0, 0.85);
  text-transform: none;
  font-weight: bold;
  width: 240px;
`;

export const Line = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
  display: flex;
  flex: 1;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const InputText = styled(TextField)`
  width: 360px;
  height: 48px;
  margin-left: 24px;
`;
