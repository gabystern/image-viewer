import keys from '../config.js'

let key = keys.KEY
let secret = keys.SECRET

let URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=dog&tag_mode=all&api_key=${key}&format=json&nojsoncallback=1`

export class ImagesAdapter {
  static fetchImages(){
    return fetch(URL)
    .then(res => res.json() )
  }
  debugger
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
