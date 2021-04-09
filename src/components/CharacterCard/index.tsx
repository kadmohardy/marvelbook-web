import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';
import DetailsModal from '../DetailsModal';
import { ICharacter } from '../../interfaces/marvel/character';
import {
  Actions,
  Container,
  DetailsButton,
  Header,
  Image,
  Information,
} from './styles';

interface CharacterCardProps {
  data: ICharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Container>
      <CardContent>
        <Header>
          <Image alt={data.name} src={data.image} />
          <Information>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {data.type}
            </Typography>
          </Information>
          <Actions>
            <DetailsButton
              size="small"
              onClick={() => {
                setShowDetails(true);
              }}
            >
              Ver perfil
            </DetailsButton>
          </Actions>
        </Header>
      </CardContent>
      {showDetails && (
        <DetailsModal
          open={showDetails}
          data={data}
          closeDetails={() => setShowDetails(false)}
        />
      )}
    </Container>
  );
};

export default CharacterCard;
