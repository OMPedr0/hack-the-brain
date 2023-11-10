import React from 'react';

interface User {
  Name: string;
  Email: string;
  Company: string;
}

interface UserInfoCardProps {
  user: User;
}

function UserInfoCard({ user }: UserInfoCardProps) {
  const userProperties = Object.entries(user);

  return (
    <div className="border rounded-lg shadow-md p-6 w-80 mx-auto bg-white">
      <h2 className="text-2xl font-semibold mb-4">Informações do Usuário</h2>
      <div className="grid grid-cols-1 gap-4">
        {userProperties.map(([property, value]) => (
          <div key={property} className="text-base">
            <p className="font-semibold">{property}:</p>
            <p className="text-gray-700">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfoCard;
