import React from 'react';

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>{this.props.status}</h2>
        <pre>{this.props.stack}</pre>
      </div>
    )
  }
}

export default ErrorPage;


// h1= message
// h2= error.status
// pre #{error.stack}
