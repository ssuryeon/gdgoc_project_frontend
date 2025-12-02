
import styled, {useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import {View, StyleSheet, useWindowDimensions, Image} from 'react-native';
import Menu from '../components/Menu';
import ProfileIcon from '../components/ProfileIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfile} from '../utils/profile';
import {useEffect, useState, useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
 
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

export interface IUser {
    username: string,
    name: string,
    nickname: string,
    phone: string,
    email: string,
    password: string,
    avatar_url: string,
}

const ProfilePage = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<IUser>();
    const theme = useTheme();
    const {width} = useWindowDimensions();
    const baseWidth = 375
    const scale = width / baseWidth;
    const {actions} = useContext(UserContext);
    
    useEffect(() => {
        const getInfo = async () => {
            try {
                const token = await AsyncStorage.getItem('accessToken');
                console.log(token);
                const info = await getProfile(token);
                console.log(info);
                setUser(info.user);
            } catch(e) {
                console.error('getInfo 에러: ', e);
            } finally { //getInfo가 끝난 뒤 수행되는 구문
                setLoading(false);
                console.log('ProfilePage: ', user);
                actions.setNickname(user.nickname);
                actions.setAvatarUrl(user.avatar_url);
            }
        }
        getInfo();
    }, []);

    const onPress = () => {
        navigation.navigate('Home');
        AsyncStorage.removeItem('accessToken');
    }

    return (
        <>
            <Container colors={[theme.inputColor, theme.brandColor]}>
                <Modal style={styles.shadow}>
                    {loading? 
                        <CustomText>로딩 중...</CustomText>: 
                        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                {(user.avatar_url == '') ? <ProfileIcon  style={{width: 130, height: 130}} iconSize={80}/> : <Image source={{uri: user.avatar_url}} style={{width: 130, height: 130, borderRadius: '50%'}}/>}
                        <CustomText style={{fontSize: 28*scale, fontWeight: 700}}>{user.username}</CustomText>
                        <CustomText style={{fontSize: 24*scale, fontWeight: 500, color: theme.grayText}}>{user.nickname}</CustomText>
                        <Info>
                            <View style={{marginBottom: 20}}>
                                <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>이름</CustomText>
                                <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>{user.name}</CustomText>
                            </View>
                            <View style={{marginBottom: 20}}>
                                <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>이메일</CustomText>
                                <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>{user.email}</CustomText>
                            </View>
                            <View>
                                <CustomText style={{fontSize: 18*scale, fontFamily: 'Pretendard-SemiBold'}}>전화번호</CustomText>
                                <CustomText style={{fontSize: 18*scale, fontWeight: 400, color: theme.grayText}}>{user.phone}</CustomText>
                            </View>
                        </Info>
                        <View style={{flexDirection: 'row'}}>
                            <Button style={{width: 100, height: 44, marginTop: 30, borderRadius: 5, marginRight: 10}} textStyle={{fontSize: 18*scale}} text='프로필 수정' onPress={() => navigation.navigate('ModifyPage', {user})}/>
                            <Button style={{width: 100, height: 44, marginTop: 30, borderRadius: 5}} textStyle={{fontSize: 18*scale}} text='로그아웃' onPress={onPress}/>
                        </View>
                        </View>
                    }
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