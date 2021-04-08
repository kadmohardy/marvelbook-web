import SearchIcon from '@material-ui/icons/Search';
import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import md5 from 'md5';
import * as Yup from 'yup';
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
import { ISearchRequest } from '../../interfaces/search/search';
import marvelApi from '../../services/marvel_api';

const PUBLIC_KEY = '0237534423f103800b1a9c8be30896e5';
const PRIVATE_KEY = '629fa04957b490b0cde7d606d340202f04b8d7b7';

const Home: React.FC = () => {
  const searchOptions: Array<string> = ['comics', 'characters'];
  const [searchOption, setSearchOption] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(searchOption);
  // }, [searchOption]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const handleSubmit = useCallback(async () => {
    console.log('CLICANK NA BUSCA');

    try {
      setLoading(true);
      const timestamp = Number(new Date());
      const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

      const response = await marvelApi.get('/characters', {
        params: {
          nameStartsWith: 'spider',
          apikey: PUBLIC_KEY,
          hash,
          ts: timestamp,
        },
      });
      console.log(response);
      // await api.post('/users', {
      //   fullname,
      //   email,
      //   password,
      // });

      // toast.success(
      //   `Olá ${fullname}. Sua conta foi criada com sucesso. Entre com suas credenciais para acessar sua conta!`,
      // );
      setLoading(false);
    } catch (error) {
      // toast.error(`Olá ${fullname}. Não foi possível criar a conta.`);
      setLoading(false);
    }
  }, []);

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
                <SearchButton onClick={handleSubmit}>Buscar</SearchButton>
              </SearchInputContainer>
            </SearchContainer>
          </SearchContentCenter>
        </SearchContent>
      </Container>
    </Layout>
  );
};

export default Home;
