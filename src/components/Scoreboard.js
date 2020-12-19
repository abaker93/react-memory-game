import React from 'react';

const Scoreboard = (props) => {
    const { score, highScore } = props;

    return (
        <div className="scoreboard">
            <div></div>
            <div>
                <p>Score: {score}</p>
            </div>
            <div>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    )
}

export default Scoreboard;