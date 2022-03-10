import React from 'react';

import * as Styled from "./style"

interface IProps {
    text: string
}

const PieLabel = (props: IProps) => {
    return (
        <Styled.Label>{props.text}</Styled.Label>
    )
}

export default PieLabel;