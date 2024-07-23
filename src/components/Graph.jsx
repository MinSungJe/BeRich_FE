import { Text } from "@rneui/base";
import { TextStyles } from "../styles/Text.style";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function Graph({stock}) {

    return (
        <Text style={TextStyles.Detail}>{stock}</Text>
    )
}