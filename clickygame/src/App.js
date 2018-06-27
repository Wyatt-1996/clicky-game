import React, { Component } from 'react';
import Header from './components/header';
import pattern from './assets/imgs/pattern.jpg';
import dino from './assets/imgs/amargasaurus.png';
import dino1 from './assets/imgs/beipiaosaurus.png';
import dino2 from './assets/imgs/dracorex.png';
import dino3 from './assets/imgs/elasmosaurus.png';
import dino4 from './assets/imgs/graciliceratops.png';
import dino5 from './assets/imgs/lambeosaurus.png';
import dino6 from './assets/imgs/rhamphorhynchus.png';
import dino7 from './assets/imgs/triceratops.png';
import dino8 from './assets/imgs/stegosaurus.png';
import dino9 from './assets/imgs/syntarsus.png';
import dino10 from './assets/imgs/ichthyosaurus.png';
import dino11 from './assets/imgs/nodosaurus.png';
import ghIcon from './assets/imgs/github-big-logo.png';
import reactIcon from './assets/imgs/React-icon.svg.png';
import './App.css';

var imgArray = [dino, dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8, dino9, dino10, dino11];

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: 'Click an image to begin!',
      score: 0,
      topScore: 0
    }
  }

  imgClick = () => {
    this.setState({
      status: 'You guessed correctly!',
      score: 1,
      topScore: 1
    });
  }

  render() {
    const displayImgs = imgArray.map((eachItem, key) =>
      <img className="img" id={"img" + key} onClick={this.imgClick} src={eachItem} alt={key} key={key} />
    );

    return (
      <div className="App">

        <Header
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        {/* body */}
        <div className="body">
          <img className="pattern" src={pattern} alt="geometric pattern" />
          <h1 className="name">How to Play</h1>
          <h2 className="directions">Click on an image to earn points, but don't click on any image more than once!</h2>
          <div className="imgsDiv">
            {displayImgs}
          </div>
        </div>

        {/* footer */}
        <div className="footer">
          <div className="bottom">
            <a href="https://github.com/wyatt-1996/clicky-game" target="_blank">
              <img className="githubIcon" src={ghIcon} />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img className="reactIcon" src={reactIcon} />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;