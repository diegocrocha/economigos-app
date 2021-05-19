import React from 'react'
import { VictoryPie, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme } from 'victory';

export default function GroupPieChart({ dataCategorias }) {
    return (
        <VictoryPie
            innerRadius={({ datum }) => datum.y + 70}
            cornerRadius = {14}
            colorScale={["gold", "cyan", "navy" ]}
            data={[
                // dataCategorias.map(dado => (
                //     { x: dado.key, y: dado.value }
                // ))
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}
            style={{
                labels: {
                    display: "none"   
                }
            }}
        />
    )
}
