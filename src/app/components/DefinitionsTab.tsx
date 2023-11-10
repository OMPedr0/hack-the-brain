import React from 'react';
import UsageHistoryCard from './UsageHistoryCard';
import UserInfoCard from './UserInfoCard';

function DefinitionsTab() {
  const user = {
    Name: 'Pedro Gil',
    Email: 'pedrogil@hackthebrain.com',
    Company: 'Hack The Brain',
  };

  
  return (
    <div className="flex space-x-4">
      <div className="w-1/4">
        <UserInfoCard user={user} />
      </div>
      <div >
        <UsageHistoryCard />
      </div>
    </div>
  );
  
}

export default DefinitionsTab;
