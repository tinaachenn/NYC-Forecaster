import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="statCard">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;