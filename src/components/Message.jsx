import React, { Fragment } from 'react';
import { boxShadow, bodyLight, bodyDark } from '../global/styles';

export default ({ message, userId }) => (
  <Fragment>
    <div className={`message ${message.from.id === userId ? 'user' : 'partner'}`}>
      {message.message}
    </div>

    <style jsx>
      {`
        .message {
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

        .partner {
          background-color: ${bodyDark}
          border-bottom-left-radius: 0
          margin-right: auto
        }
      `}
    </style>
  </Fragment>
);
