import React from 'react';
import * as V from "victory";

import Chart from '../../shared/ChartWrapper';
import { data, colors, categories } from "./data"

const Performance = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Performance over time</h1>
            <Chart width={"100"}>
                <V.VictoryChart domainPadding={{ x: [30, 30], y: 20 }} padding={{ top: 0, bottom: 100, left: 40, right: 0 }}>
                    <V.VictoryAxis dependentAxis />
                    <V.VictoryAxis padding={{ top: 25 }} label={"Reporting Period: 2022"} crossAxis style={{
                        grid: { stroke: "lightBlue" },
                        axisLabel: { padding: 40 }
                    }} />
                    <V.VictoryStack animate={{
                        duration: 1000,
                        onLoad: { duration: 700 }
                    }}>
                        {data.map((data, index) => {
                            return (<V.VictoryLine key={index}
                                style={{
                                    data: { stroke: colors[index] },
                                    parent: { border: "1px solid #ccc" }
                                }}
                                data={data}
                            />)
                        })}
                    </V.VictoryStack>
                </V.VictoryChart>
                <V.VictoryLegend
                    orientation="vertical"
                    colorScale={colors}
                    style={{
                        title: { fontSize: 20 }
                    }}
                    data={categories}
                />
            </Chart >
        </>
    )
}

export default Performance;