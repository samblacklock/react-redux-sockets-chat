import React, { Fragment } from 'react';
import { boxShadow, bodyDark, bodyLight } from '../global/styles';

export default ({ message, user }) => (
  <Fragment>
    <div className={`${message.id === user.id ? 'user' : 'other'} message`}>
      <span className="nickname">{message.nickname}</span>
      <br />
      {message.message}
    </div>

    <style jsx>
      {`
        @keyframes new {
          from {
            transform: translateY(-100%) 
            opacity: 0
          }
          to {
            transform: translateY(0)
            opacity: 1
          }
        }

        .message {
          animation: new 0.3s linear
          background: linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 100%)
          border-radius: 0.5rem
          box-shadow: ${boxShadow}
          margin: 0.5rem
          max-width: 50%
          padding: 1rem
        }

        .user {
          background-color: ${bodyLight}
          border-bottom-right-radius: 0
          margin-left: auto
        }

        .other {
          background-color: ${bodyDark}
          border-bottom-left-radius: 0
          margin-right: auto
        }
      `}
    </style>
  </Fragment>
);
