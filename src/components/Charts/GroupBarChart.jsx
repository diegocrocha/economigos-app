import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';

export default function GroupBarChart({ dataReceitas, dataGastos }) {

    let fontSizeLabelY = 30;

    return (
        <VictoryChart
            domainPadding={{ x: [300, 50], y: [100, 0] }}
            animate={{
                duration: 600,
                onLoad: { duration: 500 }
            }}
            labelComponent={<VictoryTooltip />}
            width={dataReceitas.length == 3 || dataGastos.length == 3 ? 600 : 900}
        >
            <VictoryAxis
                key="x-axis"
                style={{
                    tickLabels: {
                        fontSize: 30,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fill: "#4d4d4d"
                    }
                }}
                theme={VictoryTheme.material} />
            <VictoryAxis
                tickFormat={(t) => t >= 1000 ? `${Math.round(t / 1000)}k` : t}
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
                    style={{
                        data: { fill: "rgb(50, 162, 135)", width: 35 }, labels: { fill: "white", fontSize: 25, fontWeight: 700 }, width: 35
                    }}
                    data={dataReceitas}
                    labels={({ datum }) => Number(datum.y).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={({ datum }) => 15}
                            pointerLength={({ datum }) => 0}
                            centerOffset={{ x: -10 }}
                            flyoutWidth={150}
                            flyoutHeight={50}
                            flyoutStyle={{ stroke: "rgb(50, 162, 135)", strokeWidth: 2, fill: "rgb(50, 162, 135)"}}
                            dx={-7}
                        />
                    }
                />
                <VictoryBar
                    cornerRadius={{ topLeft: 20, topRight: 20 }}
                    alignment="start"
                    style={{
                        data: { fill: "#A23232" , width: 35}, labels: { fill: "white", fontSize: 25, fontWeight: 700 }, width: 35
                    }}
                    data={dataGastos}
                    labels={({ datum }) => Number(datum.y).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    labelComponent={
                        <VictoryTooltip
                            cornerRadius={({ datum }) => 15}
                            pointerLength={({ datum }) => 0}
                            centerOffset={{ x: -10 }}
                            flyoutWidth={150}
                            flyoutHeight={50}
                            flyoutStyle={{ stroke: "#A23232", strokeWidth: 2, fill: "#A23232" }}
                            dx={27}
                        />
                    }/>
            </VictoryGroup>

        </VictoryChart>
    )
}
