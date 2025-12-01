import {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../components/CustomText';
import {useTheme} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IMenu {
    status: string,
}

const Menu = ({status}:IMenu) => {
    const theme = useTheme();
    const tabNav = useNavigation<any>();

    const [searchColor, setSearchColor] = useState(theme.brandColor);
    const [chatColor, setChatColor] = useState(theme.brandColor);
    const [profileColor, setProfileColor] = useState(theme.brandColor);
    const [chatIcon, setChatIcon] = useState('chatbubble-outline');
    const [profileIcon, setProfileIcon] = useState('person-outline');

    const onPress = (name) => {
        if(name == 'search') {
            setSearchColor(theme.darkpurple);
            tabNav.navigate('Search');
        }
        else if(name == 'chat') {
            setChatColor(theme.darkpurple);
            setChatIcon('chatbubble-sharp');
            tabNav.navigate('Chat');
        }
        else if(name == 'profile') {
            setProfileColor(theme.darkpurple);
            setProfileIcon('person');
            tabNav.navigate('Profile')
        };
    }
    // const onPressIn = (name) => {
    //     if(name == 'search') {
    //         setSearchColor(theme.darkpurple);
    //     }
    //     else if(name == 'chat') {
    //         setChatColor(theme.darkpurple);
    //         setChatIcon('chatbubble-sharp');
    //     }
    //     else if(name == 'profile') {
    //         setProfileColor(theme.darkpurple);
    //         setProfileIcon('person');
    //     };
    // }
    // const onPressOut = (name) => {
    //     if(name == 'search') {
    //         setSearchColor(theme.brandColor);
    //     }
    //     else if(name == 'chat') {
    //         setChatColor(theme.brandColor);
    //         setChatIcon('chatbubble-outline');
    //     }
    //     else if(name == 'profile') {
    //         setProfileColor(theme.brandColor);
    //         setProfileIcon('person-outline');
    //     };
    // }
    return (
        <View style={styles.container}>
            <Pressable style={styles.middleAlign} onPress={() => onPress('search')} >
                <Feather name='search' size={40} color={status == 'search'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'search'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 18}}>검색</CustomText>
            </Pressable>
            <Pressable style={styles.middleAlign} onPress={() => onPress('chat')} >
                <Ionicons name={status == 'chat'? 'chatbubble-sharp' : 'chatbubble-outline'} size={40} color={status == 'chat'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'chat'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 18}}>채팅</CustomText>
            </Pressable>
            <Pressable style={styles.middleAlign} onPress={() => onPress('profile')} >
                <Ionicons name={status == 'profile'? 'person' : 'person-outline'} size={40} color={status == 'profile'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'profile'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 18}}>프로필</CustomText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 80, 
        backgroundColor: '#fff', 
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    middleAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Menu;