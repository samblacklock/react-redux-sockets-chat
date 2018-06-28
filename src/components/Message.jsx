import React, { Fragment } from 'react';
import { boxShadow, bodyLight, bodyDark } from '../global/styles';

export default ({ message, userId }) => (
  <Fragment>
    <div className={`message 
      ${message.from.id === userId ? 'user' : 'partner'}
      ${message.think && ' think'}
      ${message.highlight && ' highlight'}
    `}>
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

        .think {
          color: grey
        }

        .highlight {
          font-size: calc(1rem + 10%)
          background: linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 100%)
        }

        .user {
          background-color: ${bodyLight}
          border-bottom-right-radius: 0
          margin-left: auto
        }

        .partner {
          background-color: ${bodyDark}
          border-bottom-left-radius: 0
          margin-right: auto
        }
      `}
    </style>
  </Fragment>
);
