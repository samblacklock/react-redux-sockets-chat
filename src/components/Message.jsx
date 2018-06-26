import React, { Fragment } from 'react';
import { boxShadow } from '../global/styles';

export default ({ message }) => (
  <Fragment>
    <div className={'message'}>
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
      `}
    </style>
  </Fragment>
);
