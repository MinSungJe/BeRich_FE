import { Text, View } from 'react-native';

function Screen_1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>환영합니다!</Text>
        </View>
    );
}

function Screen_2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>우리의 앱에 오신걸 환영해요!</Text>
        </View>
    );
}

function Screen_3() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>여기서 로그인하세요!</Text>
        </View>
    );
}

export {Screen_1, Screen_2, Screen_3}
