import React, { Component, Fragment } from 'react';
import { boxShadow } from '../global/styles';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.settings.time
    }

    this.startTimer();
  }

  startTimer() {
    let { time } = this.state;
    const timer = setInterval(() => {
      this.setState({
        time: time--
      }, () => {
        if (time === 0) {
          clearInterval(timer);
          this.navigate();
        }
      });
    }, 1000);
  }

  navigate() {
    window.open(this.props.settings.url);
  }

  render() {
    return (
      <Fragment>
    
        <div className="countdown">
          <span className="number">{this.state.time}</span>
        </div>
    
        <style jsx>
          {`
            .countdown {
              align-items: center
              background: red
              box-shadow: ${boxShadow}
              color: white
              display: flex
              flex-direction: column
              height: 40rem
              justify-content: center
              position: absolute
              width: 40rem
            }

            .number {
              font-size: 40rem
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Countdown
