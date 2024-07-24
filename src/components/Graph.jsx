import { processColor, View } from 'react-native';
import { stockData } from "../resource/StockData";
import { CandleStickChart } from 'react-native-charts-wrapper';
import { BoxStyles } from '../styles/Box.style';

export function Graph({ stock }) {
    // api에서 필요한 data 불러오기
    const data = stockData;

    return (
        <CandleStickChart
            style={[BoxStyles.W100, {height: 400}]}
            data={{
                dataSets: [{
                    values: data,
                    label: 'Candle Data',
                    config: {
                        color: processColor('teal'),
                        shadowColor: processColor('black'),
                        shadowWidth: 1,
                        shadowColorSameAsCandle: true,
                        increasingColor: processColor('green'),
                        increasingPaintStyle: 'FILL',
                        decreasingColor: processColor('red'),
                        decreasingPaintStyle: 'FILL',
                    }
                }]
            }}
        />
    );
}
