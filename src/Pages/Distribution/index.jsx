import React from "react";
import * as V from "victory";

import Chart from "../../Shared/ChartWrapper";
import { categories, data } from "./data";

const Distribution = () => {
  let colors = [];
  data.forEach((pie) => {
    let color = [];
    pie.data.forEach((data) => {
      color.push(data.color);
    });
    colors.push(color);
  });
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Distribution by type</h1>
      <Chart direction={"column"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {data.map((data, i) => {
            return (
              <svg viewBox="0 0 400 400" key={i}>
                <V.VictoryPie
                  startAngle={-30}
                  standalone={false}
                  width={400}
                  height={400}
                  endAngle={-390}
                  colorScale={colors[i]}
                  style={{ labels: { fontSize: 24, padding: 20 } }}
                  animate={{
                    duration: 1000,
                  }}
                  innerRadius={100}
                  data={data.data}
                />
                <V.VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 32 }}
                  x={200}
                  y={200}
                  text={data.name}
                />
              </svg>
            );
          })}
        </div>

        <V.VictoryLegend
          height={25}
          x={150}
          y={10}
          orientation="horizontal"
          data={categories}
          symbolSpacer={5}
          style={{
            labels: { fontSize: 16 },
          }}
        />
      </Chart>
    </>
  );
};

export default Distribution;
