import React from 'react';
import PropTypes from 'prop-types';

import {
  DataTransactionText,
  MainTransactionContainer,
  TableHeader,
  TableOperationHistory,
  TableStyleHead,
  TextTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <MainTransactionContainer>
      <TableStyleHead>
        <TableHeader>
          <TextTable>Type</TextTable>
          <TextTable>Amount</TextTable>
          <TextTable>Currency</TextTable>
        </TableHeader>
      </TableStyleHead>

      <tbody>
        {items.map(item => (
          <TableOperationHistory key={item.id}>
            <DataTransactionText>{item.type}</DataTransactionText>
            <DataTransactionText>{item.amount}</DataTransactionText>
            <DataTransactionText>{item.currency}</DataTransactionText>
          </TableOperationHistory>
        ))}
      </tbody>
    </MainTransactionContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
