import React from 'react';
import user from '../img/user.png'

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
          {
            this.props.data !== [] ? this.props.data.map((item) => {
              return <div className="user__wrapper">
                <div className="user__avatar">
                <img src={item.imageUrl === '' && item.image === null ? user : item.image === null && item.imageUrl !== '' ? item.imageUrl: item.image}/>
                </div>
                <div className="user__info">
                  <ul>
                    <li>ФИО: {item.surname + ' ' + item.name + ' ' + item.patronymic}</li>
                    <li>Отдел: {item.departaments}</li>
                    <li>Должность: {item.position}</li>
                    <li>Возраст: {item.age}</li>
                    <li>Телефон: {item.phone}</li>
                    <li>Email: {item.email}</li>
                    <li>Логин: {item.login}</li>
                    <li>Пароль: {item.password}</li>
                  </ul>
                </div>
              </div>
            }) : null
          }
      </div>
    );
  }
}

export default User;