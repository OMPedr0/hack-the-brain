import React from 'react';
import UsageHistoryCard from './UsageHistoryCard';
import UserInfoCard from './UserInfoCard';

function DefinitionsTab() {
  const user = {
    Name: 'Pedro Gil',
    Email: 'pedrogil@hackthebrain.com',
    Age: 20,
  };

  
  return (
    <div className="flex space-x-4">
      <UserInfoCard user={user} />
      <UsageHistoryCard />
    </div>
  );
}

export default DefinitionsTab;
