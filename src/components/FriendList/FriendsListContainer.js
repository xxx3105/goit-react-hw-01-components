import { FriendsListContainer, FriendsFormCont, FriendsImg, FriendsName, OnlineSignal } from "./FriendsListContainer.styled";

 
export const FriendList = ({ friends }) => {
    return (
      
    <FriendsListContainer>
       
    {friends.map(friend => (
    
    <FriendsFormCont key={friend.id}>
        <OnlineSignal status={friend.isOnline.toString()} />
       <FriendsImg src={friend.avatar} alt="{friend.name}"/>
       <FriendsName>{friend.name}</FriendsName>
    </FriendsFormCont>
      
    ))}
    
    </FriendsListContainer>
    );
};

 