import { Item, ItemLabel, ItemPercentage } from "./StatCardDetailed.styled";
import PropTypes from 'prop-types';
import React from 'react';

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
} 

export const StatCardDetailed = ({ stat: { label, percentage, id } }) => {

  return (
        
    <Item style={{ backgroundColor: getRandomHexColor() }}>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </Item>
    );
}

StatCardDetailed.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};