import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {UserProvider} from './contexts/UserContext';
// import {AuthProvider} from './contexts/AuthContext';
import StackNavigation from './navigations/Stack';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        {/* <AuthProvider> */}
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
        {/* </AuthProvider> */}
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;