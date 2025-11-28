import React from 'react';
import {StyleSheet} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Button from '../components/Button';
import Input from '../components/Input';
import CustomText from '../components/CustomText';
import LinearGradient, {LinearGradientProps} from 'react-native-linear-gradient';

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

const Home = () => {
    const theme = useTheme();
    return (
        <Container colors={[theme.brandColor, theme.brandColor2]}>
            <CustomText style={[styles.logo, {marginBottom: 100}]}>Logo</CustomText>
            <Modal style={{marginBottom: 20}}>
                <CustomText style={[styles.text, {marginBottom: 10}]}>아이디</CustomText>
                <Input style={[styles.input, {marginBottom: 20}]}/>
                <CustomText style={[styles.text, {marginBottom: 10}]}>비밀번호</CustomText>
                <Input style={[styles.input, {marginBottom: 35}]}/>
                <Button style={styles.btn} text="로그인" />
            </Modal>
            <Button style={styles.btn} text="회원가입" />
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