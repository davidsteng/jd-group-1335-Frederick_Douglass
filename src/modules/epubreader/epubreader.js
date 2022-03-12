import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { useSwipeable } from 'react-swipeable'
import { EpubView } from '..'
import defaultStyles from './style'
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'
import quizicon from '../../assets/quizicon.png'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayArrow } from '@mui/icons-material'

// src/assets/homeicon.png
// src/modules/epubreader/epubreader.js

const Swipeable = ({ children, ...props }) => {
  const handlers = useSwipeable(props)
  return <div {...handlers}>{children}</div>
}

class TocItem extends PureComponent {
  setLocation = () => {
    this.props.setLocation(this.props.href)
  }
  render() {
    const { label, styles } = this.props
    return (
      <button onClick={this.setLocation} style={styles}>
        {label}
      </button>
    )
  }
}

TocItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  setLocation: PropTypes.func,
  styles: PropTypes.object
}

class EBookReader extends PureComponent {
  constructor(props) {
    super(props)
    this.readerRef = React.createRef()
    this.state = {
      expandedToc: false,
      toc: false,
      //Sets Page Num to 1
      pageNum: 1
    }

    
  }
  toggleToc = () => {
    this.setState({
      expandedToc: !this.state.expandedToc
    })
  }

  //Tried writing a function to inc and dec pagenum but couldnt get it to work
  // incrementPage = () => {
  //   const { pageNumInc } = this.props
  //   this.setState({
  //     pageNum: this.state.pageNum + 1

  //   })
  // }

  // decrementPage = () => {
  //   const { pageNumDec } = this.props
  //   this.setState({
  //     pageNum: this.state.pageNum - 1

  //   })
  // }

  next = () => {
    //Sets page num + 1
    console.log(this.state.pageNum)
      this.setState({
      pageNum: this.state.pageNum + 1

    })
    const node = this.readerRef.current
    node.nextPage()
  }

  prev = () => {
    //Sets page num - 1
        this.setState({
      pageNum: this.state.pageNum - 1

    })
    console.log(this.state.pageNum)
    const node = this.readerRef.current
    node.prevPage()
  }

  onTocChange = toc => {
    const { tocChanged } = this.props
    this.setState(
      {
        toc: toc
      },
      () => tocChanged && tocChanged(toc)
    )
  }

  //Switch statement for audio src depending on the page number (audio url are for first 5 chapters)
  renderSwitch(pageNum) {
    switch(pageNum) {
      case 1:
        return "https://www.dropbox.com/s/9464zjkkd5fz01g/Frederick%20Douglas_Chapter%2001.mp3?raw=1";
      case 5:
        return "https://www.dropbox.com/s/8x54fiopf2ckzgv/Frederick%20Douglas_Chapter%2002.mp3?raw=1";
      case 10:
        return "https://www.dropbox.com/s/j9lhigpk1hd8hrz/Frederick%20Douglas_Chapter%2003.mp3?raw=1";
      case 13:
        return "https://www.dropbox.com/s/hx585jyj5vzc596/Frederick%20Douglas_Chapter%2004.mp3?raw=1";
      case 21:
        return "https://www.dropbox.com/s/ux0bk6r89zdtrmb/Frederick%20Douglas_Chapter%2005.mp3?raw=1";
      default:
        return 'foo';
    }
  }

  renderToc() {
    const { toc, expandedToc } = this.state
    const { styles } = this.props
    return (
      <div>
        
        <div style={styles.tocArea}>
          <div style={styles.toc}>
            <Button component={Link} to="/react-reader" style={styles.homeButton}>
              <img src={homeicon} width="125" height="125" ></img>
            </Button>
          </div>
          <div style={styles.toc}>
            <Button style={styles.quizButton}>
              <img src={quizicon} width="125" height="125" ></img>
            </Button>
          </div>
        </div>
        {expandedToc && (
          <div style={styles.tocBackground} onClick={this.toggleToc} />
        )}
        <AudioPlayer style={{width: '86%', height: '12%', position: 'fixed', bottom: '2%'}}
            // autoPlay -uncomment to auto play
            // showSkipControls={true} -uncomment to see skip controls, shouldn't need
            showDownloadProgress={false}
            //Controls the skip and back buttons and the amount of seconds each press does
            customAdditionalControls={[]}
            progressJumpSteps={{
              forward: 500000,
              backward: 500000
            }}
            //The src to the audio
            src={this.renderSwitch(this.state.pageNum)}
            onPlay={e => console.log("onPlay")}
            // other props here
          />
      </div>
    )
  }



  setLocation = loc => {
    const { locationChanged } = this.props
    this.setState(
      {
        expandedToc: false
      },
      () => locationChanged && locationChanged(loc)
    )
  }
  

  renderTocToggle() {
    const { expandedToc } = this.state
    const { styles } = this.props
    return (
      
      <button
        style={Object.assign(
          {},
          styles.tocButton,
          expandedToc ? styles.tocButtonExpanded : {}
        )}
        onClick={this.toggleToc}
      >
        <span
          style={Object.assign({}, styles.tocButtonBar, styles.tocButtonBarTop)}
        />
        <span
          style={Object.assign({}, styles.tocButtonBar, styles.tocButtonBottom)}
        />
      </button>
    )
  }

  render() {
    const {
      title,
      showToc,
      loadingView,
      styles,
      locationChanged,
      swipeable,
      epubViewStyles,
      ...props
    } = this.props
    const { toc, expandedToc } = this.state
    return (
      
      <div style={styles.container}>
        
        <div
          style={Object.assign(
            {},
            styles.readerArea,
            expandedToc ? styles.containerExpanded : {}
          )}
        >
          {showToc && this.renderTocToggle()}
          <div style={styles.titleArea}>{title}</div>
          
          <Swipeable
            onSwipedRight={this.prev}
            onSwipedLeft={this.next}
            trackMouse
          >
            <div style={styles.reader}>
              <EpubView
                ref={this.readerRef}
                loadingView={loadingView}
                styles={epubViewStyles}
                {...props}
                tocChanged={this.onTocChange}
                locationChanged={locationChanged}
              />
              {swipeable && <div style={styles.swipeWrapper} />}
            </div>
          </Swipeable>
          <button
            style={Object.assign({}, styles.arrow, styles.prev)}
            onClick={this.prev}
            //pageNumInc={this.incrementPage}
          >
            
            ‹
          </button>
          <button
            style={Object.assign({}, styles.arrow, styles.next)}
            onClick={this.next}
            //pageNumDec={this.decrementPage}
          >
            ›
          </button>
        </div>
        {showToc && toc && this.renderToc()}
        
      </div>

    )
  }
}

EBookReader.defaultProps = {
  loadingView: <div style={defaultStyles.loadingView}>Loading…</div>,
  locationChanged: null,
  tocChanged: null,
  showToc: true,
  styles: defaultStyles
}

EBookReader.propTypes = {
  title: PropTypes.string,
  loadingView: PropTypes.element,
  showToc: PropTypes.bool,
  locationChanged: PropTypes.func,
  tocChanged: PropTypes.func,
  styles: PropTypes.object,
  epubViewStyles: PropTypes.object,
  swipeable: PropTypes.bool
}

export default EBookReader
