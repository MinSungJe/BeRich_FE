import React, { useEffect, useState } from 'react';
import { processColor, View } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { BoxStyles } from '../styles/Box.style';
import { stockData } from "../resource/StockData";
import { dateFormatter, processLineData } from '../resource/ParseData';
import { Color } from '../resource/Color';

export function LineGraph({ stock }) {
    const [lineChartData, setLineChartData] = useState([]);

    useEffect(() => {
        // API에서 필요한 데이터 불러오기
        const temp = processLineData(stockData);
        setLineChartData(temp);
    }, []);

    // x축 레이블에 사용할 timestamp 배열 생성
    const timestamps = (lineChartData.map(item => item.timestamp)).map(item => dateFormatter(item));

    return (
        <View style={[{ height: 500 }, BoxStyles.ContainerBox]}>
            <LineChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: lineChartData,
                        label: '주식 그래프(종가)',
                        config: {
                            color: processColor(Color.MainColor),
                            drawValues: true,
                            lineWidth: 2,
                            drawCircles: false,
                        }
                    }]
                }}
                chartDescription={{ text: '' }}
                legend={{
                    enabled: true,
                    textSize: 14,
                    form: 'SQUARE',
                    formSize: 14,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    wordWrapEnabled: true
                }}
                xAxis={{
                    drawLabels: true,
                    position: 'BOTTOM',
                    valueFormatter: timestamps, // timestamps로 x축 결정
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
                    scaleX: 1, // 초기 확대 비율
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
