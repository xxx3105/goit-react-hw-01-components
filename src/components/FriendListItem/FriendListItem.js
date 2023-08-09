import {
  FriendsFormCont,
  FriendsImg,
  FriendsName,
  OnlineSignal,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const FriendListItem = ({ status, key, src, name }) => {
  return (
    <div>
      <FriendsFormCont key={key}>
        <OnlineSignal status={status} />
        <FriendsImg src={src} alt={name} />
        <FriendsName> {name} </FriendsName>
      </FriendsFormCont>
    </div>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.string.isRequired,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
