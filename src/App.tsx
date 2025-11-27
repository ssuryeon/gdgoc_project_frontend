import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile />
    </ThemeProvider>
  );
}

export default App;