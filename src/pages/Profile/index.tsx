import { Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AccountSettings from '../../components/AccountSettings';
import Layout from '../../components/Layout';
import FavoritesContainer from '../../components/FavoritesContainer';

import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
  SideButton,
} from './styles';

const PatientProfile: React.FC = () => {
  const [currentContent, setCurrentContent] = useState('accounts');

  useEffect(() => {
    console.log(currentContent);
  }, [currentContent]);

  return (
    <Layout>
      <Container>
        <Content>
          <ContentLeft>
            <div>
              <Typography variant="subtitle2">Meus favoritos</Typography>
              <SideButton
                size="medium"
                fullWidth
                onClick={() => setCurrentContent('favorites_comics')}
              >
                Comics
              </SideButton>
              <SideButton
                size="medium"
                fullWidth
                onClick={() => setCurrentContent('favorites_characters')}
              >
                Characters
              </SideButton>
            </div>

            <Divider />
            <div>
              <Typography variant="subtitle2">
                Configurações de conta
              </Typography>
              <SideButton
                size="medium"
                onClick={() => setCurrentContent('account')}
                fullWidth
              >
                Minha conta
              </SideButton>
            </div>
          </ContentLeft>
          <ContentRight>
            {currentContent === 'account' && <AccountSettings />}
            {currentContent === 'favorites_characters' && (
              <FavoritesContainer type="character" />
            )}
            {currentContent === 'favorites_comics' && (
              <FavoritesContainer type="comic" />
            )}
          </ContentRight>
        </Content>
      </Container>
    </Layout>
  );
};

export default PatientProfile;
