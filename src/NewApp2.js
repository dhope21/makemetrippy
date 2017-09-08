import React from 'react';
import windowDimensions from 'react-window-dimensions';
import Videos from './videos';
 
const NewApp2 = ({ width, height }) => (
  <div>
    <div>
      <Videos height={height*0.9} width={width*0.99}/>

   </div>
  </div>
);
 
export default windowDimensions()(NewApp2);