import { Text } from "@rneui/base";
import { TextStyles } from "../styles/Text.style";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function Graph() {
    const { state, setState } = useContext(AppContext);

    return (
        <Text style={TextStyles.Detail}>{state.selectedStock}</Text>
    )
}