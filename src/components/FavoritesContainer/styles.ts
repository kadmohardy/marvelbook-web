import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(Paper).attrs({
  elevation: 0,
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 24px;

  align-items: center;
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
