import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from "@rneui/base";
import { ScrollView, View } from "react-native";
import { StockPicker } from "../../components/StockPicker";
import { BoxStyles } from "../../styles/Box.style";
import { TextStyles } from "../../styles/Text.style";
import { Graph } from '../../components/Graph';
import { useState } from 'react';
import News from '../../components/News';

export default function StockScreen() {
    const [stock, setStock] = useState('')

    return (
        <View style={BoxStyles.P10}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[BoxStyles.MainBox, BoxStyles.Mb20]}>
                    <Text style={TextStyles.Detail}><MaterialCommunityIcons name="cursor-default" size={16} /> 주식 선택</Text>
                    <StockPicker stock={stock} setStock={setStock} />
                </View>
                <View style={[BoxStyles.MainBox, BoxStyles.Mb20]}>
                    <Text style={TextStyles.Detail}><MaterialCommunityIcons name="chart-line" size={16} /> 주식 그래프</Text>
                    <Graph stock={stock} />
                </View>
                <View style={[BoxStyles.MainBox]}>
                    <Text style={[TextStyles.Detail, BoxStyles.Mb10]}><MaterialCommunityIcons name="newspaper" size={16} /> AI 뉴스 요약</Text>
                    <News stock={stock} />
                </View>
            </ScrollView>
        </View>
    )
}