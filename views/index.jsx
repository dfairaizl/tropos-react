import React from 'react';

import Temperature from './components/temperature';

class IndexView extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Tropos | Kick Ass Weather</title>
        </head>
        <body>
          <Temperature></Temperature>
        </body>
      </html>
    )
  }
}

export default IndexView;
