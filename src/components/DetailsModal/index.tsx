import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { ICharacter } from '../../interfaces/marvel/character';
import RootState from '../../store/modules/rootState';
import { AuthenticationState } from '../../store/modules/auth/types';
import api from '../../services/api';
import { getCharacter } from '../../services/marvel_api';
import { addToFavoritesRequest } from '../../store/modules/favorites/actions';
import {
  Actions,
  Container,
  Header,
  Image,
  Information,
  ExitButton,
  FavoriteButton,
  Content,
} from './styles';
import { FavoritesState } from '../../store/modules/favorites/types';

interface CharacterCardProps {
  data: ICharacter;
  closeDetails: () => void;
  open: boolean;
}

const DetailsModal: React.FC<CharacterCardProps> = ({
  data,
  closeDetails,
  open,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { signed, token } = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  const favo = useSelector<RootState>(
    state => state.favorites,
  ) as FavoritesState;

  useEffect(() => {
    getFavoriteData();
    console.log('TESTANDO', favo);
    // getFavoriteDataFromMarvelApi();
  }, []);

  async function getFavoriteData() {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = await api.get('/favorites', {
      params: {
        type: data.type,
        marvel_id: data.id,
      },
    });

    if (response.data) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  async function getFavoriteDataFromMarvelApi() {
    const response = await getCharacter(data.id);
    console.log(response);
  }

  function addToFavorites() {
    console.log('ADD');
    if (!isFavorite) if (token) dispatch(addToFavoritesRequest(token, data));
  }

  // function addToFavorites() {
  //   if (token) dispatch(addToFavoritesRequest(token, data));
  // }

  return (
    <Container open={open} onClose={closeDetails}>
      <Content>
        <Header>
          <Image alt={data.name} src={data.image} />
          <Information>
            <Typography variant="h5">{data.name}</Typography>

            <Typography variant="subtitle2" color="textSecondary">
              {data.type}
            </Typography>
            <Typography variant="body2">{data.description}</Typography>
          </Information>
        </Header>
        <Actions>
          {signed && (
            <FavoriteButton
              startIcon={<FavoriteIcon />}
              size="small"
              onClick={addToFavorites}
            >
              {!isFavorite ? 'Adicionar' : 'Remover'}
            </FavoriteButton>
          )}
          <ExitButton
            startIcon={<CloseIcon />}
            size="small"
            onClick={closeDetails}
          >
            Sair
          </ExitButton>
        </Actions>
      </Content>
    </Container>
  );
};

export default DetailsModal;
