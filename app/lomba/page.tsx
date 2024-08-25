import React from 'react';

interface Competition {
    id: number;
    name: string;
    description: string;
}

const competitions: Competition[] = [
    { id: 1, name: 'Competition 1', description: 'Description of Competition 1' },
    { id: 2, name: 'Competition 2', description: 'Description of Competition 2' },
    { id: 3, name: 'Competition 3', description: 'Description of Competition 3' },
];

const CompetitionPage: React.FC = () => {
    return (
        <div>
            <h1>List of Competitions</h1>
            <ul>
                {competitions.map((competition) => (
                    <li key={competition.id}>
                        <h3>{competition.name}</h3>
                        <p>{competition.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompetitionPage;