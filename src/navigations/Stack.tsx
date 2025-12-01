import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import SignUpPage from '../pages/SignUpPage';
import AfterLoginPage from '../pages/AfterLoginPage';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator id="rootStack" initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="SignUpPage" component={SignUpPage} options={{headerShown: false}}/>
            <Stack.Screen name="AfterLoginPage" component={AfterLoginPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;