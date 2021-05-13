import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme } from 'victory';

export default function GroupBarChart({dataReceitas, dataGastos}) {
    
    let fontSizeLabelX = dataReceitas.length == 3 ? 30 : 44;
    let fontSizeLabelY = dataReceitas.length == 3 ? 35 : 50;

    return (
        <VictoryChart 
            domainPadding={{ x: [300, 50], y: [100, 0] }}
            animate={{
                duration: 600,
                onLoad: { duration: 500 }
              }}
            labelComponent={<VictoryTooltip />}
            width={dataReceitas.length == 3 ? 750 : 1700}
            height={dataReceitas.length == 3 ? 400 : 600}
        >
            <VictoryAxis
                key="x-axis"
                style={{
                    tickLabels: {
                        fontSize: fontSizeLabelX,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fill: "#4d4d4d"
                    }
                }}
                theme={VictoryTheme.material} />
            <VictoryAxis
                // tickFormat={(t) => `${Math.round(t)}k`}
                dependentAxis
                orientation="left"
                style={{
                    tickLabels: {
                        fontSize: fontSizeLabelY,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fill: "#4d4d4d"
                    }
                }} />
            <VictoryGroup offset={12}>
                <VictoryBar
                    cornerRadius={{ topLeft: 20, topRight: 20 }}
                    alignment="end"
                    style={{ data: { fill: "rgb(50, 162, 135)", width: 35 } }}
                    data={dataReceitas} />
                <VictoryBar
                    cornerRadius={{ topLeft: 20, topRight: 20 }}
                    alignment="start"
                    style={{ data: { fill: "#A23232", width: 35 } }}
                    data={dataGastos} />
            </VictoryGroup>

        </VictoryChart>
    )
}
