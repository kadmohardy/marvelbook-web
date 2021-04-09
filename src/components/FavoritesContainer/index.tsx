import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import CardsTable from '../CardsTable';
import { Container, SearchResultsContainer } from './styles';
import { IFavorite } from '../../interfaces/favorites/favorites';
import api from '../../services/api';
import RootState from '../../store/modules/rootState';
import { AuthenticationState } from '../../store/modules/auth/types';

interface FavoritesContainerProps {
  type: string;
}

const FavoritesContainer: React.FC<FavoritesContainerProps> = ({ type }) => {
  const { token } = useSelector<RootState>(
    state => state.auth,
  ) as AuthenticationState;

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentData, setCurrentData] = useState<IFavorite[]>([]);

  async function getFavoritesData(value: number) {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = await api.get('/favorites/list', {
      params: {
        type,
        offset: 0,
        count: 10,
      },
    });
  }

  useEffect(() => {
    getFavoritesData(0);
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    getFavoritesData(value);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        {type}
      </Typography>
      <SearchResultsContainer>
        <CardsTable count={currentData.length} characters={currentData} />
      </SearchResultsContainer>
    </Container>
  );
};

export default FavoritesContainer;
