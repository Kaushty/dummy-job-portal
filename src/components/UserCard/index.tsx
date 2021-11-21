import React from 'react';

import './styles.css';

function UserCard({
  onClick,
  img,
  name,
}: {
  onClick(): void;
  img: string;
  name: string;
}) {
  return (
    <div className="Card UserCard" onClick={onClick}>
      <div
        className="UserImage"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h3 className="UserName">{name}</h3>
    </div>
  );
}

export default UserCard;
