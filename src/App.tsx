import React from 'react';
import styled from 'styled-components';
import { Toaster } from 'sonner';
import MainPage from './pages/MainPage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0;
  margin: 0;
`;

function App() {
  return (
    <AppContainer>
      <MainPage />
      <Toaster 
        position="top-center"
        richColors
        closeButton
        duration={4000}
      />
    </AppContainer>
  );
}

export default App; 