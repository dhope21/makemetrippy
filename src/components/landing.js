import React, {Component} from 'react';
import _ from "lodash";


 class Landing extends Component{
  constructor(props) {
    super(props);
    console.log("inside league container", window.innerWidth);
    this.state = {
      path: null,     
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
            <button type="button">Start trip</button>
        </div>
      </div>
    );
  }


}


 export default Landing;