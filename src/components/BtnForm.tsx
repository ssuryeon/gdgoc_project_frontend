import Input from './Input';
import Button from './Button';
import CustomText from './CustomText';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useContext, useState} from 'react';
import UserContext from '../contexts/UserContext';
import {checkUserId, checkEmail} from '../utils/verifyUser';

interface IForm {
    text: string,
}

const VerifyText = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.grayText};
    margin-top: 10px;
`;

const BtnForm = ({text}:IForm) => {
    const {actions} = useContext(UserContext);
    const [value, setValue] = useState('');
    let available:any = false;

    const onChange = (e) => {
        const val = e.nativeEvent.text
        console.log(text, val);
        setValue(val);
        switch(text) {
            case '아이디':
                actions.setUsername(val);
                break;
            case '전화번호':
                actions.setPhone(val);
                break;
            case '이메일':
                actions.setEmail(val);
                break;
        }
    }
    
    const onPress = async () => {
        switch(text) {
            case '아이디':
                checkUserId(value)
                    .then((val) => {
                        console.log(val);
                        available = val;
                    })
                    .catch((error) => {
                        console.log('gRPC error >>>');
                        console.log('message:', error.message);
                        console.log('code:', error.code);
                        console.log('metadata:', error.metadata);
                    })
                break;
            case '전화번호':
                // const phoneResult = await checkPhone(value);
                // if(phoneResult != 'error') {
                //     available = true;
                // }
                break;
            case '이메일':
                checkEmail(value)
                    .then((val) => {
                        console.log(val);
                        available = val;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                break;
        }
    };

    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24}}>{text}</CustomText>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <Input style={{flex: 1, height: 50}} onChange={onChange} name={text} value={value} /><Button style={{width: '25%', height: 50, marginLeft: 10}} textStyle={{fontSize: 16}} onPress={onPress} text='중복확인'/>
            </View>
            {available? <VerifyText>사용 가능한 {text}입니다.</VerifyText> : null}
        </View>
    )
}

export default BtnForm;