import React from "react";

import * as Styled from "./style";

const Chart = (props) => {
  return (
    <Styled.ChartWrapper width={props.width} direction={props.direction}>
      {props.children}
    </Styled.ChartWrapper>
  );
};

export default Chart;
