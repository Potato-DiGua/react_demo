import React from 'react'
import { Board } from './Border';
import { Dialog } from './Dialog';

export class Game extends React.Component {
    render() {
        return (
            <div>
                <Dialog value="who is winner"/>
                <div className="game">

                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </div>

        );
    }
}