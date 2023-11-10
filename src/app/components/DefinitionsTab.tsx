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
      <div className="w-1/3">
        <UserInfoCard user={user} />
      </div>
      <div className="w-5/6">
        <UsageHistoryCard />
      </div>
    </div>
  );
  
}

export default DefinitionsTab;
