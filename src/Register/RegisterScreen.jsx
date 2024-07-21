import { Text, View } from 'react-native';
import { BoxStyles } from '../Styles/Box.style';
import { TextStyles } from '../Styles/Text.style';
import { EmailInput, LabelInput, LabelSecretInput } from '../Components/Input';
import { Skeleton } from '@rneui/base';

export default function RegisterScreen() {
    return (
        <View style={BoxStyles.ContainerBox}>
            <Text style={TextStyles.Title}>회원가입 창임</Text>
            <LabelInput label={'ID'} placeholder={'아이디를 입력해주세요'}></LabelInput>
            <LabelSecretInput label={'PW'} placeholder={'비밀번호를 입력해주세요'}></LabelSecretInput>
            <EmailInput label={'E-mail'} placeholder={'이메일 ID'}></EmailInput>
        </View>
    );
}