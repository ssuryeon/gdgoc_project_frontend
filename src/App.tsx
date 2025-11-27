import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile';
import ModifyProfile from './pages/ModifyProfile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModifyProfile />
    </ThemeProvider>
  );
}

export default App;