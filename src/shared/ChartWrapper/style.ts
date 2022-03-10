import styled from 'styled-components';

interface IProps {
  width?: string;
}

export const ChartWrapper = styled.div`
  width: ${(props: IProps) => (props.width ? props.width : '50%')};
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    margin: 0 100px;
  }
`;
