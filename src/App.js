import React, { Component } from 'react';
import Dimensions from 'react-dimensions'
import Videos from './videos';
import windowDimensions from 'react-window-dimensions';

class App extends Component {
   constructor(props) {
    console.log("inside App container", props);
    super(props);
    var path = window.location.pathname;
    path = path.split("/");
    this.state = {
      path: null,     
      data : ['ssFAkvLdH4g','StrbppmsZJw','fj-10lIrboM'],
      current_video:'ssFAkvLdH4g',
      count:0,

    }
    
  }

  changeVideoId(){
    this.setState({
      current_video : this.state.data[this.state.count+1]
    });
    this.state.count+=1;
    console.log(' this.state.current_video', this.state.current_video);
    return this.state.current_video;
  }


  render() {

    return (
      <div className="App">
        <div  >
          <button type="button"  onClick={() => console.log(' this.state.width height')}  >next trip</button>
        </div>
          <Videos/>
      </div>

    );
  }
}

export default windowDimensions()(App);
