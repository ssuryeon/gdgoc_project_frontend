import Header from '../components/Header';
import {ScrollView, Alert} from 'react-native';
import Button from '../components/Button';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import {Container} from '../components/Container';
import {signUp} from '../utils/signupUser';
import {useContext, useState} from 'react';
import UserContext from '../contexts/UserContext';
import ConfirmForm from '../components/ConfirmForm';

const SignUpPage = () => {
    const {state} = useContext(UserContext);
    const [confirm, setConfirm] = useState('');

    const onPress = async () => {
        if(confirm != state.password) Alert.alert('비밀번호가 일치하지 않습니다.');
        if(!state.username || !state.name || !state.email || !state.phone || !state.password) {
            Alert.alert('유저정보를 모두 입력해주세요.');
        }
        else {
            console.log(state);
            const user = await signUp(state);
            console.log(user);
        }
    }

    const onConfirm = (e) => {
        const val = e.nativeEvent.text;
        setConfirm(val);
    }

    return (
        <>
            <Header text="회원가입"/>
            <ScrollView style={{width: '100%'}}>
                <Container style={{padding: 30}}>
                    <Form text="이름"/>
                    <BtnForm text="아이디"/>
                    <BtnForm text="전화번호" />
                    <BtnForm text="이메일"/>
                    <Form text="비밀번호"/>
                    <ConfirmForm text="비밀번호 확인" value={confirm} onConfirm={onConfirm} />
                    <Button style={{width: '100%', height: 70, marginTop: 30, borderRadius: 20}} text="회원가입 완료" onPress={onPress}/>
                </Container>
            </ScrollView>
        </>
    )
}

export default SignUpPage;