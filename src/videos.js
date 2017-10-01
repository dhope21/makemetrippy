import React, {Component} from 'react';

import YouTube from 'react-youtube';


 class Videos extends Component{
  constructor(props) {
    super(props);
    console.log("inside league container", props);
    this.state = {
      path: null,     
      data : ['ssFAkvLdH4g','StrbppmsZJw','fj-10lIrboM','WuSPRu4lzag', 'bpOSxM0rNPM', '0fKBhvDjuy0', '-gP_Q2myNWo', '_tEFRAI9WSE', 'q2D-4niMueo', 's5FyfQDO5g0', 'cRewCBZZhRQ'],
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
  const opts = {
      height: this.props.height,
      width: this.props.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        // autoplay: 1  // commented for pause on open
      }
    

    };
    return (
      <div>
      <div>
            <button type="button" onClick={() => this.changeVideoId()}  >next trip</button>
      </div>

      <div>
          <YouTube
            videoId={this.state.current_video}
            opts={opts}
            onPause={() => console.log('inside youyubr')}
            // onReady={this._onReady}
          />
      </div>
      </div>

    );
  }


}


 export default Videos;