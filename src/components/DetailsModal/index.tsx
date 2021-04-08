import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ICharacter } from '../../interfaces/marvel/character';
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
          <FavoriteButton
            startIcon={<FavoriteIcon />}
            size="small"
            onClick={closeDetails}
          >
            Adicionar aos Favoritos
          </FavoriteButton>
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
