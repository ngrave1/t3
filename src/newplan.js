import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


class Newplan extends React.Component {
    render() {
      return (
        <div>
          <h3>{this.props.ele.name}</h3>
          <div>{this.props.ele.username}</div>
          <h3>{this.props.ele.email}</h3>
          <h3>{this.props.ele.address.street}</h3>
          <h3>{this.props.ele.address.suite}</h3>
          <h3>{this.props.ele.address.city}</h3>
          <h3>{this.props.ele.address.zipcode}</h3>
          <p>-----------------------</p>
        </div>
      )
    }
  }
export default Newplan