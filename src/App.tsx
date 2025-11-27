import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile';
// import ModifyPage from './pages/ModifyPage';
// import SearchPage from './pages/SearchPage';
// import ChatListPage from './pages/ChatListPage';
import ChattingPage from './pages/ChattingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChattingPage />
    </ThemeProvider>
  );
}

export default App;