import React from 'react';
import Icon from './components/icon';
import Temperature from './components/temperature';
import Calendar from './components/calendar';

class IndexView extends React.Component {
  render() {
    return (
      <html lang="en-US">
        <head>
          <title>{this.props.title}</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={this.props.title} />
          <meta name="author" content="Dan Fairaizl" />

          <link href="/styles/main.css" rel="stylesheet" />
        </head>
        <body>
          <main>
            <Icon></Icon>
            <Temperature></Temperature>
            <Calendar></Calendar>
          </main>
        </body>
      </html>
    )
  }
}

export default IndexView;
