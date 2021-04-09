import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import CardsTable from '../../components/CardsTable';
import Layout from '../../components/Layout';
import { ICharacter } from '../../interfaces/marvel/character';
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
  SearchResultsContainer,
  Loading,
} from './styles';
import { getCharacters, getComics } from '../../services/marvel_api';

const Home: React.FC = () => {
  const searchOptions: Array<string> = ['comics', 'characters'];
  const [searchOption, setSearchOption] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [totalResults, setTotalResults] = useState<number>(0);

  const [
    searchCharacters,
    setSearchCharacters,
  ] = useState<Array<ICharacter> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResultsPageCount, setSearchResultsPageCount] = useState<number>(
    1,
  );

  const [searchCurrentPage, setSearchCurrentPage] = useState<number>(1);

  function getPagesCount(pagesNumber: number, resultsPerPage: number) {
    return pagesNumber % resultsPerPage === 0
      ? Math.floor(pagesNumber / resultsPerPage)
      : Math.floor(pagesNumber / resultsPerPage) + 1;
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSearchCurrentPage(value);
    processCharactersSearchRequest(value - 1);
  };

  const processCharactersSearchRequest = async (offset = 0) => {
    setLoading(true);
    const response = await getCharacters(searchText, offset + 1);

    const parsedResult: ICharacter[] = response.results.map(
      (item: {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          extension: string;
          path: string;
        };
      }) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          type: 'character',
        };
      },
    );

    setLoading(false);
    setSearchCharacters(parsedResult);
    setSearchResultsPageCount(getPagesCount(response.total, 10));
    setTotalResults(response.total);
  };

  const handleSubmit = useCallback(async () => {
    try {
      if (searchOption === '' || searchText === '') {
        toast.error(`Por favor, preencha os filtros para buscar`);
      } else if (searchOption === 'characters') {
        processCharactersSearchRequest();
      } else {
        const response = await getComics(searchText);
      }
    } catch (error) {
      toast.error('Hey, ocorreu um erro ao realizar a busca');
      setLoading(false);
    }
  }, [searchOption, searchText]);

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
                <SearchInput onChange={handleChange} />
                <AutoCompleteField
                  id="filter"
                  options={searchOptions}
                  value={searchOption}
                  renderInput={params => (
                    <TextFieldForAutoComplete
                      placeholder="filter"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...params}
                      variant="outlined"
                    />
                  )}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      const optionValue = searchOptions.filter(
                        item => item === newValue,
                      )[0];
                      setSearchOption(optionValue);
                    }
                  }}
                />
                <VerticalDivider />
                <SearchButton onClick={handleSubmit}>
                  {loading && <Loading />}
                  Buscar
                </SearchButton>
              </SearchInputContainer>
            </SearchContainer>
          </SearchContentCenter>
        </SearchContent>
        {searchCharacters !== null && (
          <SearchResultsContainer>
            <CardsTable count={totalResults} characters={searchCharacters} />
            <Pagination
              count={searchResultsPageCount}
              page={searchCurrentPage}
              onChange={handlePageChange}
            />
          </SearchResultsContainer>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
