import React from 'react';

export default class Temperature extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.temperature}<sup>°</sup></h1>
      </div>
    )
  }
}

Temperature.defaultProps = { temperature: 10 };
