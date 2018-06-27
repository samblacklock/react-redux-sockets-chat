import React, { Component, Fragment } from 'react';
import MessageBox from './MessageBox';
import Message from './Message';

import { boxShadow, white } from '../global/styles';

class Chat extends Component {
  componentDidUpdate() {
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
  }

  render() {
    return (
      <Fragment>
        <h1>
          Cool Chat App
        </h1>
        <h2>Hey {this.props.user.nickname}, you are chatting with {this.props.partner.nickname || 'no one! ☹️'}</h2>
        <div className="chat-container">
          <div className="message-container" ref={ref => this.messageContainer = ref}>
            { this.props.messages.map((message, i) => <Message key={i} message={message} userId={this.props.user.id} />) }
          </div>
          <MessageBox 
            handleSendMessage={this.props.handleSendMessage}
          />
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

              &:after {
                background: linear-gradient(to bottom, white 0%, transparent 100%)
                content: ''
                height: 60%
                position: absolute
                top: 0
                width: 100%
              }
            }

            .message-container {
              display: flex
              flex-direction: column
              margin-bottom: 1rem
              max-height: 90%
              overflow: scroll
              width: 100%
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Chat;
