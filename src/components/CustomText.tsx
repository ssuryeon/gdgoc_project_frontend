import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomProps extends TextProps {}

const CustomText:React.FC<CustomProps> = ({style, ...rest}) => {
    const customStyle = {
        fontFamily: 'Pretendard-Regular',
    }
    return <Text style={[customStyle, style]} {...rest} />
}

export default CustomText;