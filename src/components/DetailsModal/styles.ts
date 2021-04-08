import { Avatar, Button, CardActions, Paper, Modal } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Modal).attrs({
  elevation: 0,
})`
  background: #ffffff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.08);
  margin: 10px 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteButton = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
})`
  background: ${props => props.theme.palette.primary.main};
  color: #ffffff;
  border-radius: 8px;
  border: none;
  margin: 10px 0;
  text-transform: none;
`;

export const Content = styled(Paper).attrs({
  disableElevation: true,
})`
  border: 0;
  padding: 24px 24px;
  width: 600px;
`;

export const ExitButton = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
})`
  background: #bfe8e1;
  border: none;
  color: ${props => props.theme.palette.secondary.light};
  border-radius: 8px;
  text-transform: none;
  margin: 10px 0;
`;

export const Image = styled(Avatar)`
  width: 90px;
  height: 90px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const Information = styled.div`
  margin-left: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Actions = styled(CardActions)`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
`;

export const InformationSuperior = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const InformationSuperiorLeft = styled.div`
  display: flex;
  flex: 1;

  align-items: flex-start;
  justify-content: center;
`;
