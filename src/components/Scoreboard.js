import React from 'react';

const Scoreboard = (props) => {
    const { score, highScore } = props;

    return (
        <div className="scoreboard">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}

export default Scoreboard;