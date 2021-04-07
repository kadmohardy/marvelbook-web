import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Layout from '../../components/Layout';
import {
  Container,
  SearchButton,
  SearchContainer,
  SearchContent,
  SearchContentCenter,
  SearchInput,
  SearchInputContainer,
  SubTitle,
  Title,
  AutoCompleteField,
  VerticalDivider,
  TextFieldForAutoComplete,
} from './styles';

interface ISearchOptionType {
  id: number;
  description: string;
}
const options: Array<ISearchOptionType> = [
  { id: 1, description: 'Comics' },
  { id: 2, description: 'Characters' },
];

const Home: React.FC = () => {
  return (
    <Layout>
      <Container>
        <SearchContent>
          <Title>A wiki dos seus herois favoritos</Title>
          <SubTitle>Busque por comics, characters</SubTitle>
          <SearchContentCenter>
            <SearchContainer>
              <SearchInputContainer>
                <SearchIcon />
                <SearchInput />
                <AutoCompleteField
                  id="filter"
                  options={options}
                  // getOptionLabel={(option: ISearchOptionType) =>
                  //   option.description
                  // }
                  renderInput={params => (
                    <TextFieldForAutoComplete
                      placeholder="filter"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
                <VerticalDivider />

                <SearchButton>Buscar</SearchButton>
              </SearchInputContainer>
            </SearchContainer>
          </SearchContentCenter>
        </SearchContent>
      </Container>
    </Layout>
  );
};

export default Home;
