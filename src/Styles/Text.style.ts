import { StyleSheet } from "react-native";
import { Color } from "../resource/Color";

export const TextStyles = StyleSheet.create({
	Title: {
        fontSize: 40,
        color: Color.MainColor,
        fontWeight: 'bold'
    },

    Main: {
        fontSize: 28,
        color: Color.MainColor
    },

    Detail: {
        fontSize: 16,
        color: Color.MainColor
    }
})