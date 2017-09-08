import React from 'react'
import Dimensions from 'react-dimensions'
 
class MyComponent extends React.Component {
  render() {
    return(
        <div containerWidth={this.props.containerWidth}
          containerHeight={this.props.containerHeight}
        >
          <button type="button"  onClick={() => console.log(' this.state.width height', this.props.containerWidth,this.props.containerHeight)}  >next trip</button>
        </div>
  )
  }
}
 
export default Dimensions()(MyComponent)