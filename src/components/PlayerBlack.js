// Class for the Player controlling the black pieces

import React, { Component } from 'react'
import './Player.css'

class PlayerBlack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            winner: this.props.winner,
            numPieces: this.props.numPieces,
            currentTurn: this.props.currentTurn
        }
    }

    componentDidMount = () => {
        return this.setState({
            name: this.props.name,
            winner: this.props.winner,
            numPieces: this.props.numPieces,
            currentTurn: this.props.currentTurn
        })
    }

    render = () => {
        let turnBadge = this.props.currentTurn ? <h4><span className="badge badge-success">Your Move</span></h4> : <h4><span className="badge badge-danger">Sit Tight</span></h4>;
        return (
            <div>
                <div className="card player-two">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">Remaining Pieces: {this.state.numPieces}</p>
                        {turnBadge}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBlack