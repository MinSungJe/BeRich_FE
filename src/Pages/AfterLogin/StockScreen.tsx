import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from "@rneui/base";
import { View } from "react-native";
import { StockPicker } from "../../components/StockPicker";
import { BoxStyles } from "../../styles/Box.style";
import { TextStyles } from "../../styles/Text.style";
import { Graph } from '../../components/Graph';

export default function StockScreen() {
    return (
        <View style={BoxStyles.P10}>
            <View style={[BoxStyles.MainBox, BoxStyles.Mb20]}>
                <Text style={TextStyles.Detail}><MaterialCommunityIcons name="cursor-default" size={16} /> 주식 선택</Text>
                <StockPicker />
            </View>
            <View style={[BoxStyles.MainBox, BoxStyles.Mb20]}>
                <Text style={TextStyles.Detail}><MaterialCommunityIcons name="chart-line" size={16} /> 주식 그래프</Text>
                <Graph />
            </View>
            <View style={[BoxStyles.MainBox, BoxStyles.Mb20]}>
                <Text style={TextStyles.Detail}><MaterialCommunityIcons name="newspaper" size={16} /> AI 뉴스 요약</Text>
            </View>
        </View>
    )
}