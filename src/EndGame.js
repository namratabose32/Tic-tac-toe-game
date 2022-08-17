import React from "react";

function EndGame({clearHistory,winCount,restartGame,player,draw}){
    return(
        <div className="end-game-screen">
            {!draw && <span className="win-text">{player?"O Won" : "X WON"}</span>}
            {draw && <span className="win-text">Draw Game</span>}

            <span className="win-history">
                "X's Wins : {winCount.X}" and 
                "O's Wins : {winCount.O}"
            </span>
        <span className="btn-space">
            <button className="btn" onClick={restartGame}>
                Restart Game
            </button>
            <button className="btn" onClick={clearHistory}>
                Clear History
            </button>
        </span>
        </div>
    );
}
export default EndGame;