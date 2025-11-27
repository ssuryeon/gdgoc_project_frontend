import Header from '../components/Header';
import styled from 'styled-components/native';
import ProfileIcon from '../components/ProfileIcon';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import Button from '../components/Button';
import {View, ScrollView} from 'react-native';
import {Container} from '../components/Container';

const ModifyPage = () => {
    return (
        <>
            <Header text='프로필 수정' />
            <ScrollView style={{width: '100%'}}>
                <Container style={{padding: 30}}>
                    <View style={{width: '100%', marginBottom: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <ProfileIcon />
                        <Button text="이미지 수정" style={{width: 100, height: 40}} textStyle={{fontSize: 16}}/>
                    </View>
                    <Form text="이름"/>
                    <Form text="닉네임"/>
                    <BtnForm text="아이디" />
                    <BtnForm text="전화번호" />
                    <Form text="비밀번호"/>
                    <Form text="비밀번호 확인"/>
                    <Button text="프로필 수정" style={{marginTop: 10, width: '100%', height: 70}}/>
                </Container>
            </ScrollView>
        </>
    )
}

export default ModifyPage;