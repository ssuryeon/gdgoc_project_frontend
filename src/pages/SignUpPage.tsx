import Header from '../components/Header';
import {ScrollView} from 'react-native';
import Button from '../components/Button';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import {Container} from '../components/Container';
import {signUp} from '../utils/verifyUser';

const SignUpPage = () => {
    const onPress = async () => {
        const res = await signUp();
        console.log(res);
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
                    <Form text="비밀번호 확인"/>
                    <Button style={{width: '100%', height: 70, marginTop: 30, borderRadius: 20}} text="회원가입 완료" onPress={onPress}/>
                </Container>
            </ScrollView>
        </>
    )
}

export default SignUpPage;