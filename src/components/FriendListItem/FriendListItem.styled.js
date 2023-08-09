import styled from 'styled-components';


export const FriendsFormCont = styled.li`
width: 445px;
height: 130px;
background-color: #E3E3E3;
margin: 0 auto;
margin-top: 40px;
display: flex;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 10px;
`;

export const FriendsImg = styled.img`
width:100px;
height: 100px;
 
margin: auto 2% 15px;

background-color: white;
border-radius: 10px;
`;

export const FriendsName = styled.p`
margin: auto 0;
text-align: left;
color: black;
font-size: 30px;
font-weight: 500;
`;

export const OnlineSignal = styled.span`
background-color: ${(props) => (props.status === "true" ? 'green' : 'red')};
height: 20px;
width: 20px;
margin: auto 15px;
border-radius: 50%;
`;
 

