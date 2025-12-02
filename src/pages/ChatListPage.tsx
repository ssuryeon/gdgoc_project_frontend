import Header from '../components/Header';
import {ScrollView, View} from 'react-native';
import {Container} from '../components/Container';
import styled, {useTheme} from 'styled-components/native';
import Menu from '../components/Menu';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';
import {getMyRooms} from '../utils/chat';
import {useEffect, useContext, useState} from 'react';
import {UserContext} from '../contexts/UserContext';

const Modal = styled.View`
    width: 100%;
    height: 13%;
    background-color: #fff;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
    padding: 10px;
`;

const AlertIcon = styled.View`
    width: 20px;
    height: 20px;
    background-color: #00C8B3;
    border: 1px solid #fff;
    border-radius: 50%;
`;

interface IUserChatItem {
    isread: boolean,
    userId: string,
    content?: string,
}

const UserChatItem = ({isread, userId, content}:IUserChatItem) => {
    
    return (
        <Modal style={{boxShadow: "0 4 10 0 rgba(132, 132, 132, 0.25)"}}>
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', marginRight: 15, padding: 0, position: 'relative'}}>
                <ProfileIcon style={{width: 74, height: 74, transform: 'translateY(10%)'}} iconSize={45} />
                {isread? null : <AlertIcon style={{position: 'absolute', top: 3, right: 0, zIndex: 3}}/>}
            </View>
            <View style={{flex: 1, overflow: 'hidden'}}>
                <CustomText style={{fontSize: 28, fontFamily: 'Pretendard-SemiBold'}} numberOfLines={1} ellipsizeMode='tail'>{userId}</CustomText>
                <CustomText style={{fontSize: 18, width: '60%'}} numberOfLines={1} ellipsizeMode='tail'>{content}</CustomText>
            </View>
        </Modal>
    )
}

const ChatListPage = () => {
    const theme = useTheme();
    const {state} = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            console.log(state.username);
            const result = await getMyRooms(state.username);
            console.log('getrooms: ', result);
        }

        getRooms();
        
    }, [])
    return (
        <>
            <Header text="채팅 목록"/>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: 15, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <UserChatItem isread={false} userId='youngsukim12' content='안녕하세요. 오늘 날씨가 좋네요. 안녕하세요'/>
                    <UserChatItem isread={true} userId='leeminjun2025' content='안녕하세요. 오늘 날씨가 좋네요'/>
                    <UserChatItem isread={true} userId='youngja__' content='안녕하세요. 오늘 날씨가 좋네요'/>
                    <UserChatItem isread={true} userId='youngja__' content='안녕하세요. 오늘 날씨가 좋네요'/>
                    <UserChatItem isread={true} userId='youngja__' content='안녕하세요. 오늘 날씨가 좋네요'/>
                    <UserChatItem isread={true} userId='youngja__' content='안녕하세요. 오늘 날씨가 좋네요'/>
                </Container>
            </ScrollView>
            <Menu status="chat" />
        </>
    )
}

export default ChatListPage;