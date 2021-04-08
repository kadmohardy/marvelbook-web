import { Typography } from '@material-ui/core';
import React from 'react';
import CharacterCard from '../CharacterCard';
import { ICharacter } from '../../interfaces/marvel/character';
import { Container } from './styles';

interface CardsTableProps {
  count: number;
  characters: ICharacter[];
}

const CardsTable: React.FC<CardsTableProps> = ({ count, characters }) => {
  return (
    <Container>
      <Typography variant="subtitle2">{`${count} resultados mostrados`}</Typography>
      {characters.map((item: ICharacter) => {
        return <CharacterCard data={item} />;
      })}
    </Container>
  );
};

export default CardsTable;
