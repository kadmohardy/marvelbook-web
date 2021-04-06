import React from 'react';
import StarsIcon from '@material-ui/icons/Stars';
import ProfileMenuButton from '../ProfileMenuButton';
import {
  Container,
  Grow,
  HeaderBar,
  HeaderLeft,
  HeaderRight,
  HeaderToolbar,
  SignUpButton,
  Title,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderBar>
        <HeaderToolbar>
          <HeaderLeft>
            <a href="/">
              <Title>MarvelBook</Title>
            </a>
          </HeaderLeft>
          <Grow />
          <HeaderRight>
            <ProfileMenuButton username="Kadmo" />
            <SignUpButton
              startIcon={<StarsIcon />}
              onClick={() => console.log('tste')}
              type="submit"
            >
              Favoritos
            </SignUpButton>
          </HeaderRight>
        </HeaderToolbar>
      </HeaderBar>
    </Container>
  );
};

export default Header;
