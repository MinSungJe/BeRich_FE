import { Text, View } from 'react-native';
import { BoxStyles } from '../Styles/Box.style';
import { TextStyles } from '../Styles/Text.style';
import { Input } from '@rneui/base';

export default function RegisterScreen() {
    return (
        <View style={BoxStyles.ContainerBox}>
            <Text style={TextStyles.Title}>회원가입 창임</Text>
            <LabelInput label={'ID'}></LabelInput>
            <LabelInput label={'PW'}></LabelInput>
            <LabelInput label={'Email'}></LabelInput>
        </View>
    );
}

function LabelInput({label}) {
    return (
        <View style={BoxStyles.P10}>
            <Text style={TextStyles.Main}>{label}</Text>
            <Input secureTextEntry={label === 'PW'} />
        </View>
    )
}