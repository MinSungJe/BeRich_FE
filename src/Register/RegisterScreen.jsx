import { View } from 'react-native';
import { BoxStyles } from '../Styles/Box.style';
import { DateInput, EmailInput, LabelInput, LabelSecretInput, NameInput } from '../Components/Input';
import { Button } from '@rneui/base';
import { ButtonStyles } from '../Styles/Button.style';

export default function RegisterScreen() {
    return (
        <View style={BoxStyles.ContainerBox}>
            <LabelInput label={'ID'} placeholder={'아이디를 입력해주세요'}></LabelInput>
            <LabelSecretInput label={'PW'} placeholder={'비밀번호를 입력해주세요'}></LabelSecretInput>
            <EmailInput label={'E-mail'} placeholder={'이메일 ID'}></EmailInput>
            <NameInput label={'이름'} placeholder1={'성을 입력해주세요'} placeholder2={'이름을 입력해주세요'}></NameInput>
            <DateInput label={'생년월일'}></DateInput>
            <Button buttonStyle={ButtonStyles.MainButton} title={'회원가입'}></Button>
        </View>
    );
}