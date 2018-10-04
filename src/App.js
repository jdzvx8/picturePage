import React, { Component } from 'react';
import logo from './logo.svg';
import Lightbox from 'react-image-lightbox'
import './App.css';
import 'react-image-lightbox/style.css'

const images = ['https://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/250px-Nanga_Parbat_The_Killer_Mountain.jpg']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0
    }
  }

  render() {
    let { photoIndex } = this.state
    console.log('test', photoIndex)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[++photoIndex]}
            prevSrc={images[--photoIndex]}
            onMovePreRequest={() => (this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length }))}
            onMoveNextRequest={() => (this.setState({ photoIndex: (photoIndex + 1) % images.length }))}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
