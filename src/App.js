import React, { Component } from 'react';
import logo from './logo.svg';
import Lightbox from 'react-image-lightbox'
import './App.css';
import 'react-image-lightbox/style.css'

const images = ['https://imgur.com/YTum3v4.jpg', 'https://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/250px-Nanga_Parbat_The_Killer_Mountain.jpg', 'https://imgur.com/YTum3v4.jpg']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render() {
    let { photoIndex, isOpen } = this.state
    console.log('test', photoIndex)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button type="button" onClick={() => this.setState({ isOpen: true })}>
              Open Lightbox
            </button>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
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
