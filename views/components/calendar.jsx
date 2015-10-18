import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <section>
          <span><p>S</p></span>
          <span><p>M</p></span>
          <span><p>T</p></span>
          <span><p>W</p></span>
          <span><p>T</p></span>
          <span><p>F</p></span>
          <span className="current"><p>S</p></span>
        </section>
      </div>
    )
  }
}
