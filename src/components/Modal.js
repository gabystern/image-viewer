import React, { Component } from 'react';

const display = {
  visibility: 'visible'
};

class Modal extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if (this.props.images.length > 0 && this.props.isModalOpen === true){
      let image = this.props.images[this.props.selectedImage]
      console.log(image)
      let imageURL = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
      return(
        <div className='overlay'>
          <img src={imageURL} id="overlay-image" style={display}/>
        </div>
      )
    }
    return (<div></div>)
  }

}

export default Modal;
