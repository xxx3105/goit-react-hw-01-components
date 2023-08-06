import { Item, ItemLabel, ItemPercentage } from "./StatCardDetailed.styled";

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