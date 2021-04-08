import React from 'react';
import Header from '../Header';

import { Container, MainContainer } from './styles';

interface LayoutProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />
      <Container>{children}</Container>
    </MainContainer>
  );
};

export default Layout;
