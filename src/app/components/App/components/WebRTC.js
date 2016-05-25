import { Component } from 'react'
import SimpleWebRTC from 'simplewebrtc'

const style = {
  position: 'fixed',
  bottom: 10,
  left: 10,
}

export default class WebRTC extends Component {
  componentDidMount() {
    const webrtc = new SimpleWebRTC({
      localVideoEl: this.refs.local,
      remoteVideoEl: '',
      autoRequestMedia: true,
    })
  }

  render() {
    return (
      <div style={style}>
        <video
          ref="local"
          height="200"/>
      </div>
    )
  }
}
