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
import quiz from '../../assets/quizicon.png'


class EpubView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      toc: [],
      visibility: false,
      quizvisibility: false,
      quiz: false,
      highlightedWord: "",
      wordDerivs: " ",
      wordDef: "",
      visibility2: false,
      highlightedWord2: "",
      wordDerivs2: " ",
      amountClicked: 0,
      quiz_answers: [],
      correct_answer: 0,
      clicked_answer: 0,
      feedback: false,
      feedbackContent: "Incorrect!",
      buttonColor1: "black",
      buttonColor2: "black",
      buttonColor3: "black",
      buttonColor4: "black",
    }
    this.viewerRef = React.createRef()
    this.location = props.location
    this.book = this.rendition = this.prevPage = this.nextPage = null
    this.initBook(true)
    this.handleQuiz = this.handleQuiz.bind(this)

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
  popupCloseQuiz = (e) => {
    this.setState({quiz: !this.state.quiz})
    // this.visibility = !this.visibility
    // console.log(this.state.visibility2)
  }

  handleFeedbackClose = (e) => {
    this.setState({feedback: !this.state.feedback})
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
    // console.log(word)
    this.setState({amountClicked: this.state.amountClicked + 1})
    str = word.toLowerCase();

    //handling if sightword
    for (word in SightWords) {
      word = word.replace(';','')
      // console.log(word)
      var derivatives = SightWords[word + ';']
      if (word == str) {
        if (this.state.amountClicked > 1 && word == this.state.highlightedWord2.substring(1, 1 + word.length).toLowerCase()) {
            this.setState({visibility2: !this.state.visibility2});
            this.setState({amountClicked: 0})
        } else {
            this.soundPlay("https://brainy-literacy-assets.s3.amazonaws.com/audio/words/"+word.toLowerCase().charAt(0)+"/"+ word.toLowerCase() + ".mp3")
        }
        // this.setState({visibility2: !this.state.visibility2});
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
        // console.log(this.state.highlightedWord.substring(0, word.length).toLowerCase())
        if (this.state.amountClicked > 1 && word == this.state.highlightedWord.substring(0, word.length).toLowerCase()) {
            this.setState({visibility: !this.state.visibility});
            this.setState({amountClicked: 0})
        } else {
            this.soundPlay("https://words-and-definitons.s3.amazonaws.com/words/"+word.toLowerCase().charAt(0)+"/"+ word.toLowerCase() + ".mp3")
        }
        // this.setState({visibility: !this.state.visibility});
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
          // console.log(this.state.highlightedWord.substring(0, word.length).toLowerCase())
          if (this.state.amountClicked > 1 && word == this.state.highlightedWord.substring(0, word.length).toLowerCase()) {
              this.setState({visibility: !this.state.visibility});
              this.setState({amountClicked: 0})
          } else {
            this.soundPlay("https://words-and-definitons.s3.amazonaws.com/words/"+word.toLowerCase().charAt(0)+"/"+ word.toLowerCase() + ".mp3")
          }
          // this.setState({visibility: !this.state.visibility});
          str = str[0].toUpperCase() + str.substring(1,str.length)
          this.setState({highlightedWord: str})
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

  handleQuiz() {
    this.setState({quiz: !this.state.quiz})
    var answers = this.makeAnswerArray()
    this.setState({quiz_answers: answers})
  }

  makeAnswerArray() {
    var answer = this.state.highlightedWord
    var answers = Array(4)
    var correct_int = this.getRandomInt(1,4)
    this.setState({correct_answer: correct_int})
    if (correct_int == 1) {
      answers[0] = this.state.highlightedWord
      answers[1] = "Random"
      answers[2] = "Random"
      answers[3] = "Random"
    } else if (correct_int == 2) {
      answers[0] = "Random"
      answers[1] = this.state.highlightedWord
      answers[2] = "Random"
      answers[3] = "Random"
    } else if (correct_int == 3) {
      answers[0] = "Random"
      answers[1] = "Random"
      answers[2] = this.state.highlightedWord
      answers[3] = "Random"
    } else {
      answers[0] = "Random"
      answers[1] = "Random"
      answers[2] = "Random"
      answers[3] = this.state.highlightedWord
    }
    return answers
  }

  handleAnswerClick(choice) {
    if (this.state.buttonColor1 === "blue") { this.setState({buttonColor1: "black"}) }
    if (this.state.buttonColor2 === "blue") { this.setState({buttonColor2: "black"}) }
    if (this.state.buttonColor3 === "blue") { this.setState({buttonColor3: "black"}) }
    if (this.state.buttonColor4 === "blue") { this.setState({buttonColor4: "black"}) }
    if (choice == 1) { this.setState({buttonColor1: "blue"}) }
    if (choice == 2) { this.setState({buttonColor2: "blue"}) }
    if (choice == 3) { this.setState({buttonColor3: "blue"}) }
    if (choice == 4) { this.setState({buttonColor4: "blue"}) }
    this.setState({clicked_answer: choice})
  }

  handleQuizSubmit() {
    if (this.state.clicked_answer == this.state.correct_answer) {
      this.setState({feedbackContent: "Correct!"})
    } else {
      this.setState({feedbackContent: "Incorrect!"})
    }
    this.setState({feedback: !this.state.feedback})
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
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
                  <img src={audio} width="20" height="20" ></img>
                </button> 

                <button style={styles.button} onClick={this.handleQuiz}>
                  <img src={quiz} width="20" height="20" ></img>
                </button> 
              </div>
              
              <h2 style={{marginLeft: '20px'}}>{this.state.wordDerivs}</h2>
              <div style={styles.container}>
                <h2 style={styles.defintion}> {this.state.wordDef}</h2>
                <button style={styles.button} onClick={() => this.soundPlay("https://brainy-literacy-assets.s3.amazonaws.com/audio/defs/"+this.state.highlightedWord.toUpperCase().charAt(0)+"/"+ this.state.highlightedWord.toLowerCase()+ "%2B.mp3")}>
                  <img src={audio} width="20" height="20" ></img>
                </button> 
                
              </div>
              
                        
          </CustomPopupBigger>
          <CustomPopup
            onClose={this.popupCloseHandler2}
            show={this.state.visibility2}
            title={this.state.highlightedWord2}>
              <h2>Derivatives: {this.state.wordDerivs2}</h2>
          </CustomPopup>

          {/* Add text for quiz and burrons in the component below! */}
          
          <CustomPopupBigger
            onClose={this.popupCloseQuiz}
            show={this.state.quiz}
            title={this.state.highlightedWord2}>
              <div>
                <h2>{this.state.wordDef}</h2>
              </div>

              <div>
                <h2>1.</h2>
              </div>

              <div>
                <style>{`
                  .black {color: black}
                  .blue {color: blue}
                `}</style>
                <button
                  className={this.state.buttonColor1}
                  onClick={() => this.handleAnswerClick(1)}
                >
                  {this.state.quiz_answers[0]}
                </button>
              </div>

              <div>
                <h2>2.</h2>
              </div>

              <div>
                <style>{`
                  .black {color: black}
                  .blue {color: blue}
                `}</style>
                <button
                  className={this.state.buttonColor2}
                  onClick={() => this.handleAnswerClick(2)}
                >
                  {this.state.quiz_answers[1]}
                </button>
              </div>

              <div>
                <h2>3.</h2>
              </div>

              <div>
                <style>{`
                  .black {color: black}
                  .blue {color: blue}
                `}</style>
                <button
                  className={this.state.buttonColor3}
                  onClick={() => this.handleAnswerClick(3)}
                >
                  {this.state.quiz_answers[2]}
                </button>
              </div>

              <div>
                <h2>4.</h2>
              </div>

              <div>
                <style>{`
                  .black {color: black}
                  .blue {color: blue}
                `}</style>
                <button
                  className={this.state.buttonColor4}
                  onClick={() => this.handleAnswerClick(4)}
                >
                  {this.state.quiz_answers[3]}
                </button>
              </div>

              <div>
                <style>{`
                  .black {color: black}
                  .blue {color: blue}
                `}</style>
                <button className={"black"} style={{position: 'absolute', right: 10, bottom: 10}}
                onClick={() => this.handleQuizSubmit()}>
                  Submit
                </button>
              </div>

          </CustomPopupBigger>
          <CustomPopup
            onClose={this.handleFeedbackClose}
            show={this.state.feedback}
            title={this.state.feedbackContent}>
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
