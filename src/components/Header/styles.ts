import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const HeaderBar = styled(AppBar).attrs({
  elevation: 0,
})``;

export const HeaderToolbar = styled(Toolbar)`
  background: #ffffff;
  box-shadow: 0;
`;

export const Grow = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  font-family: 'Lato', sans-serif;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    flex-direction: row;
    background: transparent;
    border: none;
    text-decoration: none;
    margin: 0 24px;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
      margin-right: 5px;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    background: transparent;
    border: none;
    text-decoration: none;
    margin: 0 24px;

    h5 {
      font-size: 16px;
      font-weight: 400;

      &:hover {
        color: blue;
        cursor: pointer;
      }
    }
  }
`;

export const FavoritesButton = styled(Button)`
  background: ${props => props.theme.palette.primary.main};
  color: #ffffff;
  border-radius: 32px;
  border: 0;
  height: 42px;
  width: 160px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s;
  text-transform: none;
  margin-right: 24px;
`;
