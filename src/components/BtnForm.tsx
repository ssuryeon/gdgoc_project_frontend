import Input from './Input';
import Button from './Button';
import CustomText from './CustomText';
import {View} from 'react-native';
import styled from 'styled-components/native';

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
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24}}>{text}</CustomText>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <Input style={{flex: 1, height: 50}}/><Button style={{width: '25%', height: 50, marginLeft: 10}} textStyle={{fontSize: 16}} text='중복확인'/>
            </View>
            <VerifyText>사용 가능한 {text}입니다.</VerifyText>
        </View>
    )
}

export default BtnForm;