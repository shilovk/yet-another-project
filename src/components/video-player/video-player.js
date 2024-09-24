import React from 'react';
import videoItem from '../../images/sky.mov';
import playerStyles from './video-player.module.css';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    // Создадим реф-объект
    this.videoPlayerRef = React.createRef();

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    // Проверяем, что элемент существует, и вызываем play
    console.log(this.videoPlayerRef);
    if (this.videoPlayerRef.current) {
      this.videoPlayerRef.current
        .play()
        .catch(error => {
          console.error("Error playing the video:", error);
        });
    }
  }

  render() {
    return (
      <div className={playerStyles.player}>
        <video
          className={playerStyles.video}
          src={videoItem}
          ref={this.videoPlayerRef}/>
        {/* Передадим атрибуту ref наш объект this.videoPlayerRef */}
        <button
          className={playerStyles.button}
          onClick={this.onButtonClick}
        > ▶️ </button>
        {/*<video*/}
        {/*  className={playerStyles.video}*/}
        {/*  autoPlay={true}*/}
        {/*  src={videoItem}*/}
        {/*  ref={this.props.videoRef}/>*/}
        {/*/!* Передадим атрибуту ref пропс videoRef из компонента AutoPlay *!/*/}
        {/*<button*/}
        {/*  className={playerStyles.button}*/}
        {/*  onClick={this.onButtonClick}*/}
        {/*> ▶️*/}
        {/*</button>*/}
      </div>
    )
  }
}

export default VideoPlayer;