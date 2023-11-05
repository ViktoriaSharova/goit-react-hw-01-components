import { FriendListItem } from './FriendListItem';
import { FriendContainer } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <FriendContainer>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                        name={friend.name}
                    ></FriendListItem>
                )})
            }
        </FriendContainer>
    );
};