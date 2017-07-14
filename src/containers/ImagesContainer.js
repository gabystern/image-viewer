import React, {Component} from 'react';
import {ImagesAdapter} from '../adapters';
import ImageList from '../components/ImageList';
import Modal from '../components/Modal'

import keys from '../config.js'

let key = keys.KEY
let secret = keys.SECRET

const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=dog&tag_mode=all&api_key=${key}&format=json&nojsoncallback=1`

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
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json() )
    .then(images => this.setState({
      images: images.photos.photo }))
    console.log(this.state.images)
  }

  handleClick(event) {

    this.setState({
      currentPage: Number(event.target.id)
    });

  }

  handleChange(event) {
     this.setState({
       searchTerm: event.target.value
     })
   }

  //  onSubmit(){
  //    fetch(URL)
  //    .then(res => res.json() )
  //    .then(images => this.setState({
  //      images: images.photos.photo }))
  //  }

  clickImage(event) {
    let page = this.state.currentPage
    let index = Number(event.target.id)
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
        <a className="card">
          <div className="image" >
            <img id={index} src={imageURL} onClick={(event) => this.clickImage(event)}/>
          </div>
        </a>
      );
    });

    let pageNumbers = [];
     for (let i = 1; i <= Math.ceil(this.state.images.length / this.state.imagesPerPage); i++) {
       pageNumbers.push(i);
     }
     const renderPageNumbers = pageNumbers.map(number => {
           return (
             <li
               key={number}
               id={number}
               onClick={this.handleClick}
             >
               {number}
             </li>
         )})
    return (
      <div className="app">
        <nav>
          <ul id="page-numbers">
              {renderPageNumbers}
          </ul>
        </nav>
        <form>
            <input onChange={this.handleChange} value={this.searchTerm} type="text" placeholder="Enter Search Term" />
            <input onClick={this.onSubmit} type="submit" value="Search"></input>
        </form>
        < Modal images={this.state.images} isModalOpen={this.state.isModalOpen} selectedImage={this.state.selectedImage}/>
        {renderImages}
      </div>
    )
  }

}

export default ImagesContainer;
