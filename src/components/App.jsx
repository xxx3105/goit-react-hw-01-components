import { GlobalStyle } from "./GlobalStyle";
import profileItems from './Databases/user.json';
import { ProfileCard } from "./ProfilCard/ProfileCard";
import { Layout } from "./Layout";
import { ObjectsContainer } from "./ObjectsContainer";

import uploadStats from './Databases/data.json';
import { Statistics } from "./UploadStat/Statistics";

import friendsData from './Databases/friends.json'
import { FriendList } from "./FriendList/FriendsListContainer";

import transactions from './Databases/transactions.json'
import { TransactionHistory } from "./TransactionHistoryTable/MainHistoryData";

export const App = () => {
  return (
    <Layout>
      <ObjectsContainer>
      <ProfileCard
      username={profileItems.username}
      avatar={profileItems.avatar}
      tag={profileItems.tag}
      location={profileItems.location}
      followers={profileItems.stats.followers}
      views={profileItems.stats.views}
      likes={profileItems.stats.likes}
      />
      </ObjectsContainer>

      <Statistics title="Upload stats" stats={uploadStats} />
      

      <FriendList friends={friendsData}/>

      <TransactionHistory items={transactions} />; 

      <GlobalStyle />
    </Layout>
  );
};
