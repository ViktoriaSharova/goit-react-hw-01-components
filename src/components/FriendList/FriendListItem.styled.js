import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 5px;
`;