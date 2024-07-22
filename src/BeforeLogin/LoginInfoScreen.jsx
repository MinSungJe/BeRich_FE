import { Button, Text } from '@rneui/base';
import { View } from 'react-native';
import { ButtonStyles } from '../Styles/Button.style';
import { BoxStyles } from '../Styles/Box.style';
import { TextStyles } from '../Styles/Text.style';

export default function LoginInfoScreen({navigation}) {
    return (
        <View style={[BoxStyles.ContainerBox, BoxStyles.JCCenter]}>
            <Text style={TextStyles.Main}>여기서 로그인하세요!!</Text>
            <View style={[{ flexDirection: 'row' }, BoxStyles.MainBox]}>
                <Button onPress={()=>{navigation.navigate('Login')}} buttonStyle={ButtonStyles.MainButton}>로그인 {'>'}</Button>
                <Button onPress={()=>{navigation.navigate('Register')}}buttonStyle={ButtonStyles.MainButton}>회원가입 {'>'}</Button>
            </View>
        </View>
    );
}