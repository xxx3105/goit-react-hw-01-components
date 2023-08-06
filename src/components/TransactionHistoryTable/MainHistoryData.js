import { DataTransactionText, MainTransactionContainer, TableHeader, TableOperationHistory, TableStyleHead, TextTable } from "./MainHistoryData.styled";

 
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

 