import React from "react";
import * as V from "victory";

import { datas, colors, categories } from "./data";
import Chart from "../../Shared/ChartWrapper";

const Rating = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Rating chart</h1>
      <Chart>
        <V.VictoryChart
          domainPadding={{ x: [30, 30], y: 20 }}
          padding={{ top: 0, bottom: 100, left: 40, right: 0 }}
        >
          <V.VictoryAxis
            label={"Number"}
            dependentAxis
            style={{
              grid: { stroke: "lightBlue" },
            }}
          />
          <V.VictoryAxis crossAxis />
          <V.VictoryStack
            colorScale={colors}
            animate={{
              duration: 1000,
              onLoad: { duration: 700 },
            }}
          >
            {datas.map((data, index) => {
              return (
                <V.VictoryBar
                  horizontal
                  key={index}
                  barRatio={0.8}
                  data={data}
                />
              );
            })}
          </V.VictoryStack>
          <V.VictoryLegend
            centerTitle
            y={265}
            symbolSpacer={10}
            title={"Category types: "}
            gutter={25}
            titleComponent={
              <V.VictoryLabel dy={-5} dx={-5} style={{ fontSize: 14 }} />
            }
            titleOrientation="left"
            orientation="horizontal"
            colorScale={colors}
            style={{
              labels: { fontSize: 12 },
            }}
            data={categories}
          />
        </V.VictoryChart>
      </Chart>
    </>
  );
};

export default Rating;
