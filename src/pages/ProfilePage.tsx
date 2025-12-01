
import styled, {useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import Menu from '../components/Menu';
import ProfileIcon from '../components/ProfileIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled(LinearGradient)`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

const Modal = styled.View`
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

const Info = styled.View`
    width: 100%;
    max-height: 100%;
    justify-content: flex-start;
    padding: 0;
    margin-top: 20px;
`;

const ProfilePage = ({navigation}) => {
    const theme = useTheme();
    const {width} = useWindowDimensions();
    const baseWidth = 375
    const scale = width / baseWidth;
    const onPress = () => {
        navigation.navigate('Home');
        AsyncStorage.removeItem('accessToken');
    }

    return (
        <>
            <Container colors={[theme.inputColor, theme.brandColor]}>
                <Modal style={styles.shadow}>
                    <ProfileIcon  style={{width: 130, height: 130}} iconSize={80}/>
                    <CustomText style={{fontSize: 28*scale, fontWeight: 700}}>hongildong1234</CustomText>
                    <CustomText style={{fontSize: 24*scale, fontWeight: 500, color: theme.grayText}}>랜덤한닉네임</CustomText>
                    <Info>
                        <View style={{marginBottom: 20}}>
                            <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>이름</CustomText>
                            <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>홍길동</CustomText>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>이메일</CustomText>
                            <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>gildong1234@naver.com</CustomText>
                        </View>
                        <View>
                            <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>전화번호</CustomText>
                            <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>+82 10-1234-5678</CustomText>
                        </View>
                    </Info>
                    <View style={{flexDirection: 'row'}}>
                        <Button style={{width: 100, height: 44, marginTop: 30, borderRadius: 5, marginRight: 10}} textStyle={{fontSize: 18*scale}} text='프로필 수정' onPress={() => navigation.navigate('ModifyPage')}/>
                        <Button style={{width: 100, height: 44, marginTop: 30, borderRadius: 5}} textStyle={{fontSize: 18*scale}} text='로그아웃' onPress={onPress}/>
                    </View>
                </Modal>
            </Container>
            <Menu status='profile'/>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        boxShadow: [
            {
                offsetX: 0,
                offsetY: 10,
                blurRadius: 15,
                spreadDistance: 0,
                color: 'rgba(33, 33, 33, 0.25)',
            }
        ]
    }
})

export default ProfilePage;