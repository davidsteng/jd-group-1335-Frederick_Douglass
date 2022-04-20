import React, { Component, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { EBookReader, Home, BackgroundInfo, Letter, Preface, Biography, Gallery} from './modules'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {
  Container,
  ReaderContainer,
} from './Components'

const storage = global.localStorage || null

const DEMO_URL = '/react-reader/files/Narrative of the Life of Frederick Douglass.epub'
const DEMO_NAME = 'Narrative of The Life of Frederick Douglass'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-weight: 300;
    line-height: 1.4;
    word-break: break-word;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 1.8rem;
    background: #888;
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
  }
`
var page = React.createContext(1)
class App extends Component {
  constructor(props) {
    super(props)
    this.incPage = this.incPage.bind(this);
    this.decPage = this.decPage.bind(this);
    this.state = {
      fullscreen: true,
      location:
        storage && storage.getItem('epub-location')
          ? storage.getItem('epub-location')
          : 2,
      localFile: null,
      localName: null,
      largeText: false,
      pageNumber: 1
    }
    this.rendition = null
  }

  incPage(num) {
    this.setState({
      pageNumber: this.state.pageNumber += num
    })
  }

  decPage(num) {
    this.setState({
      pageNumber: this.state.pageNumber -= num
    })
  }

  onLocationChanged = location => {
    this.setState(
      {
        location
      },
      () => {
        storage && storage.setItem('epub-location', location)
      }
    )
  }

  getRendition = rendition => {
    console.log('getRendition callback', rendition)
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state
    this.rendition = rendition
    rendition.themes.fontSize('5.0vh')
  }
  
  render() {
    const { fullscreen, location, localFile, localName } = this.state
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/react-reader" element={<Home/>}/>
            <Route exact path="/BackgroundInfo" element={<BackgroundInfo/>}/>
            <Route exact path="/Preface" element={<Preface/>}/>
            <Route exact path="/Letter" element={<Letter/>}/>
            <Route exact path="/Gallery" element={<Gallery/>}/>
            <Route exact path="/Biography" element={<Biography/>}/>
            <Route exact path="/epub" element={<Container>
              <GlobalStyle />
              <ReaderContainer fullscreen={fullscreen}>
                <EBookReader
                  incPage={this.incPage}
                  decPage={this.decPage}
                  pageNumber={this.state.pageNumber}
                  url={localFile || DEMO_URL}
                  title={localName || DEMO_NAME}
                  location={location}
                  locationChanged={this.onLocationChanged}
                  getRendition={this.getRendition}
                />
              </ReaderContainer>
            </Container>}/>
          </Routes>
        </div>
      </Router>
      // <Container>
      //   <GlobalStyle />
      //   <ReaderContainer fullscreen={fullscreen}>
      //     <EBookReader
      //       url={localFile || DEMO_URL}
      //       title={localName || DEMO_NAME}
      //       location={location}
      //       locationChanged={this.onLocationChanged}
      //       getRendition={this.getRendition}
      //     />
      //   </ReaderContainer>
      // </Container>
    )
  }
}

export default App
