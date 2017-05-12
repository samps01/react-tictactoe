import React from 'react';

export default class GameStatusCard extends React.Component{
    constructor(props){
        super(props);

        //console.log(this.props.currentPlayer);
        this.state={
            currentPlayer: this.props.currentPlayer
        }

    }

    componentWillReceiveProps(nextProps){
        this.setState({currentPlayer:nextProps.currentPlayer})
    }

    render(){
        let player,winner;
        if(this.state.currentPlayer === 'X'){
            player = 'Player 1';
            winner = 'Player 2';
        }else{
            player = 'Player 2';
            winner = 'Player 1';
        }

        if(!this.props.GameStatus){
            return(
                <div className="alert alert-info" role="alert"><b>{player}</b>'s turn!</div>
            )
        }
            return(
                <div className="alert alert-success" role="alert">{winner} is the winnerr</div>
            )
    }
}