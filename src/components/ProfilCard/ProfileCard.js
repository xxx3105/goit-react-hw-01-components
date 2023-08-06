import { ImgUser, OtherTextStyle, NameFontStyle, DataContainer ,StatsContainer ,StatsItem , StatsItemsFont, StatsNameStyle } from "./ProfileCard.styled";

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
 
 