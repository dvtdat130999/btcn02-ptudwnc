import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props) {
    //chon loai square tu index.css
    const className='square'+(props.highlight?' highlight':'');
    return (
        <button className={className} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props) {
    const renderSquare=(i)=>{
        const winLine=props.winLine;//lay winline duoc pass tu Game thanh props cua Board
        return (
            <Square
                key={i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
                //if the current index of squares is included in winline array
                highlight={winLine&&winLine.includes(i)}
            />
        );
    };

    const boardSize=3;
    let squares=[];
    for(let i=0;i<boardSize;i++)
    {
        let row=[];
        for(let j=0;j<boardSize;j++)
        {
            row.push(renderSquare(i*boardSize+j));

        }
        squares.push(<div key={i} className="board-row">{row} </div>)
    }
    return (

        <div>
            {squares}
        </div>
    );

}

function Game (props) {
    const [history,setHistory]=useState([{ squares: Array(9).fill(null)}]);
    const [stepNumber,setStepNumber]=useState(0);
    const [xIsNext,setXIsNext]=useState(true);
    const [isAscending,setIsAscending]=useState(true);

    const handleClick=(i)=>{
        const historyClone=history.slice(0,stepNumber+1);
        const current = historyClone[historyClone.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(historyClone.concat([
            {
                squares: squares,
                //vi tri cua buoc vua di
                lastMoveSquare:i
            }
        ]));
        setStepNumber(historyClone.length);
        setXIsNext(!xIsNext);

    };



    const jumpTo=(step)=> {
        setStepNumber(step);
        setXIsNext((step%2)===0);
    };
    const handleSortToggle=()=>{
        setIsAscending(!isAscending);
    };

    const isAscendingClone=isAscending;
    const historyClone=history;
    const stepNumberClone=stepNumber;

    const current = historyClone[stepNumberClone];
    const winInfo = calculateWinner(current.squares);
    const winner = winInfo.winner;

    let moves = historyClone.map((step, move) => {
        const lastMoveSquare=step.lastMoveSquare;
        const col=1+lastMoveSquare%3;
        const row=1+Math.floor(lastMoveSquare/3);

        const desc = move ?
            `Go to move #${move} (${col}, ${row})` :
            'Go to game start';

        return (
            <li key={move}>
                <button
                    className={move ===stepNumberClone? 'move-list-item-selected':''}
                    onClick={() => jumpTo(move)}>{desc}
                </button>
            </li>
        );
    });
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }else
    {
        if(winInfo.isDraw)
        {
            status="Draw";
        }
        else
        {
            status = "Next player: " + (xIsNext ? "X" : "O");

        }
    }

    if (!isAscendingClone) {
        moves.reverse();
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winLine={winInfo.line}//pass winline thanh props cho Board
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button onClick={()=>handleSortToggle()}>
                    {isAscendingClone?'Descending':'Ascending'}
                </button>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner:squares[a],
                line:lines[i],
                isDraw:false//kiem tra hoa
            };
        }
    }
    let isDraw=true;
    for(let i=0;i<squares.length;i++)
    {
        if(squares[i]===null)
        {
            isDraw=false;
            break;
        }
    }
    return {
        winner: null,
        line:null,
        isDraw: isDraw

    };
}
