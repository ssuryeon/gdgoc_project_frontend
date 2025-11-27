
import styled, {useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import {View, StyleSheet} from 'react-native';
import Menu from '../components/Menu';
import ProfileIcon from '../components/ProfileIcon';

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
    justify-content: flex-start;
    padding: 0;
    margin-top: 20px;
`;

const ProfilePage = () => {
    const theme = useTheme();
    return (
        <>
            <Container colors={[theme.inputColor, theme.brandColor]}>
                <Modal style={styles.shadow}>
                    <ProfileIcon />
                    <CustomText style={{fontSize: 32, fontWeight: 700}}>hongildong1234</CustomText>
                    <CustomText style={{fontSize: 24, fontWeight: 500, color: theme.grayText}}>랜덤한닉네임</CustomText>
                    <Info>
                        <View style={{marginBottom: 20}}>
                            <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>이름</CustomText>
                            <CustomText style={{fontSize: 20, fontWeight: 400, color: theme.grayText}}>홍길동</CustomText>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>이메일</CustomText>
                            <CustomText style={{fontSize: 20, fontWeight: 400, color: theme.grayText}}>gildong1234@naver.com</CustomText>
                        </View>
                        <View>
                            <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>전화번호</CustomText>
                            <CustomText style={{fontSize: 20, fontWeight: 400, color: theme.grayText}}>+82 10-1234-5678</CustomText>
                        </View>
                    </Info>
                    <Button style={{width: 140, height: 44, marginTop: 30, borderRadius: 5}} textStyle={{fontSize: 20}} text='프로필 수정'/>
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