import React from 'react'
import VideoPlayer from '../video-player';

class AutoPlay extends React.Component {
  constructor(props) {
    super(props);

    this.videoPlayerRef = React.createRef();
    // Создаём реф
  }

  componentDidMount() {
    this.videoPlayerRef.current.onButtonClick();
    // Вызываем метод onButtonClick компонента VideoPlayer

    // console.log(this.videoPlayerRef);
    // if (this.videoPlayerRef.current) {
    //   this.videoPlayerRef.current
    //     .play()
    //     .catch(error => {
    //       console.error("Error playing the video:", error);
    //     });
    // }
  }

  render() {
    return (
      <VideoPlayer ref={this.videoPlayerRef} />

      // <VideoPlayer videoRef={this.videoPlayerRef} />
      // Получаем экземпляр компонента
    )
  }
}

export default AutoPlay;