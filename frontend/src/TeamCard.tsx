import React from 'react';

interface TeamCardProps {
  schoolName: string;
  mascotName: string;
  location: {
    city: string;
    state: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ schoolName, mascotName, location }) => {
  return (
    <div className="team-card">
      <h2>{schoolName}</h2>
      <p>Mascot: {mascotName}</p>
      <p>Location: {location.city}, {location.state}</p>
    </div>
  );
}

export default TeamCard;
