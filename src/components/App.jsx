import Profile from './profile/Profile'
import Statistics from './statistics/Statistics'
import FriendList from './friendList/FriendList'
import TransactionHistory from './transactionHistory/TransactionHistory'

import user from '../json/user'
import data from '../json/data'
import friends from '../json/friends'
import transactions from '../json/transactions'


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
      
      <Statistics title="Upload stats" stats={data} />
       {/* <Statistics  stats={data} /> */}

      <FriendList friends={friends} />;
      
      <TransactionHistory items={transactions} />
    </div>
    
    
  );
};
