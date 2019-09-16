import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter, BrowserRouter } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.data !== [] ? this.props.data.map((item) => {
              return <div>{item.departaments}
                <div>{item.name}</div>
                <img src={item.image === null ? item.imageUrl : item.image} />
              </div>
            }) : null
            
          }
        </ul>
      </div>
    );
  }
}

export default User;