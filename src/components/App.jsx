import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      <GlobalStyle /> */}
    </div>
  );
};
