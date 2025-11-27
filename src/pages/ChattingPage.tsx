import Header from '../components/Header';
import styled, {useTheme} from 'styled-components/native';
import {ScrollView, Pressable, View, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';

const OtherChat = styled.View`
    padding: 10px;
    background-color: ${props => props.theme.chat1};
    border-radius: 10px;
    position: 'relative';
    align-items: 'center';
    &:before {
        position: 'absolute';
        top: 13px;
        left: -100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 20px 10px 0px;
        border-color: transparent ${props => props.theme.chat1} transparent transparent;
    }
`;

const ChatInput = styled.TextInput`
    flex: 1;
    height: 100%;
    border-radius: 30px;
    border: none;
    background-color: #fff;
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
    )
}


const ChattingPage = () => {
    const theme = useTheme();
    return (
        <>
            <Header text="youngsukim12"/>
            <Pressable style={{position: 'absolute', top: '5%', left: 10, transform: 'translateY(-20px)'}}><Ionicons name='chevron-back-outline' size={45} color='#fff'/></Pressable>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: 15, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <OtherChat><CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>안녕하세요</CustomText></OtherChat>
                </Container>
            </ScrollView>
            <InsertChat />
        </>
    )
}

const styles = StyleSheet.create({
    inputBtn: {
        width: 52, 
        height: 52, 
        borderRadius: '50%',  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10
    }
})

export default ChattingPage;