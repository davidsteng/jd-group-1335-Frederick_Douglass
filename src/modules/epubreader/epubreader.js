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
    }
  }
  toggleToc = () => {
    this.setState({
      expandedToc: !this.state.expandedToc
    })
  }

  next = () => {
    console.log(this.props.pageNumber)
    this.props.incPage(1);
    const node = this.readerRef.current
    node.nextPage()
  }

  prev = () => {
    console.log(this.props.pageNumber)
    this.props.decPage(1);
    const node = this.readerRef.current
    node.prevPage()
  }

  //Switch statement for audio src depending on the page number (audio url are for first 5 chapters)
          //Make sure to change the end of the dropbox or aws share links
        //For example it may look like this https://www.dropbox.com/s/hx585jyj5vzc596/Frederick%20Douglas_Chapter%2004.mp3?dl=0
        //You have to change the end of the link to raw=1 and delete the dl=0
  renderAudioSrc(pageNum) {
    switch(pageNum) {
      case 1:
        return "https://www.dropbox.com/s/jiw0973q136r7s3/C1P1.mp3?raw=1";
      case 2:
        return "https://www.dropbox.com/s/3x28qh5y5cz18b0/C1P2.mp3?raw=1";
      case 3:
        return "https://www.dropbox.com/s/ku9oaosf5xrqds5/C1P3.mp3?raw=1";
      case 4:
        return "https://www.dropbox.com/s/sl3z486w8i7cicb/C1P4.mp3?raw=1";
      case 5:
        return "https://www.dropbox.com/s/11ryiu254uov1oq/C1P5.mp3?raw=1";
      case 6:
        return "https://www.dropbox.com/s/uu4r589j0duhm7t/C1P6.mp3?raw=1";
      //Chapter 1 End
      case 7:
        return "https://www.dropbox.com/s/69bx8thh8vw4vi6/C2P1.mp3?raw=1";
      case 8:
        return "https://www.dropbox.com/s/bjm902ny3snc084/C2P2.mp3?raw=1";
      case 9:
        return "https://www.dropbox.com/s/ky6cpfxrz6lhkrp/C2P3.mp3?raw=1";
      case 10:
        return "https://www.dropbox.com/s/j3zmxgz7sg7lmhz/C2P4.mp3?raw=1";
      case 11:
        return "https://www.dropbox.com/s/s2bpwuai5h0i4rt/C2P5.mp3?raw=1";
      case 12:
        return "https://www.dropbox.com/s/ja7364e14ytasub/C2P6.mp3?raw=1";
      //Chapter 2 End
      case 13:
        return "https://www.dropbox.com/s/2lzg68p124tflc8/C3P1.mp3?raw=1";
      case 14:
        return "https://www.dropbox.com/s/lz4wj8pkkok0ic5/C3P2.mp3?raw=1";
      case 15:
        return "https://www.dropbox.com/s/uratzytugwwamdn/C3P3.mp3?raw=1";
      case 16:
        return "https://www.dropbox.com/s/jjaqxo1acodxehs/C3P4.mp3?raw=1";
      //Chapter 3 End
      case 17:
        return "https://www.dropbox.com/s/j77mmkcvorebwr4/C4P1.mp3?raw=1";
      case 18:
        return "https://www.dropbox.com/s/r79d5fweeqhd7g9/C4P2.mp3?raw=1";
      case 19:
        return "https://www.dropbox.com/s/zbixwttfd5mwyp9/C4P3.mp3?raw=1";
      case 20:
        return "https://www.dropbox.com/s/ow70ufolfbrjmay/C4P4.mp3?raw=1";
      case 21:
        return "https://www.dropbox.com/s/sygbczziwb8e04l/C4P5.mp3?raw=1";
      //Chapter 4 End
      case 22:
        return "https://www.dropbox.com/s/p32f2fis6vrfgqe/C5P1.mp3?raw=1";
      case 23:
        return "https://www.dropbox.com/s/k257rkgzk5zhr30/C5P2.mp3?raw=1";
      case 24:
        return "https://www.dropbox.com/s/ut4eoldb8ieh6fl/C5P3.mp3?raw=1";
      case 25:
        return "https://www.dropbox.com/s/qf8gbxwh8ju2bdu/C5P4.mp3?raw=1";
      case 26:
        return "https://www.dropbox.com/s/0f40sjd18n061r9/C5P5.mp3?raw=1";
      //Chapter 5 End
      case 27:
        return "https://www.dropbox.com/s/qnk52vy1mqmejri/C6P1.mp3?raw=1";
      case 28:
        return "https://www.dropbox.com/s/tderxwq43sru609/C6P2.mp3?raw=1";
      case 29:
        return "https://www.dropbox.com/s/8liwz38dofg8r3k/C6P3.mp3?raw=1";
      case 30:
        return "https://www.dropbox.com/s/6puer5ofi8iglw0/C6P4.mp3?raw=1";
      //Chapter 6 End
      case 31:
        return "https://www.dropbox.com/s/64ps05vef2mjgy5/C7P1.mp3?raw=1";
      case 32:
        return "https://www.dropbox.com/s/ns6tl3cktt290vg/C7P2.mp3?raw=1";
      case 33:
        return "https://www.dropbox.com/s/74dt935mndlew6s/C7P3.mp3?raw=1";
      case 34:
        return "https://www.dropbox.com/s/ekn552n2t85w41l/C7P4.mp3?raw=1";
      case 35:
        return "https://www.dropbox.com/s/2csdkaqaj5az9qb/C7P5.mp3?raw=1";
      case 36:
        return "https://www.dropbox.com/s/bs2gz7xff3eryen/C7P6.mp3?raw=1";
      //Chapter 7 End
      case 37:
        return "https://www.dropbox.com/s/cxgcwnjtx0gggbc/C8P1.mp3?raw=1";
      case 38:
        return "https://www.dropbox.com/s/r57kd9908yxoczf/C8P2.mp3?raw=1";
      case 39:
        return "https://www.dropbox.com/s/gvuhj2z806grqx2/C8P3.mp3?raw=1";
      case 40:
        return "https://www.dropbox.com/s/8o3qfucujg2osgt/C8P4.mp3?raw=1";
      case 41:
        return "https://www.dropbox.com/s/5vr5g1oabn0fx9z/C8P5.mp3?raw=1";
      //Chapter 8 End
      case 42:
        return "https://www.dropbox.com/s/umgmxl2jdxxt7i3/C9P1.mp3?raw=1";
      case 43:
        return "https://www.dropbox.com/s/tup05lm8s6dgft8/C9P2.mp3?raw=1";
      case 44:
        return "https://www.dropbox.com/s/tserxz0avzq9x5x/C9P3.mp3?raw=1";
      case 45:
        return "https://www.dropbox.com/s/22r00sdwrd009jg/C9P4.mp3?raw=1";
      case 46:
        return "https://www.dropbox.com/s/vr4onm42xszqs6v/C9P5.mp3?raw=1";
      //Chapter 9 End
      case 47:
        return "https://www.dropbox.com/s/e0m6rcjsrykxkan/C10P1.mp3?raw=1";
      case 48:
        return "https://www.dropbox.com/s/b2d8hpnz8nk0tsx/C10P2.mp3?raw=1";
      case 49:
        return "https://www.dropbox.com/s/dvck6hnwmuithfb/C10P3.mp3?raw=1";
      case 50:
        return "https://www.dropbox.com/s/i6f9nvju55w8gs2/C10P4.mp3?raw=1";
      case 51:
        return "https://www.dropbox.com/s/h476k8sw03l7pst/C10P5.mp3?raw=1";
      case 52:
        return "https://www.dropbox.com/s/yhl1dfcpwgv6e82/C10P6.mp3?raw=1";
      case 53:
        return "https://www.dropbox.com/s/1flnql6rp35j3v2/C10P7.mp3?raw=1";
      case 54:
        return "https://www.dropbox.com/s/x1x3t6w35hhti9x/C10P8.mp3?raw=1";
      case 55:
        return "https://www.dropbox.com/s/kurk900vccs1zgz/C10P9.mp3?raw=1";
      case 56:
        return "https://www.dropbox.com/s/8y64hqt1o5rb3oh/C10P10.mp3?raw=1";
      case 57:
        return "https://www.dropbox.com/s/hte0kudshx118ul/C10P11.mp3?raw=1";
      case 58:
        return "https://www.dropbox.com/s/ppwopkx5ka60pm2/C10P12.mp3?raw=1";
      case 59:
        return "https://www.dropbox.com/s/jsf1dtaakoak6pz/C10P13.mp3?raw=1";
      case 60:
        return "https://www.dropbox.com/s/25mxebn3xgke02m/C10P14.mp3?raw=1";
      case 61:
        return "https://www.dropbox.com/s/snnwzlgnclpxmal/C10P15.mp3?raw=1";
      case 62:
        return "https://www.dropbox.com/s/aj7vq8gtlkofelf/C10P16.mp3?raw=1";
      case 63:
        return "https://www.dropbox.com/s/ktyt9g7b3ll51g4/C10P17.mp3?raw=1";
      case 64:
        return "https://www.dropbox.com/s/jod6opf5rkzxi65/C10P18.mp3?raw=1";
      case 65:
        return "https://www.dropbox.com/s/l17begtydzlwr0p/C10P19.mp3?raw=1";
      case 66:
        return "https://www.dropbox.com/s/oetylpzg06gc2j6/C10P20.mp3?raw=1";
      case 67:
        return "https://www.dropbox.com/s/2aepnnh3jekxois/C10P21.mp3?raw=1";
      case 68:
        return "https://www.dropbox.com/s/7pr6iw8nx4rlei2/C10P22.mp3?raw=1";
      case 69:
        return "https://www.dropbox.com/s/qbp20ilat52xiro/C10P23.mp3?raw=1";
      case 70:
        return "https://www.dropbox.com/s/6ubxlu1wm1uk7ze/C10P24.mp3?raw=1";
      case 71:
        return "https://www.dropbox.com/s/3vttja187woazlx/C10P25.mp3?raw=1";
      case 72:
        return "https://www.dropbox.com/s/tbtqy132wllwa5k/C10P26.mp3?raw=1";
      case 73:
        return "https://www.dropbox.com/s/fvl6hbvjf1v60mo/C10P27.mp3?raw=1";
      case 74:
        return "https://www.dropbox.com/s/qma3new4c41jnji/C10P28.mp3?raw=1";
      case 75:
        return "https://www.dropbox.com/s/czytyb50v9ct02l/C10P29.mp3?raw=1";
      case 76:
        return "https://www.dropbox.com/s/uaseyf79frkdy7x/C10P30.mp3?raw=1";
      case 77:
        return "https://www.dropbox.com/s/k5w0g0u8opypxv5/C10P31.mp3?raw=1";
      //Chapter 10 End
      case 78:
        return "https://www.dropbox.com/s/mgirui1itjbhok7/CP11P1.mp3?raw=1";
      case 79:
        return "https://www.dropbox.com/s/jhkdg5kry8y558r/C11P2.mp3?raw=1";
      case 80:
        return "https://www.dropbox.com/s/dpobc2ezu5fsg91/C11P3.mp3?raw=1";
      case 81:
        return "https://www.dropbox.com/s/wqshk57uly9k1z0/C11P4.mp3?raw=1";
      case 82:
        return "https://www.dropbox.com/s/hw2grbnp18by5ou/C11P5.mp3?raw=1";
      case 83:
        return "https://www.dropbox.com/s/n9zjosco7wbe1jm/C11P6.mp3?raw=1";
      case 84:
        return "https://www.dropbox.com/s/lavx9yyu9ngj9bu/C11P7.mp3?raw=1";
      case 85:
        return "https://www.dropbox.com/s/6gjfoo500jqj58r/C11P8.mp3?raw=1";
      case 86:
        return "https://www.dropbox.com/s/hstyc6m890hxg6f/C11P9.mp3?raw=1";
      case 87:
        return "https://www.dropbox.com/s/jzzaw597c4n9oem/C11P10.mp3?raw=1";
      case 88:
        return "https://www.dropbox.com/s/gypkngoce6xejxv/C11P11.mp3?raw=1";
      case 89:
        return "https://www.dropbox.com/s/jv1tb4i54b9n36r/C11P12.mp3?raw=1";
      case 90:
        return "https://www.dropbox.com/s/srawq66v3zrnngg/C11P13.mp3?raw=1";
      case 91:
        return "https://www.dropbox.com/s/x8o4to8682uzq9r/C11P14.mp3?raw=1";
      case 92:
        return "https://www.dropbox.com/s/mgirui1itjbhok7/CP11P1.mp3?raw=1";
        default:
        return 'foo';
    }
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

  renderToc() {
    const { toc, expandedToc } = this.state
    const { styles } = this.props
    return (
      <div>
        <div style={styles.tocArea}>
          <div style={styles.toc}>
            <Button component={Link} to="/react-reader" style={styles.homeButton}>
              <img src={homeicon} width="100%" height="100%" ></img>
            </Button>
          </div>
          <div style={styles.toc}>
            <Button style={styles.quizButton}>
              <img src={quizicon} width="100%" height="100%" ></img>
            </Button>
          </div>
        </div>
        {expandedToc && (
          <div style={styles.tocBackground} onClick={this.toggleToc} />
        )}
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
          >
            ‹
          </button>
          <button
            style={Object.assign({}, styles.arrow, styles.next)}
            onClick={this.next}
          >
            ›
          </button>
        </div>
        {showToc && toc && this.renderToc()}
        <AudioPlayer style={{width: '86%', height: '14%', position: 'absolute', bottom: 'x', right: 'y'}}
            //LINK TO AUDIO PLAYER PAGE FOR FUNCTIONS AND INFORMATION: https://www.npmjs.com/package/react-h5-audio-player
            // autoPlay -uncomment to auto play
            // showSkipControls={true} -uncomment to see skip controls, shouldn't need
            showDownloadProgress={false}
            //Controls the skip and back buttons and the amount of seconds each press does
            customAdditionalControls={[]}
            progressJumpSteps={{
              forward: 30000,
              backward: 30000
            }}
            //The src to the audio
            src={this.renderAudioSrc(this.props.pageNumber)}
            // onPlay={e => console.log("onPlay")}
            // other props here
            
          />
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
