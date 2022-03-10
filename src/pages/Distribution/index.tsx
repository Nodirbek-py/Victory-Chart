import React from 'react';
import * as V from "victory"

import Chart from '../../shared/ChartWrapper';
import PieLabel from './components/PieLabel';
import { categories, data } from "./data"

const Rating = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Distribution by type</h1>
            <Chart width={"90%"}>
                {data.map((data, i) => {
                    return (
                        <div style={{ position: 'relative' }}>
                            <V.VictoryPie
                                key={i}
                                startAngle={-30}
                                endAngle={-390}
                                colorScale={data.colors}
                                style={{ labels: { fontSize: 24, padding: 20 } }}
                                animate={{
                                    duration: 1000
                                }}
                                innerRadius={100}
                                data={data.data}
                            />
                            <PieLabel text={data.name} />
                        </div>
                    )
                })}
            </Chart >
            <V.VictoryLegend x={125} y={0}
                orientation="horizontal"
                data={categories}
            />
        </>
    )
}

export default Rating;