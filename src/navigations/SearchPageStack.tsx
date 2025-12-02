import {createStackNavigator} from '@react-navigation/stack';
import UserListPage from '../pages/UserListPage';
import SelectUserPage from '../pages/SelectUserPage';
import ChattingPage from '../pages/ChattingPage';

const Stack = createStackNavigator();

const SearchPageStack = () => {
    return (
        <Stack.Navigator id="rootStack" initialRouteName='UserListPage'>
            <Stack.Screen name="UserListPage" component={UserListPage} options={{headerShown: false}}/>
            <Stack.Screen name="SelectUserPage" component={SelectUserPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default SearchPageStack;