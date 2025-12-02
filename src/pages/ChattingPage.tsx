import Header from '../components/Header';
import styled, {useTheme} from 'styled-components/native';
import {ScrollView, Pressable, View, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';

const Triangle = styled.View`
    border-left-width: 15px;
    border-right-width: 30px;
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-color: transparent;
    border-right-color: ${props => props.theme.chat1};
    border-top-color: transparent;
    border-bottom-color: transparent;
    width: 0;
    height: 0;
    margin-right: -6;
`;

interface IChat {
    text: string,
}

const OtherChat = ({text}:IChat) => {
    const theme = useTheme();
    return (
        <View style={{width: '100%', flexDirection: 'row', marginBottom: 10}}>
            <Triangle style={{borderStyle: 'solid', top: 7.5}}/>
            <View style={[styles.other, {backgroundColor: theme.chat1}]}>
                <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>{text}</CustomText>
            </View>
        </View>
    )
}

const MyChat = ({text}:IChat) => {
    const theme = useTheme();
    return (
        <View style={{width: '100%', flexDirection: 'row', marginBottom: 10}}>
            <View style={[styles.other, {backgroundColor: theme.brandColor, marginRight: -6}]}>
                <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>{text}</CustomText>
            </View>
            <Triangle style={{borderStyle: 'solid', top: 7.5, borderLeftColor: theme.brandColor, borderRightColor: 'transparent', borderLeftWidth: 30, borderRightWidth: 15}}/>
        </View>
    )
}

const ChatInput = styled.TextInput`
    flex: 1;
    height: 100%;
    border-radius: 30px;
    border: none;
    background-color: #fff;
    padding-left: 15px;
    font-size: 20px;
`;

const InsertChat = () => {
    const theme = useTheme();
    
    return (
        <View style={{flexDirection: 'row', backgroundColor: theme.brandColor, padding: 10}}>
            <ChatInput />
            <Pressable style={[styles.inputBtn, {backgroundColor: theme.darkpurple}]}>
                <Ionicons name="arrow-up" size={35} color="#fff"/>
            </Pressable>
        </View>
    );
}


const ChattingPage = ({navigation, route}) => {
    const theme = useTheme();
    const onPress = () => {
        if(route.params.from == 'SelectUserPage') {
            navigation.reset({
                index: 0,
                routes: [{
                    name: 'AfterLoginPage',
                    params: {screen: 'Chat'}
                }]
            })
        }
        else {
            navigation.pop();
        }
    }

    return (
        <>
            <Header text={route.params.nickname}/>
            <Pressable style={{position: 'absolute', top: '5%', left: 5, transform: 'translateY(-20px)'}} onPress={onPress}><Ionicons name='chevron-back-outline' size={45} color='#fff'/></Pressable>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: 20, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <View style={{width: '100%', height: '100%', paddingRight: 40}}>
                        <OtherChat text='안녕하세요'/>
                        <MyChat text="안녕하세요"/>
                    </View>
                </Container>
            </ScrollView>
            <InsertChat />
        </>
    );
}

const styles = StyleSheet.create({
    inputBtn: {
        width: 52, 
        height: 52, 
        borderRadius: '50%',  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10
    },
    other: {
        padding: 10,
        borderRadius: 10,
        width: '100%',
    }
})

export default ChattingPage;