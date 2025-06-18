import './UserCard.css';
import React from 'react';

function UserCard({ item }) {
    const user = item;
  return (
    <div className="user-card">
      <h2>{user.name} ({user.username})</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <div>
        <strong>Address:</strong>
        <div>
          {user.address.street}, {user.address.suite}<br />
          {user.address.city}, {user.address.zipcode}
        </div>
        <div>
          <small>Geo: {user.address.geo.lat}, {user.address.geo.lng}</small>
        </div>
      </div>
      <div>
        <strong>Company:</strong>
        <div>{user.company.name}</div>
        <div><em>{user.company.catchPhrase}</em></div>
        <div>{user.company.bs}</div>
      </div>
    </div>
  );
}

export default UserCard;