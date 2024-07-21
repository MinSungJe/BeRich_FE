import { StyleSheet } from "react-native";
import { Color } from "../resource/Color";

export const BoxStyles = StyleSheet.create({
    W100: {
        width: '100%'
    },

    JCCenter: {
        justifyContent: 'center',
    },

    AICenter: {
        alignContent: 'center'
    },

    P10: {
        padding: 10
    },

    Flex1: {
        flex: 1
    },

    ContainerBox: {
        width: '100%',
        padding: 10,
        flex: 1,
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