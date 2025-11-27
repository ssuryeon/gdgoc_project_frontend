import styled, {useTheme} from 'styled-components/native';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';
import Button from '../components/Button';
import {View} from 'react-native';

const Modal = styled.View`
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    padding-top: 60px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const SelectedUserPage = () => {
    const theme = useTheme();

    return (
        <Modal>
            <ProfileIcon style={{width: 100, height: 100, marginBottom: 10}} iconSize={65}/>
            <CustomText style={{fontSize: 32, fontWeight: 700, marginBottom: 0}}>김영수닉네임</CustomText>
            <CustomText style={{fontSize: 18, fontFamily: 'Pretendard-Medium', color: theme.grayText, marginBottom: 100}}>youngsukim12</CustomText>
            <View style={{flexDirection: 'row', width: '100%'}}>
                <Button text="취소하기" style={{height: 52, marginRight: 20, flex: 1, backgroundColor: '#7C7C7C'}} textStyle={{fontSize: 20}} />
                <Button text="채팅하기" style={{height: 52, flex: 1}} textStyle={{fontSize: 20} }/>
            </View>
        </Modal>
    )
}

export default SelectedUserPage;