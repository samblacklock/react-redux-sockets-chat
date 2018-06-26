import React, { Fragment } from 'react';
import { bodyDark, bodyLight } from '../global/styles';
import Chat from '../containers/Chat';

export default () => (
  <Fragment>
    <Chat />
    <style jsx global>
      {`
        html, body, #app {
          height: 100vh
          margin: 0
          overflow: hidden
          padding: 0
          width: 100vw
        }

        body {
          background: linear-gradient(to top, ${bodyDark}, ${bodyLight})

          * {
            font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
          }
        }

        #app {
          align-items: center
          display: flex
          flex-direction: column
          justify-content: center
        }
      `}
    </style>
  </Fragment>
);