import React from 'react';
import {  Link } from "react-router-dom";
import user from '../img/user.png'
class Userinfo extends React.Component {
  constructor(props) {
    super(props);
    this.goToUrlNewUser = this.goToUrlNewUser.bind(this);
  }
  goToUrlNewUser(item) {
    this.props.newUser(item);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.info.length === 0 ? null : this.props.info.map((item, index) => {
            return <li key={index}>
            <Link onClick={() => {this.goToUrlNewUser(item)}}  to={'/admin/id' + item.id}>
              <div className="info">
                <div> <img src={item.imageUrl === '' && item.image === null ? user : item.image === null && item.imageUrl !== '' ? item.imageUrl: item.image} /></div>
                <div>{item.name + ' ' + item.surname}</div>
              </div>
            </Link>
              <div>
                <button onClick={() => { this.props.delete(item, index, this.props.departament) }}>Удалить</button>
              </div>
            </li>
          })
          }
        </ul>
      </div>
    );
  }
}

export default Userinfo;