import { StatCardDetailed } from '../StatCardDetailed/StatCardDetailed';
import { NameStatTable, StatList } from './Statistics.styled';
import { StatContainer } from './StatContainer.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const Statistics = ({ stats, title }) => {
  return (
    <StatContainer>
      {title && <NameStatTable>{title}</NameStatTable>}
      <StatList>
        {stats.map(stat => (
          <StatCardDetailed stat={stat} key={stat.id} />
        ))}
      </StatList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Другие ожидаемые свойства для объекта внутри массива stats
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
