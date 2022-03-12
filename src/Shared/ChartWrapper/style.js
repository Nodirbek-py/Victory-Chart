import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 15px;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;
