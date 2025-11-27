import {View, StyleSheet, Pressable} from 'react-native';
import CustomText from '../components/CustomText';
import {useTheme} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IMenu {
    status: string,
}

const Menu = ({status}:IMenu) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Pressable style={styles.middleAlign}>
                <Feather name='search' size={45} color={status == 'search'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'search'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 24}}>검색</CustomText>
            </Pressable>
            <Pressable style={styles.middleAlign}>
                <Ionicons name={status == 'chat'? 'chatbubble-sharp' : 'chatbubble-outline'} size={45} color={status == 'chat'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'chat'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 24}}>채팅</CustomText>
            </Pressable>
            <Pressable style={styles.middleAlign}>
                <Ionicons name={status == 'profile'? 'person' : 'person-outline'} size={48} color={status == 'profile'? theme.darkpurple : theme.brandColor}/>
                <CustomText style={{color: status == 'profile'? theme.darkpurple : theme.brandColor, fontFamily: 'Pretendard-SemiBold', fontSize: 24}}>프로필</CustomText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 120, 
        backgroundColor: '#fff', 
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 18,
        paddingBottom: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    middleAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Menu;