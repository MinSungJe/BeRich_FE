import { StyleSheet } from "react-native";
import { Color } from "../resource/Color";

export const BoxStyles = StyleSheet.create({
    ContainerBox: {
        width: '100%',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

	MainBox: {
        width: '100%',
        padding: 20,
        borderRadius: 10,

        // 테두리
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Color.MainColor,
    }
})