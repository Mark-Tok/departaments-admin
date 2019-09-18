import React from 'react';
import { Link } from "react-router-dom";
import user from '../img/user.png'

class Userinfo extends React.Component {
  constructor(props) {
    super(props);
  }
  goToUrlNewUser = (item) => {
    this.props.newUser(item);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.info.length === 0 ? <div className="isempty">В данном отделе пока нет сотрудников, нажмите кнопку "ДОБАВИТЬ", заполните информацию и выберете нужный отдел</div> : this.props.info.map((item, index) => {
            return <li key={index}>
              <div className="departaments__info info">
                <div className="info__images"> <img src={item.imageUrl === '' && item.image === null ? user : item.image === null && item.imageUrl !== '' ? item.imageUrl : item.image} /></div>
                <div className="info__name">
                  <Link onClick={() => { this.goToUrlNewUser(item) }} to={'/admin/id' + item.id}>
                    {item.name + ' ' + item.surname}
                  </Link>
                  </div>
                <button className="info__delete" onClick={() => { this.props.delete(item, index, this.props.departament) }}>Удалить</button>
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