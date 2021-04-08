import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = '0237534423f103800b1a9c8be30896e5';
const PRIVATE_KEY = '629fa04957b490b0cde7d606d340202f04b8d7b7';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

const getCharacters = async (searchText: string, pageNumber: number) => {
  const timestamp = Number(new Date());
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const response = await api.get('/characters', {
    params: {
      nameStartsWith: searchText,
      apikey: PUBLIC_KEY,
      hash,
      ts: timestamp,
      limit: 10,
      offset: (pageNumber - 1) * 10,
      orderBy: 'name',
    },
  });

  return response.data.data;
};

const getComics = async (searchText: string) => {
  const timestamp = Number(new Date());
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  const response = await api.get('/comics', {
    params: {
      titleStartsWith: searchText,
      apikey: PUBLIC_KEY,
      hash,
      ts: timestamp,
      limit: 10,
    },
  });
  return response.data.data;
};

export { getCharacters, getComics };
