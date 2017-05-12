import React, { Component } from 'react';
import './App.css';
import GameStatusCard from './game-status';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            PLAYER_ONE: 'X',
            PLAYER_TWO: 'O',
            CURRENT_PLAYER: 'X',
            GAME_STATUS: false,
            board: [
                "","","","","","","","",""
            ]
        }
    }

    clickHandle(index){
        if(this.state.board[index]  === "" && this.state.GAME_STATUS === false) {
            const newBoard = this.state.board;
            newBoard[index] = this.state.CURRENT_PLAYER;
            this.setState({
                board: newBoard ,
                CURRENT_PLAYER: this.state.CURRENT_PLAYER === this.state.PLAYER_ONE ? this.state.PLAYER_TWO : this.state.PLAYER_ONE
            })

        }
        if(this.gameStatus()){
            if(this.state.GAME_STATUS === false){
                console.log(`${this.state.CURRENT_PLAYER} is the winner`)
            }
            this.setState({GAME_STATUS:true});

        }

    }

    gameStatus(){
        const winPattern = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        return winPattern.find(pattern=>{
            if(this.state.board[pattern[0]]!=="" && this.state.board[pattern[0]] === this.state.board[pattern[1]] && this.state.board[pattern[1]]===this.state.board[pattern[2]]){

                return true;
            }
            return false;
        })
    }
    renderSquare(){
        const squares = this.state.board.map((square,i)=>{
            return(
                <div onClick={()=>this.clickHandle(i)}
                     className="square"
                     key={i}
                >
                    {this.state.board[i]}
                </div>
            );
        });
        return squares;
    }
  render() {
    return (
      <div className="container">
          <div className="board">
              {this.renderSquare()}
          </div>
          <GameStatusCard GameStatus={this.state.GAME_STATUS}
                          currentPlayer={this.state.CURRENT_PLAYER}
          />
      </div>
    );
  }
}

export default App;
