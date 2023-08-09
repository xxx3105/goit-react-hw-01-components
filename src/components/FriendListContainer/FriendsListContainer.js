import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsListContainer } from './FriendsListContainer.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const FriendListContainer = ({ friends }) => {
  return (
    <FriendsListContainer>
      {friends.map(friend => (
        <FriendListItem
          status={friend.isOnline.toString()}
          key={friend.id}
          src={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendsListContainer>
  );
};

FriendListContainer.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
