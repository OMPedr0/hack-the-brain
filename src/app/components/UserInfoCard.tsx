import React from 'react';

interface User {
  Name: string;
  Email: string;
  Age: number;
}

interface UserInfoCardProps {
  user: User;
}

function UserInfoCard({ user }: UserInfoCardProps) {
  const userProperties = Object.entries(user);

  return (
    <div className="bg-gray-300 border rounded-lg shadow-md p-4 w-fit">
      <h2 className="text-2xl font-semibold mb-2">User Information</h2>
      <div className="grid grid-cols-2 gap-4">
        {userProperties.map(([property, value]) => (
          <div key={property} className="text-base">
            <p className="font-semibold">{property}:</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfoCard;
