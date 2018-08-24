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
import reactIcon from './logo.svg';
import './App.css';

var imgArray = [
  {
    id: 0,
    url: dino,
    beenClicked: false
  },
  {
    id: 1,
    url: dino1,
    beenClicked: false
  },
  {
    id: 2,
    url: dino2,
    beenClicked: false
  },
  {
    id: 3,
    url: dino3,
    beenClicked: false
  },
  {
    id: 4,
    url: dino4,
    beenClicked: false
  },
  {
    id: 5,
    url: dino5,
    beenClicked: false
  },
  {
    id: 6,
    url: dino6,
    beenClicked: false
  },
  {
    id: 7,
    url: dino7,
    beenClicked: false
  },
  {
    id: 8,
    url: dino8,
    beenClicked: false
  },
  {
    id: 9,
    url: dino9,
    beenClicked: false
  },
  {
    id: 10,
    url: dino10,
    beenClicked: false
  },
  {
    id: 11,
    url: dino11,
    beenClicked: false
  }
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: 'Click an image to begin!',
      score: 0,
      topScore: 0,
      imgArray: imgArray
    }
  }

  imgClick = (id) => {
    console.log(id);

    var that = this;

    for(var i=0; i < imgArray.length; i++) {
      if(id === imgArray[i].id) {
        if(imgArray[i].beenClicked === false) {
          imgArray[i].beenClicked = true;
          this.setState({
            status: this.state.score >= 11 ? 'You Win!' : 'You guessed correctly',
            score: this.state.score+1,
            topScore: this.state.topScore+1
          });
          document.querySelector('.info').classList.add('correct');
          setTimeout(function() {
            document.querySelector('.info').classList.remove('correct');
          }, 300);
        } else {
          this.setState({
            status: 'You Lost!',
            score: 0
          });
          document.querySelector('.imgsDiv').classList.add('animated');
          document.querySelector('.imgsDiv').classList.add('wobble');
          document.querySelector('.info').classList.add('incorrect');
          setTimeout(function() {
            document.querySelector('.info').classList.remove('incorrect');
          }, 300);
          for(var i=0; i < imgArray.length; i++) {
            imgArray[i].beenClicked = false
          }
          setTimeout(function() {
            that.setState({
              status: 'Click an image to begin!'
            });
            document.querySelector('.imgsDiv').classList.remove('animated');
            document.querySelector('.imgsDiv').classList.remove('wobble');
          }, 1000);
        }
      }
    }

   
    // reorder imgArray
    imgArray.sort(() => Math.random()-0.5);
  }

  render() {
    const displayImgs = this.state.imgArray.map((eachItem, key) =>
      <img className="img" id={"img" + eachItem.id} key={key} onClick={() => this.imgClick(eachItem.id)} src={eachItem.url} alt={key} />
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
              <img className="reactIcon App-logo" src={reactIcon} />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;