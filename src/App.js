import React from 'react';
import windowDimensions from 'react-window-dimensions';
import Video from './components/video';
import Landing from './components/landing';
 
const App = ({ width, height }) => (
  <div>
    <div>
      <Landing height={height*0.95} width={width}/>
   </div>
  </div>
);
 
export default windowDimensions()(App);