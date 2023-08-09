import { ImgUser, OtherTextStyle, NameFontStyle, DataContainer ,StatsContainer ,StatsItem , StatsItemsFont, StatsNameStyle } from "./ProfileCard.styled";
import PropTypes from 'prop-types';
import React from 'react';

export const ProfileCard = ({ username, avatar, tag, location,followers, views, likes }) => { 
    return <div> 
    <DataContainer>
                <ImgUser src={avatar} alt="User Avatar" />
                <NameFontStyle>{username}</NameFontStyle>
                <OtherTextStyle>@{tag}</OtherTextStyle>
                <OtherTextStyle>{location}</OtherTextStyle>
        </DataContainer>
        <StatsContainer>
            <StatsItem>
                <StatsNameStyle>Followers</StatsNameStyle>
                <StatsItemsFont>{followers}</StatsItemsFont>
            </StatsItem>
            <StatsItem>
                <StatsNameStyle>Views</StatsNameStyle>
                <StatsItemsFont>{views}</StatsItemsFont>
            </StatsItem>
            <StatsItem>
                <StatsNameStyle>Likes</StatsNameStyle>
                <StatsItemsFont>{likes}</StatsItemsFont>
            </StatsItem>
        </StatsContainer>
        </div>
 };
 
 
ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
