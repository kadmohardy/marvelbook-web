import { Button, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    margin-top: 40px;
    line-height: 32px;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex: 1 1;

  margin: 15px;

  background: #ffffff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContent = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-size: 48px;
  font-weight: bold;
  max-width: 480px;
`;

export const SubTitle = styled(Typography)`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

export const SearchContentCenter = styled.div`
  border-radius: 4px;
  margin-top: 30px;
  padding: 10px;
`;

export const SearchInputContainer = styled.div`
  height: 42px;
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.08);
`;

export const AutoCompleteField = styled(Autocomplete).attrs({
  variant: 'outlined',
  disableElevation: true,
})`
  border-color: #ffffff;
  width: 180px;
  border-radius: 4px;
  margin: 2px 16px;
`;

export const TextFieldForAutoComplete = styled(TextField).attrs({
  variant: 'outlined',
  disableElevation: true,
})`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    ,
    &:hover fieldset {
      border-color: white;
    }
    ,
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 30px;
  border-right: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const SearchButton = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
})`
  color: #ffffff;
  border-radius: 4px;
  height: 42px;
  width: 90px;
  text-transform: none;
  background: ${props => props.theme.palette.primary.main};
  border-color: ${props => props.theme.palette.primary.dark};
`;

export const SearchInput = styled.input`
  border: none;
  padding: 30px 10px;
  outline: none;
  width: 320px;
`;
