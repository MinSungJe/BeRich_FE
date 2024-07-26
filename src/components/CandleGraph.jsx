import React, { useEffect, useState } from 'react';
import { processColor, View } from 'react-native';
import { stockData } from "../resource/StockData";
import { CandleStickChart } from 'react-native-charts-wrapper';
import { BoxStyles } from '../styles/Box.style';
import { processCandleData } from '../resource/ParseData';

export function CandleGraph({ stock }) {
    let [candleChartData, setCandleChartData] = useState([{"x":1719360000000,"open":80100.0,"shadowH":81000.0,"shadowL":79900.0,"close":80600.0,"Volume":0}])

    useEffect(() => {
        // api에서 필요한 data 불러오기
        const temp = processCandleData(stockData);
        setCandleChartData(temp)
    }, [])

    return (
        <View style={[{ height: 500 }, BoxStyles.ContainerBox]}>
            <CandleStickChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: candleChartData,
                        label: 'Candle Data',
                        config: {
                            color: processColor('teal'),
                            shadowColor: processColor('black'),
                            shadowWidth: 1,
                            shadowColorSameAsCandle: true,
                            increasingColor: processColor('green'),
                            decreasingColor: processColor('red'),
                            increasingPaintStyle: 'FILL',
                            decreasingPaintStyle: 'FILL',
                        }
                    }]
                }}
                chartDescription={{ text: '' }}
                legend={{
                    enabled: true,
                    textColor: processColor('black'),
                    textSize: 12,
                    form: 'SQUARE',
                    formSize: 12,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5
                }}
                xAxis={{
                    drawLabels: true,
                    position: 'BOTTOM',
                    valueFormatter: 'date',
                    valueFormatterPattern: 'MM-dd-hh',
                    labelCount: 6,
                    granularityEnabled: true,
                    granularity: 1,
                    drawGridLines: false,
                    axisLineColor: processColor('grey'),
                    axisLineWidth: 1,
                    textColor: processColor('black'),
                    textSize: 12,
                }}
                yAxis={{
                    left: {
                        drawLabels: true,
                        drawAxisLine: true,
                        drawGridLines: true,
                        axisLineColor: processColor('grey'),
                        axisLineWidth: 1,
                        textColor: processColor('black'),
                        textSize: 12,
                    },
                    right: {
                        enabled: false
                    }
                }}
                autoScaleMinMaxEnabled={true}
                doubleTapToZoomEnabled={false}
                scaleXEnabled={true}
                scaleYEnabled={true}
                zoom={{
                    scaleX: 2, // 확대 비율 설정
                    scaleY: 1,
                    xValue: 0,
                    yValue: 0,
                    axisDependency: 'LEFT'
                }}
                pinchZoom={true}
                keepPositionOnRotation={false}
            />
        </View>
    );
}
