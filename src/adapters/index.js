let key = config.KEY
let secret = config.SECRET

let URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key={key}&format=json<https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key=%7bkey%7d&format=json<https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key=%7Bkey%7D&format=json%3Chttps://api.flickr.com/services/rest/?method=flickr.photos.search&tags=soccer&api_key=%7bkey%7d&format=json>'

export class ImageAdapter {
  static fetchImages(){
    return fetch(test, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ search_term: searchTerm})
    })
    .then(res => res.json() )
  }

}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
