import {
  ProfileWrapper,
  ProfileAvatar,
  UserName,
  UserInfo,
  ListWrapper,
  ListItem,
  ListText,
} from './Profile.styled';
import './user.json';

export const Profile = ({ avatar, username, tag, location, stats}) => {
  return (
    <ProfileWrapper>
      <div>
        <ProfileAvatar
          src={avatar}
          alt="User avatar"
          width="120"
          height="120"
        />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </div>

      <ListWrapper>
        <ListItem>
          <ListText>Followers</ListText>
          <span>{stats.followers}</span>
        </ListItem>
        <ListItem>
          <ListText>Views</ListText>
          <span>{stats.views}</span>
        </ListItem>
        <ListItem>
          <ListText>Likes</ListText>
          <span>{stats.likes}</span>
        </ListItem>
      </ListWrapper>
    </ProfileWrapper>
  );
};
