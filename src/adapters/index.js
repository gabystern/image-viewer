import keys from '../config.js'

let key = keys.KEY
let secret = keys.SECRET
console.log(key)
debugger

export class ImagesAdapter {
  static fetchImages(searchTerm){
    let URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&&text="${searchTerm.toLowerCase()}"&tag_mode=all&api_key=${key}&format=json&nojsoncallback=1`
    return fetch(URL)
    .then(res => res.json() )
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
