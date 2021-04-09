import React from 'react';
import { Container, Loading } from './styles';

interface ButtonProps {
  title: string;
  loading: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  title,
  loading,
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container disableElevation type="submit" disabled={loading}>
      {loading && <Loading />}
      <h3>{title}</h3>
    </Container>
  );
};

export default Button;
