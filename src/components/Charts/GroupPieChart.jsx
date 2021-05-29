import React from 'react'
import { VictoryPie } from 'victory';

export default function GroupPieChart({ maior, meio, menor }) {
    return (
        <VictoryPie
            innerRadius={({ datum }) => datum.y + 70}
            cornerRadius = {14}
            colorScale={["#A23232", "#4d1717", "#270c0c" ]}
            data={[
                { x: maior.nome, y: maior.porcentagem },
                { x: meio.nome, y: meio.porcentagem},
                { x: menor.nome, y: menor.porcentagem}
            ]}
            style={{
                labels: {
                    display: "none"
                }
            }}
        />
    )
}
