import React from 'react';

import profileItems from './Databases/user.json';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { Layout } from './Layout';
import { Container } from '../stlyles/GlobalStyle';

import uploadStats from './Databases/data.json';
import { Statistics } from './Statistics/Statistics';

import friendsData from './Databases/friends.json';
import { FriendListContainer } from './FriendListContainer/FriendsListContainer';

import transactions from './Databases/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Container>
        <ProfileCard
          username={profileItems.username}
          avatar={profileItems.avatar}
          tag={profileItems.tag}
          location={profileItems.location}
          followers={profileItems.stats.followers}
          views={profileItems.stats.views}
          likes={profileItems.stats.likes}
        />
      </Container>
      <Statistics title="Upload stats" stats={uploadStats} />
      <FriendListContainer friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </Layout>
  );
};
