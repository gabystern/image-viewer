import React, {Component} from 'react';
import {ImagesAdapter} from '../adapters';
import Modal from '../components/Modal'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { Grid, Menu, Header } from 'semantic-ui-react'

import keys from '../config.js'

class ImagesContainer extends Component {

  constructor(){
    super()
    this.state = {
      images: [],
      currentPage: 1,
      imagesPerPage: 10,
      searchTerm: '',
      isModalOpen: false,
      selectedImage: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clickImage = this.clickImage.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      currentPage: Number(event.target.id)
    });

  }

  handleChange(event) {
     this.setState({
       searchTerm: event.target.value
     })
   }

   handleSearchClick(event){
     event.preventDefault()
     console.log('hit button')
     ImagesAdapter.fetchImages(this.state.searchTerm)
     .then(images => this.setState({
       images: images.photos.photo }))
   }

  clickImage(event) {
    let page = this.state.currentPage
    let index = Number(event.target.className)
    let pagedImage = index + (page-1)*10
    if (this.state.isModalOpen === false && page === 1){
      this.setState({
        selectedImage: index,
        isModalOpen: true
      })
    } else if(this.state.isModalOpen === false && page > 1 ){
      this.setState({
        selectedImage: pagedImage,
        isModalOpen: true
      })
    } else {
      this.setState({
        selectedImage: null,
        isModalOpen: false
      })
    }
  }

  render(){
    let indexOfLastImage = this.state.currentPage * this.state.imagesPerPage;
    let indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage;
    let currentImages = this.state.images.slice(indexOfFirstImage, indexOfLastImage);
    let renderImages = currentImages.map((image, index) => {
      let imageURL = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
      return (
        <Grid.Column>
        <a className="card">
          <div className="image" >
            <img id="image-list" className={index} src={imageURL} onClick={(event) => this.clickImage(event)}/>
          </div>
        </a>
        </Grid.Column>
      );
    });

    return (
      <div className="app">
        <Menu inverted borderless className='logo-menu'><Menu.Item position='left' name='Forbes' className='logo'></Menu.Item></Menu>
        < NavBar images={this.state.images} imagesPerPage={this.state.imagesPerPage} handleClick={(event) => this.handleClick(event)} />
        <Header size='huge' textAlign='center' className='name'>Flickr Searchr</Header>
        < SearchBar handleClick={this.handleSearchClick} handleChange={(event) => this.handleChange(event)} />
        < Modal images={this.state.images} isModalOpen={this.state.isModalOpen} selectedImage={this.state.selectedImage}/>
        < Grid container columns={5}>
          {renderImages}
        </Grid>
      </div>
    )
  }

}

export default ImagesContainer;
