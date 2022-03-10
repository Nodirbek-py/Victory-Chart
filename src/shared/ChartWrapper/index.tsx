import React from 'react';

import * as Styled from "./style"

interface IProps {
    children: React.ReactNode;
    width?: string;
}

const Chart = (props: IProps) => {
    return (
        <Styled.ChartWrapper width={props.width}>
            {props.children}
        </Styled.ChartWrapper>
    )
}

export default Chart;