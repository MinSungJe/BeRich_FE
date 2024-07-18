import { Button } from '@rneui/base';
import { Text, View } from 'react-native';
import { ButtonStyles } from '../Components/Btns/MainButton.style';

export default function LoginInfoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>여기서 로그인하세요!</Text>
            <Button buttonStyle={ButtonStyles.MainButton}>로그인 {'>'}</Button>
        </View>
    );
}