import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';

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
  FavoritesButton,
  Title,
} from './styles';
import RootState from '../../store/modules/rootState';

const Header: React.FC = () => {
  const { signed } = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  const history = useHistory();

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
                <FavoritesButton
                  startIcon={<FavoriteIcon />}
                  onClick={() => history.push('/profile')}
                  type="submit"
                >
                  Favoritos
                </FavoritesButton>
              </>
            )}
            {!signed && (
              <>
                <Link to="/signup">
                  <Typography variant="body1" gutterBottom>
                    Criar Conta
                  </Typography>
                </Link>
                <Link to="/signin">
                  <Typography variant="body1" gutterBottom>
                    Entrar
                  </Typography>
                </Link>
              </>
            )}
          </HeaderRight>
        </HeaderToolbar>
      </HeaderBar>
    </Container>
  );
};

export default Header;
