import Input from './Input';
import Button from './Button';
import CustomText from './CustomText';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useContext, useState} from 'react';
import {UserContext} from '../contexts/UserContext';
import {checkUsername, checkEmail, checkPhone} from '../utils/signupUser';

interface IForm {
    text: string,
    defaultVal?: string,
}

const VerifyText = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.grayText};
    margin-top: 10px;
`;

const BtnForm = ({text, defaultVal}:IForm) => {
    const {actions} = useContext(UserContext);
    const [value, setValue] = useState(defaultVal ?? '');
    const [available, setAvailable] = useState(false);
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
        console.log('Btn pressed.');
        switch(text) {
            case '아이디':
                const usernameRes = await checkUsername(value);
                setAvailable(usernameRes);
                break;
            case '전화번호':
                const phoneResult = await checkPhone(value);
                if(phoneResult != 'error') {
                    console.log(phoneResult);
                }
                break;
            case '이메일':
                const emailRes = await checkEmail(value);
                setAvailable(emailRes);
                break;
        }
        console.log('Server worked.');
    };

    // useEffect(() => {
    //     console.log('전역 username 변경:', state.username);
    // }, [state.username]);

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