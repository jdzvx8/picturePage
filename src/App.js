import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-grid-gallery';

// TODO
// 1. Wrap in Security
// 2. move images to another location
// 3. dynamically upload images
// 4. 

const IMAGES =
[{
        src: "https://imgur.com/YTum3v4.jpg",
        thumbnail: "https://imgur.com/YTum3v4.jpg",
}
]

class App extends Component {
  render() {
    return (
      <div>
      <Gallery images={IMAGES}/>
        </div>
    );
  }
}

export default App;
