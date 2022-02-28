import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Epub from 'epubjs/lib/index'
import defaultStyles from './style'
import CustomPopup from '../CustomPopup/CustomPopup'
import CustomPopupBigger from '../CustomPopupBigger/CustomPopupBigger'
import { EpubCFI } from 'epubjs'
import TargetWords from '../../Targetwords.json';
import SightWords from '../../Sightwords.json';
import {Howl} from "howler"
import audio from '../../assets/audio.png'

class EpubView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      toc: [],
      visibility: false,
      highlightedWord: "",
      wordDerivs: " ",
      wordDef: "",
      visibility2: false,
      highlightedWord2: "",
      wordDerivs2: " "
    }
    this.viewerRef = React.createRef()
    this.location = props.location
    this.book = this.rendition = this.prevPage = this.nextPage = null
    this.initBook(true)
    // this.visibility = false
    
  }
  popupCloseHandler = (e) => {
    this.setState({visibility: !this.state.visibility})
    window.Howler.mute(true)

    // window.soundManager.muteAll();
    // this.visibility = !this.visibility
    // console.log(this.state.visibility)
  }

  popupCloseHandler2 = (e) => {
    this.setState({visibility2: !this.state.visibility2})
    // this.visibility = !this.visibility
    // console.log(this.state.visibility2)
  }

  initBook() {
    const { url, tocChanged, epubInitOptions } = this.props
    this.book = new Epub(url, epubInitOptions)
    this.book.loaded.navigation.then(({ toc }) => {
      this.setState(
        {
          isLoaded: true,
          toc: toc
        },
        () => {
          tocChanged && tocChanged(toc)
          this.initReader()
        }
      )
    })
  }

  initReader() {
    const { toc } = this.state
    const { location, epubOptions, getRendition } = this.props
    const node = this.viewerRef.current
    this.rendition = this.book.renderTo(node, {
      contained: true,
      width: '100%',
      height: '100%',
      ...epubOptions
    })

    this.prevPage = () => {
      this.rendition.prev()
    }
    this.nextPage = () => {
      this.rendition.next()
    }
    this.registerEvents()
    getRendition && getRendition(this.rendition)

    if (typeof location === 'string' || typeof location === 'number') {
      this.rendition.display(location)
    } else if (toc.length > 0 && toc[0].href) {
      this.rendition.display(toc[0].href)
    } else {
      this.rendition.display()
    }
  }

  registerEvents() {
    const { handleKeyPress, handleTextSelected } = this.props
    this.rendition.on('locationChanged', this.onLocationChange)
    this.rendition.on('keyup', handleKeyPress || this.handleKeyPress)
    this.rendition.on('click', handleTextSelected || this.handleTextSelected)
    if (handleTextSelected) {
      // console.log("selected text")

    }
  }

  onLocationChange = loc => {
    const { location, locationChanged } = this.props
    const newLocation = loc && loc.start
    if (location !== newLocation) {
      this.location = newLocation
      locationChanged && locationChanged(newLocation)
    }
  }

  renderBook() {
    const { styles } = this.props
    return <div ref={this.viewerRef} style={styles.view} />
  }

  handleKeyPress = ({ key }) => {
    key && key === 'ArrowRight' && this.nextPage()
    key && key === 'ArrowLeft' && this.prevPage()
  }

  handleTextSelected = (s) => {
    var iFrameID = this.rendition.manager.views._views[0].id
    var iframe = document.getElementById(iFrameID);
    var idoc= iframe.contentDocument || iframe.contentWindow.document; // ie compatibility
    var sel=idoc.getSelection();
    var str=sel.anchorNode.nodeValue, len=str.length
    var a = sel.anchorOffset
    var b = sel.anchorOffset
    window.Howler.mute(false)
    while(str[a]!=' '&&a--){}; if (str[a]==' ') a++; // start of word
    while(str[b]!=' '&&b++<len){};                   // end of word+1
    // console.log(str.substring(a,b));

    var word = str.substring(a,b)
    // console.log(word[word.length - 2])
    if (word[word.length - 1] == "." || word[word.length - 1] == "," || word[word.length - 1] == ";" || word[word.length - 1] == "’") { //last condition checks for names with possessives ending in "s’", i.e: Thomas’, James’, etc.
      word = word.substring(0,word.length - 1)
    } 
    else if (word[word.length - 2] == "’" && word[word.length - 1] == "s") { //checks for names with possessives ending in "’s", i.e: Lloyd’s, Tom’s, Sofia’s, etc.
      word = word.substring(0,word.length - 2)
    }
    word = word[0].toUpperCase() + word.substring(1,word.length)
    console.log(word)
    str = word.toLowerCase();

    //handling if sightword
    for (word in SightWords) {
      word = word.replace(';','')
      // console.log(word)
      var derivatives = SightWords[word + ';']
      if (word == str) {
        this.setState({visibility2: !this.state.visibility2});
        str = str[0].toUpperCase() + str.substring(1,str.length)
        this.setState({highlightedWord2: "\"" + str + "\"" + " is a sight word."});
        this.setState({wordDerivs2: SightWords[word + ';'].toString().replace(',','')})
        break
      } else {
        //check if word in derivatives
        for (var elem in derivatives) {
          elem = elem.toLowerCase()
        }
        if (derivatives.includes(str.toLowerCase()) && str != ' ') {
          str = word
          this.setState({visibility2: !this.state.visibility2});
          str = str[0].toUpperCase() + str.substring(1,str.length)
          this.setState({highlightedWord2: "\"" + str + "\"" + " is a sight word."});
          this.setState({wordDerivs2: SightWords[word + ';'].toString().replace(',','')})
          break
        }
      }
    }

    //handling if targetword
    for (word in TargetWords) {
      var tempStr = TargetWords[word][0].toLowerCase().replace('[', '').replace(']', '').replace(' ','')
      var derivatives = tempStr.split(', ')
      var definition = TargetWords[word][1].replace('‘','\"').replace('’','\"') //BUG: this doesn't fix single quotes in definitions not displaying correctly as I expected, may have to change in CSV later instead
      if (word == str) {  //BUG: ignores "Aliciana" as a name since it is created as a key for all the other names in json, need to reformat names section of json or csv and put Aliciana in values and replace the key with something like "NAME"
        this.setState({visibility: !this.state.visibility});
        str = str[0].toUpperCase() + str.substring(1,str.length)
        this.setState({highlightedWord: str});
        this.setState({wordDerivs: TargetWords[word][0]})
        this.setState({wordDef: definition})
        break
      } else {
        //check if word in derivatives
        for (var elem in derivatives) {
          elem = elem.toLowerCase()
        }
        if (derivatives.includes(str.toLowerCase()) && str != ' ') {
          str = word
          this.setState({visibility: !this.state.visibility});
          str = str[0].toUpperCase() + str.substring(1,str.length)
          this.setState({highlightedWord: str});
          this.setState({wordDerivs: TargetWords[word][0]})
          this.setState({wordDef: definition})
          break
        }
      }
    }
  } 
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true
    })
    sound.play();
  } 

  render() {
    const { isLoaded } = this.state
    const { loadingView, styles } = this.props
    
    return (
      <div style={styles.viewHolder}>
        <div className="App">
        </div>
        <div style={styles.viewHolder}>
          {(isLoaded && this.renderBook()) || loadingView}
          <CustomPopupBigger
            onClose={this.popupCloseHandler}
            show={this.state.visibility}
            title={this.state.highlightedWord}>
              <div style={styles.container}>
                <h2 style={styles.title}>{this.state.highlightedWord}</h2>
                <button style={styles.button} onClick={() => this.soundPlay("https://words-and-definitons.s3.amazonaws.com/words/"+this.state.highlightedWord.toLowerCase().charAt(0)+"/"+ this.state.highlightedWord.toLowerCase()+ ".mp3")}>
                  <img src={audio} width="40" height="40" ></img>
                </button> 
              </div>
              
              <h2 style={{marginLeft: '10px'}}>{this.state.wordDerivs}</h2>
              <div style={styles.container}>
                <h2 style={styles.defintion}> {this.state.wordDef}</h2>
                <button style={styles.button} onClick={() => this.soundPlay("https://brainy-literacy-assets.s3.amazonaws.com/audio/defs/"+this.state.highlightedWord.toUpperCase().charAt(0)+"/"+ this.state.highlightedWord.toLowerCase()+ "%2B.mp3")}>
                  <img src={audio} width="40" height="40" ></img>
                </button> 
              </div>
              
                        
          </CustomPopupBigger>
          <CustomPopup
            onClose={this.popupCloseHandler2}
            show={this.state.visibility2}
            title={this.state.highlightedWord2}>
              <h2>Derivatives: {this.state.wordDerivs2}</h2>
          </CustomPopup>
        </div>

      </div>
    )
  }
}

EpubView.defaultProps = {
  loadingView: null,
  locationChanged: null,
  tocChanged: null,
  styles: defaultStyles,
  epubOptions: {},
  epubInitOptions: {}
}

EpubView.propTypes = {
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(ArrayBuffer)
  ]),
  loadingView: PropTypes.element,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  locationChanged: PropTypes.func,
  tocChanged: PropTypes.func,
  styles: PropTypes.object,
  epubInitOptions: PropTypes.object,
  epubOptions: PropTypes.object,
  getRendition: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleTextSelected: PropTypes.func
}

export default EpubView
