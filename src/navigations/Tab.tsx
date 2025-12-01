import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchPage from '../pages/SearchPage';
import ChatListPage from '../pages/ChatListPage';
import ProfilePage from '../pages/ProfilePage';

// type tabMenuList = {
//     Search: undefined;
//     Chat: undefined;
//     Profile: undefined;
// }

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {display: 'none'}, headerShown: false,}} id="menu">
            <Tab.Screen name="Search" component={SearchPage}/>
            <Tab.Screen name="Chat" component={ChatListPage}/>
            <Tab.Screen name="Profile" component={ProfilePage}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;