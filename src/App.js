import React, { Component } from 'react';
import YouTube from 'react-youtube';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const opts = {
      height: '600px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="App">
        <div>
          <button type="button" >next trip</button>
        </div>
        <YouTube
          videoId="ssFAkvLdH4g"
          opts={opts}
          onReady={this._onReady}
        />
      </div>

    );
  }
}

export default App;
