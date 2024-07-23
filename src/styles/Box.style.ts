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
        alignContent: 'center',
        alignItems: 'center'
    },

    P10: {
        padding: 10
    },

    Flex1: {
        flex: 1
    },

    MR10: {
        marginRight: 10
    },

    Mb10: {
        marginBottom: 10
    },
    Mb20: {
        marginBottom: 20
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
        backgroundColor: Color.White,

        // 테두리
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Color.MainColor,
    }
})