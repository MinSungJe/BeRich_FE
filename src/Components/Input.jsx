import { View } from 'react-native';
import { BoxStyles } from '../Styles/Box.style';
import { TextStyles } from '../Styles/Text.style';
import { Input, Text } from '@rneui/base';

export function LabelInput({ label, placeholder }) {
    return (
        <View style={BoxStyles.P10}>
            <Text style={TextStyles.Main}>{label}</Text>
            <Input placeholder={placeholder} />
        </View>
    )
}

export function LabelSecretInput({ label, placeholder }) {
    return (
        <View style={BoxStyles.P10}>
            <Text style={TextStyles.Main}>{label}</Text>
            <Input placeholder={placeholder} secureTextEntry={true} />
        </View>
    )
}

export function EmailInput({ label, placeholder }) {
    return (
        <View style={BoxStyles.P10}>
            <Text style={TextStyles.Main}>{label}</Text>
            <View style={[{ flexDirection: 'row'}, BoxStyles.W100, BoxStyles.JCCenter, BoxStyles.AICenter]}>
                <Input containerStyle={{ flex: 1 }} placeholder={placeholder} />
                <Text style={{flexShrink: 0, textAlignVertical: 'center'}}>@</Text>
                <Input containerStyle={{ flex: 1 }} placeholder={placeholder} />
            </View>
        </View>
    )
}