import React, {Component} from 'react';
import {ImagesAdapter} from '../adapters';
import ImageList from '../components/ImageList'

class ImagesContainer extends Component {

  constructor(){
    super()
    this.state = {
      images: []
    }
  }

  render(){
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    )
  }

}

export default ImagesContainer;
