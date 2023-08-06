 
import { StatCardDetailed } from "../StatCardDetailed/StatCardDetailed" 
import { NameStatTable, StatList } from "./Statistics.styled";
import { StatContainer } from "./StatContainer";


export const Statistics = ({ stats,title }) => {
    return (<StatContainer>
        <NameStatTable>{title}</NameStatTable>
        <StatList>
           {stats.map(stat => (
              <StatCardDetailed stat={stat} key={stat.id} />
           ))}
        </StatList>
    </StatContainer>

    );
};

   