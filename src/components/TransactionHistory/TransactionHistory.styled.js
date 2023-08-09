import styled from 'styled-components';

export const MainTransactionContainer = styled.table`
  width: 600px;
  height: 400px;
  background-color: white;
  position: absolute;
  bottom: -2200px;
  left: 420px;
  margin-bottom: 200px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TableOperationHistory = styled.tr`
  background-color: white;

  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

export const TableHeader = styled.tr`
  background-color: #00bcd5;
  padding: 5px;
`;

export const TextTable = styled.th`
  color: white;
  padding: 10px;
`;

export const TableStyleHead = styled.thead``;

export const DataTransactionText = styled.td`
  color: grey;
  padding: 10px;
  text-align: center;
`;
