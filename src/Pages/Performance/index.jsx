import React from "react";
import * as V from "victory";

import Chart from "../../Shared/ChartWrapper";
import { data, colors, categories } from "./data";

const Performance = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Performance over time</h1>
      <Chart>
        <V.VictoryChart
          domainPadding={{ x: [10, 10], y: 20 }}
          padding={{ top: 0, bottom: 100, left: 90, right: 0 }}
        >
          <V.VictoryAxis
            dependentAxis
            axisLabelComponent={<V.VictoryLabel dy={-55} />}
            tickFormat={(t) => {
              if (t === 20) return "Low";
              else if (t === 40) return "Medium";
              else if (t === 60) return "High";
              else return "Very High";
            }}
            label={"Performance"}
            style={{
              axisLabel: {
                fontSize: 12,
              },
              ticks: { size: 12 },
            }}
          />
          <V.VictoryAxis
            padding={{ top: 25 }}
            label={"Reporting Period: 2022"}
            crossAxis
            style={{
              grid: { stroke: "lightBlue" },
              axisLabel: { padding: 40 },
            }}
          />
          <V.VictoryStack
            animate={{
              duration: 1000,
              onLoad: { duration: 700 },
            }}
          >
            {data.map((data, index) => {
              return (
                <V.VictoryLine
                  key={index}
                  style={{
                    data: { stroke: colors[index] },
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={data}
                />
              );
            })}
          </V.VictoryStack>
          <V.VictoryLegend
            y={265}
            x={150}
            orientation="horizontal"
            colorScale={colors}
            style={{
              title: { fontSize: 20 },
            }}
            data={categories}
          />
        </V.VictoryChart>
      </Chart>
    </>
  );
};

export default Performance;
