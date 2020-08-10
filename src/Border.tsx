import React from "react";
import { Square } from "./Square";

interface BoardState {
    squares: string[];
    count: number;
}
export class Board extends React.Component<any> {
    state: BoardState;
    handleClick: (index: number) => void = (i) => {
        const count: number = this.state.count;
        if (this.state.squares[i] == null) {
            const squares = this.state.squares.slice();
            if (count % 2 == 0) {
                squares[i] = 'X';
            } else {
                squares[i] = 'O';
            }
            this.setState({ squares: squares, count: count + 1 });
        }
    };
    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        }
    }
    restart(): void {
        this.setState({ squares: Array(9).fill(null), count: 0 });
    }
    /**
     * 0 1 2 
     * 3 4 5
     * 6 7 8
     */
    isWin(squares: string[]): boolean {
        if (squares[0] === squares[1] && squares[0] === squares[2] && squares[0] !== null) {
            return true;
        } else if (squares[3] === squares[4] && squares[3] === squares[5] && squares[3] !== null) {
            return true;
        } else if (squares[6] === squares[7] && squares[6] === squares[8] && squares[8] !== null) {
            return true;
        } else if (squares[0] === squares[3] && squares[0] === squares[6] && squares[6] !== null) {
            return true;
        } else if (squares[1] === squares[4] && squares[1] === squares[7] && squares[7] !== null) {
            return true;
        } else if (squares[2] === squares[5] && squares[2] === squares[8] && squares[8] !== null) {
            return true;
        } else if (squares[0] === squares[4] && squares[0] === squares[8] && squares[8] !== null) {
            return true;
        } else if (squares[2] === squares[4] && squares[2] === squares[6] && squares[6] !== null) {
            return true;
        }
        return false;
    }
    renderSquare(i: number) {
        return (<Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />);
    }
    componentDidUpdate() {
        let squares = this.state.squares;
        if (this.isWin(squares)) {
            alert((this.state.count % 2 == 0 ? "O" : "X") + " is winner!!!");
            this.restart();
        }
    }

    render() {
        const status = `Next player: ${this.state.count % 2 == 0 ? "X" : "O"}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}