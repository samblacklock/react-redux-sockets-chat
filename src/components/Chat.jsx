import React, { Component, Fragment } from 'react';
import MessageBox from './MessageBox';

import { boxShadow, white } from '../global/styles';

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <h1>
          Cool Chat App
        </h1>
        <div className="chat-container">
          <MessageBox />
        </div>
    
        <style jsx>
          {`
            .chat-container {
              align-items: center
              background: ${white}
              border-radius: 0.25rem
              box-shadow: ${boxShadow}              
              display: flex
              flex-direction: column
              height: 70%
              justify-content: flex-end
              overflow: scroll
              position: relative
              max-width: 100rem 
              padding: 1rem
              width: 80%
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Chat;
