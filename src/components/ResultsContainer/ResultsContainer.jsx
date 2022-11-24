import React from 'react';
import NameCard from '../NameCard/Namecard';
import './ResultsContainer.css';
const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
        // return <p key={suggestedName}>{suggestedName}</p>;
    });
    return <div className="result-container">{suggestedNamesJsx}</div>;
};

export default ResultsContainer;
