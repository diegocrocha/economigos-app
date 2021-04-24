import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme } from 'victory';

export default function GroupBarChart() {
    return (
        <VictoryChart domainPadding={{ x: 125 }} 
          animate={{duration: 350}}
          labelComponent={<VictoryTooltip/>} 
          width={1700}
          height={600}
          >
            <VictoryAxis 
            key="x-axis"
            style={{
                tickLabels: {
                    fontSize: 44,
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fill: "#4d4d4d"
                }}}
                theme={VictoryTheme.material}/>    
            <VictoryAxis
                dependentAxis 
                orientation="left"
                style={{
                tickLabels: {
                    fontSize: 50,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fill: "#4d4d4d"
                }}}/>
          <VictoryGroup offset={12}>
            <VictoryBar 
                cornerRadius={{topLeft: 20, topRight: 20}}
                alignment="end"
                style={{data: { fill: "rgb(50, 162, 135)", width: 40 }}}
                data={[{ x: "Janeiro", y: 400}, { x: "Fevereiro", y: 120.0 }, { x: "Março", y: 502.0 }, { x: "Abril", y: 690.0 }, { x: "Maio", y: 340.0 }]}/>
            <VictoryBar 
                cornerRadius={{topLeft: 20, topRight: 20}}
                alignment="start"
                style={{data: { fill: "#A23232", width: 40 }}}
                data={[{ x: "Janeiro", y: 110.0 }, { x: "Fevereiro", y: 240.0 }, { x: "Março", y: 200.0 }, { x: "Abril", y: 500.0 }, { x: "Maio", y: 100.0 }]} />
          </VictoryGroup>
          
        </VictoryChart>
    )
}
