import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory';

export default function GroupPieChart({ maior, meio, menor }) {
    return (
        <VictoryPie
            innerRadius={140}
            cornerRadius = {7}
            colorScale={["#A23232", "#4d1717", "#270c0c", "#000" ]}
            data={[
                { x: maior.nome, y: maior.porcentagem },
                { x: meio.nome, y: meio.porcentagem},
                { x: menor.nome, y: menor.porcentagem},
                { x: "outros", y: 100 - (maior.porcentagem + meio.porcentagem + menor.porcentagem)}
            ]}
            style={{
                data: { width: 35 }, labels: { fill: "white", fontSize: 35, fontWeight: 700 }, width: 35
            }}
            padding = {20}
            labels={({ datum }) => `${Number(datum.y).toLocaleString('pt-br', { minimumFractionDigits: 0 })}%`}
            labelComponent={
                <VictoryTooltip
                    cornerRadius={15}
                    pointerLength={0}
                    centerOffset={{ x: -10 }}
                    flyoutWidth={180}
                    flyoutHeight={60}
                    flyoutStyle={{ stroke: "#A23232", strokeWidth: 2, fill: "#A23232"}}
                    dx={-7}
                />
            }
        />
    )
}
