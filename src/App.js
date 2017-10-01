import React from 'react';
import windowDimensions from 'react-window-dimensions';
import Video from './components/video';
 
const App = ({ width, height }) => (
  <div>
    <div>
      <Video height={height*0.95} width={width}/>

   </div>
  </div>
);
 
export default windowDimensions()(App);