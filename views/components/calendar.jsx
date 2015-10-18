import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <section>
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p className="current">S</p>
        </section>
      </div>
    )
  }
}
