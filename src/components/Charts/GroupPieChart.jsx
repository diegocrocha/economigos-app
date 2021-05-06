import React from 'react'
import { VictoryPie, VictoryChart, VictoryGroup, VictoryTooltip, VictoryAxis, VictoryTheme } from 'victory';

export default function GroupPieChart({ dataCategorias }) {
    return (
        <VictoryPie
            innerRadius={({ datum }) => datum.y * 20}
            data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}
        />
    )
}
