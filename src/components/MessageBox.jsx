import React, { Component, Fragment } from 'react';
import { bodyDark, boxShadow, bodyLight } from '../global/styles';

class Input extends Component {
  state = {
    message: ''
  }

  onSubmit = e => {
    e.preventDefault();

    const { message } = this.state;
    if (message) {
      this.props.handleSendMessage(this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Type your message..."
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button>Send</button>
        </form>

        <style jsx>
          {`
            form {
              display: flex
              position: relative
              width: 100%
            }

            input, button {
              border-radius: 0.2rem
              box-shadow: ${boxShadow}
            }

            input {
              border: 1px solid lightgrey
              flex: 1
              outline-color: ${bodyLight}
              padding: 0.5rem
            }

            button {
              align-self: center
              background: ${bodyDark}
              border-width: 0
              color: white
              letter-spacing: 0.1rem
              outline-color: ${bodyDark}
              position: absolute
              right: 0.5rem
              text-transform: uppercase
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Input;
