import styled from 'styled-components/native';
import Header from '../components/Header';
import {View, ScrollView} from 'react-native';
import CustomText from '../components/CustomText';
import Input from '../components/Input';
import Button from '../components/Button';

const Container = styled.View`
    background-color: #fff;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
`;

interface IForm {
    text: string,
}

const Form = ({text}:IForm) => {
    var isVerify = false;
    if(text=="이메일" || text=="비밀번호") isVerify = true;
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontWeight: 600, fontSize: 24}}>{text}</CustomText>
            <Input style={{width: '100%', height: 50}}/>
            {isVerify? <VerifyText>사용 가능한 {text}입니다.</VerifyText> : null}
        </View>
    )
}

const VerifyText = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.grayText};
    margin-top: 10px;
`;

const SignUp = () => {
    return (
        <>
            <Header text="회원가입"/>
            <ScrollView style={{width: '100%'}}>
                <Container>
                    <Form text="이름"/>
                    <Form text="아이디"/>
                    <View style={{width: '100%', marginBottom: 20}}>
                        <CustomText style={{fontWeight: 600, fontSize: 24}}>전화번호</CustomText>
                        <View style={{width: '100%', flexDirection: 'row'}}>
                        <Input style={{flex: 1, height: 50}}/><Button style={{width: '25%', height: 50, marginLeft: 10}} textStyle={{fontSize: 16}} text='중복확인'/>
                        </View>
                    </View>
                    <Form text="이메일"/>
                    <Form text="비밀번호"/>
                    <Form text="비밀번호 확인"/>
                    <Button style={{width: '100%', height: 70, marginTop: 30, borderRadius: 20}} text="회원가입 완료"/>
                </Container>
            </ScrollView>
        </>
    )
}

export default SignUp;