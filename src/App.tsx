import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
// import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
// import Profile from './pages/Profile';
// import ModifyPage from './pages/ModifyPage';
// import SearchPage from './pages/SearchPage';
// import ChatListPage from './pages/ChatListPage';
// import ChattingPage from './pages/ChattingPage';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage />
    </ThemeProvider>
  );
}

export default App;