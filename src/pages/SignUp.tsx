import styled from 'styled-components/native';
import Header from '../components/Header';
import {ScrollView} from 'react-native';
import Button from '../components/Button';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';

const Container = styled.View`
    background-color: #fff;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
`;

const SignUp = () => {
    return (
        <>
            <Header text="회원가입"/>
            <ScrollView style={{width: '100%'}}>
                <Container>
                    <Form text="이름"/>
                    <BtnForm text="아이디"/>
                    <BtnForm text="전화번호" />
                    <BtnForm text="이메일"/>
                    <Form text="비밀번호"/>
                    <Form text="비밀번호 확인"/>
                    <Button style={{width: '100%', height: 70, marginTop: 30, borderRadius: 20}} text="회원가입 완료"/>
                </Container>
            </ScrollView>
        </>
    )
}

export default SignUp;