import styled, {useTheme} from 'styled-components/native';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';
import Button from '../components/Button';
import {View} from 'react-native';
import {getRoomId} from '../utils/chat';
import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';

const Modal = styled.View`
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    padding-top: 60px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const SelectedUserPage = ({navigation, route}) => {
    const theme = useTheme();
    const {state} = useContext(UserContext);
    const onPress = () => {
        console.log(state);
        navigation.navigate('ChattingPage', {nickname: route.params.nickname, from: 'SelectUserPage'});
    }
    
    return (
        <View style={{width: '100%', backgroundColor: theme.inputColor, padding: 15, justifyContent: 'flex-start', minHeight: '100%', flex: 1}}>
            <Modal>
                <ProfileIcon style={{width: 100, height: 100, marginBottom: 10}} iconSize={65}/>
                <CustomText style={{fontSize: 32, fontWeight: 700, marginBottom: 0}}>{route.params.nickname}</CustomText>
                <CustomText style={{fontSize: 18, fontFamily: 'Pretendard-Medium', color: theme.grayText, marginBottom: 100}}>{route.params.username}</CustomText>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Button text="취소하기" style={{height: 52, marginRight: 20, flex: 1}} textStyle={{fontSize: 20}} onPress={() => navigation.pop()}/>
                    <Button text="채팅하기" style={{height: 52, flex: 1}} textStyle={{fontSize: 20} } onPress={onPress}/>
                </View>
            </Modal>
        </View>
    )
}

export default SelectedUserPage;