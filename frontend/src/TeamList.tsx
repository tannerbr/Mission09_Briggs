import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import teamsData from './CollegeBasketballTeams.json'; // Import the JSON file

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    console.log('Setting teams data from import...');
    if (teamsData && Array.isArray(teamsData.teams)) {
      console.log('Imported data:', teamsData.teams); // Log the imported teams
      setTeams(teamsData.teams);
    } else {
      console.error('Imported data is not an array');
    }
  }, []);

  return (
    <div className="team-list">
      {teams.length === 0 ? (
        <p>No teams to display</p>
      ) : (
        teams.map((team, index) => (
          <TeamCard
            key={index}
            schoolName={team.school}
            mascotName={team.name}
            location={{ city: team.city, state: team.state }}
          />
        ))
      )}
    </div>
  );
}

export default TeamList;
