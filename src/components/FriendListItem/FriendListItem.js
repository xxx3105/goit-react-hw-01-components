 import { FriendsFormCont, FriendsImg, FriendsName, OnlineSignal } from "./FriendListItem.styled";
import PropTypes from 'prop-types';
import React from 'react';

export const FriendListItem = ({ friends }) => {
    return (
     <div>
      {friends.map(friend => (
        <FriendsFormCont key={friend.id}>
          <OnlineSignal status={friend.isOnline.toString()} />
          <FriendsImg src={friend.avatar} alt={friend.name} /> {/* Обратите внимание на alt */}
          <FriendsName>{friend.name}</FriendsName>
        </FriendsFormCont>
      ))}
    </div>   


    );
};

 FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
 