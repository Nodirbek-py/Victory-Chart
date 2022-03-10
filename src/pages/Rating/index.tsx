import React from 'react';
import * as V from "victory";

import { datas, colors, categories } from "./data"
import Chart from '../../shared/ChartWrapper';

const Distribution = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Distribution chart</h1>
            <Chart>
                <V.VictoryChart domainPadding={{ x: [30, 30], y: 20 }} padding={{ top: 0, bottom: 100, left: 40, right: 0 }}>
                    <V.VictoryAxis label={"Number"} dependentAxis style={{
                        grid: { stroke: "lightBlue" },
                    }} />
                    <V.VictoryAxis crossAxis />
                    <V.VictoryStack colorScale={colors} animate={{
                        duration: 1000,
                        onLoad: { duration: 700 }
                    }}>
                        {datas.map((data, index) => {
                            return (
                                <V.VictoryBar horizontal key={index}
                                    barRatio={0.8}
                                    data={data}
                                />
                            )
                        })}
                    </V.VictoryStack>
                    <V.VictoryLegend x={10} y={265}
                        title="Category types: "
                        titleOrientation="left"
                        orientation="horizontal"
                        colorScale={colors}
                        style={{
                            title: { fontSize: 20 }
                        }}
                        data={categories}
                    />
                </V.VictoryChart>
            </Chart >
        </>
    )
}

export default Distribution