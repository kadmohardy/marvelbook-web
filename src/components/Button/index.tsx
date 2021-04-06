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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container disableElevation type="submit">
      {loading && <Loading />}
      <h3>{title}</h3>
    </Container>
  );
};

export default Button;
