import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ProfileMenuButton from '../ProfileMenuButton';
import { UserState } from '../../store/modules/user/types';
import { AuthenticationState } from '../../store/modules/auth/types';

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
import RootState from '../../store/modules/rootState';

const Header: React.FC = () => {
  const { signed } = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  const { profile } = useSelector<RootState>(state => state.user) as UserState;

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
            {signed && (
              <>
                <ProfileMenuButton username={profile.fullname || 'Perfil'} />
                <SignUpButton
                  startIcon={<FavoriteIcon />}
                  onClick={() => console.log('tste')}
                  type="submit"
                >
                  Favoritos
                </SignUpButton>
              </>
            )}
            {!signed && (
              <>
                <Link to="/signup">Criar Conta</Link>
                <Link to="/signin">Entrar</Link>
              </>
            )}
          </HeaderRight>
        </HeaderToolbar>
      </HeaderBar>
    </Container>
  );
};

export default Header;
