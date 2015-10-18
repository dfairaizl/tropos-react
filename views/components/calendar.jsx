import React from 'react';

class Calendar extends React.Component {
  render() {
    return (
      <section>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div className="current">S</div>
      </section>
    )
  }
}

export default Calendar;
