import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendsListContainer } from "./FriendsListContainer.styled";
import PropTypes from 'prop-types';
import React from 'react';

export const FriendListContainer = ({ friends }) => {
    return (
      

    <FriendsListContainer>
                <FriendListItem friends={friends} />
    </FriendsListContainer>
    );
};

FriendListContainer.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};