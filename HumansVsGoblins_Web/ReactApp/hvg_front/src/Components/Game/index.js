import React, { PureComponent } from 'react'
import { GameEngine } from 'react-game-engine'
//import { Alert } from 'bootstrap';
import Hero from './entities/Hero';
import { GameLoop } from './systems/GameLoop'
import { Constants } from './utils/Constants'
import { Button } from 'bootstrap';

export class Game extends PureComponent {
  // MAX_WIDTH = 800;
  // MAX_HEIGHT = 800;
  // GRID_SIZE = 15;
  // CELL_SIZE = 20;

  constructor(props){
    super(props)
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
    this.state = {
      running: false
    }
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onEvent = e =>{
    if (e.type === "game-over"){
      this.setState({
        running: false
      });
      //Alert.alert("Game Over");
    }

    if(e.type === "update"){
      this.forceUpdate();
    }
    console.log(e)
  }

  reset = () => {
    this.engine.swap({
      //reset
      hero: {position: [12,12], size: Constants.CELL_SIZE, renderer: <Hero />}
    });
    this.setState({
      running: true
    });
  }

  startGame = () => {
    this.setState({
      running: true
    })
  }
  

  render() {
    return (
    <div style={{
      backgroundColor: '#252525',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"}}>
      <GameEngine
        ref = {(ref) => {this.engine = ref}}
        style = {{width: this.boardSize, height: this.boardSize, flex: null, border: '1px solid black', backgroundColor: 'blue', translate: '50%'}}
        entities={{
          hero: {position: [12,12], size: Constants.CELL_SIZE, renderer: <Hero />}
        }}
        systems={[ GameLoop ]}
        running={ this.state.running }
        onEvent={ this.onEvent }
      >
      </GameEngine>

      <input type='button' value="New Game" onClick={ this.reset } style={{translate: '175%'}}/>
      <input type='button' value="Start Game" onClick= { this.startGame } style={{translate: '-125%'}}/>
    </div>
    )
  }
}

export default Game