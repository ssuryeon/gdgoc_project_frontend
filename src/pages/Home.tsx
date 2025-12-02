import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Button from '../components/Button';
import Input from '../components/Input';
import CustomText from '../components/CustomText';
import LinearGradient, {LinearGradientProps} from 'react-native-linear-gradient';
import {login} from '../utils/login';
import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
// import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled(LinearGradient)<LinearGradientProps>`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

const Modal = styled.View`
    width: 100%;
    /* height: 352px; */
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
`;

const Home = ({navigation}) => {
    const {state, actions} = useContext(UserContext);
    useEffect(() => {
        actions.setName('');
        actions.setUsername('');
        actions.setNickname('');
        actions.setPhone('');
        actions.setEmail('');
        actions.setPassword('');
        actions.setAvatarUrl('');

        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('accessToken');
                if(token) navigation.navigate('AfterLoginPage');
            } catch(err) {
                console.error('액세스 토큰 로딩 중 오류: ', err);
            }
        }
        checkToken();
    }, [])
    const theme = useTheme();
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    // const {accessToken, setAccessToken} = useContext(AuthContext);

    const onIdChange = (e) => {
        const val = e.nativeEvent.text;
        setId(val);
    }

    const onPasswordChange = (e) => {
        const val = e.nativeEvent.text;
        setPassword(val);
    }

    const onPressLogin = async () => {
        const userInfo = await login(id, password);
        console.log(userInfo);
        actions.setName(userInfo.name);
        actions.setUsername(userInfo.username);
        actions.setPassword(userInfo.password);
        actions.setPhone(userInfo.phone);
        actions.setEmail(userInfo.email);
        console.log(state);

        if(userInfo) {
            try {
                await AsyncStorage.setItem('accessToken', userInfo.access_token);
            } catch(err) {
                console.error('AsyncStorage 저장 실패: ', err);
            }
            const access = await AsyncStorage.getItem('accessToken');
            console.log(access);
            navigation.navigate('AfterLoginPage');
        }
    }

    const onPressSignUp = () => {
        navigation.navigate('SignUpPage');
    }

    return (
        <Container colors={[theme.brandColor, theme.brandColor2]}>
            <CustomText style={[styles.logo, {marginBottom: 100}]}>Logo</CustomText>
            <Modal style={{marginBottom: 20}}>
                <CustomText style={[styles.text, {marginBottom: 10}]}>아이디</CustomText>
                <Input style={[styles.input, {marginBottom: 20}]} value={id} onChange={onIdChange}/>
                <CustomText style={[styles.text, {marginBottom: 10}]}>비밀번호</CustomText>
                <Input style={[styles.input, {marginBottom: 35}]} value={password} onChange={onPasswordChange}/>
                <Button style={styles.btn} text="로그인" onPress={onPressLogin} />
            </Modal>
            <Button style={styles.btn} text="회원가입"onPress={onPressSignUp} />
        </Container>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 32,
        fontWeight: 900,
    },
    text: {
        fontSize: 24,
        fontWeight: 700,
    },
    input: {
        width: '100%',
        height: 50,
    },
    btn: {
        width: '100%',
        height: 60,
    },
    btnText: {
        color: '#fff', 
        textAlign: 'center'
    }
})

export default Home;