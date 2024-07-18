import { Button } from '@rneui/base';
import { Text, View } from 'react-native';
import { ButtonStyles } from '../Components/Btns/MainButton.style';

export default function LoginInfoScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>여기서 로그인하세요!</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={()=>{navigation.navigate('Login')}} buttonStyle={ButtonStyles.MainButton}>로그인 {'>'}</Button>
                <Button onPress={()=>{navigation.navigate('Register')}}buttonStyle={ButtonStyles.MainButton}>회원가입 {'>'}</Button>
            </View>
        </View>
    );
}