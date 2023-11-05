import { ListItem, FriendStatus } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <img src={avatar} alt="User avatar" width="48" ></img>
            <p>{name}</p>
        </ListItem>
    );
};