import React from 'react';
import user from '../img/user.png'
import { Link } from "react-router-dom";

function User(props) {
  return (
    <div className="user">
      <Link to='/admin'><div className="user__back"></div></Link>
      {
        props.data !== [] ? props.data.map((item, index) => {
          return <div key={index} className="user__wrapper">
            <div className="user__avatar">
              <img src={item.imageUrl === '' && item.image === null ? user : item.image === null && item.imageUrl !== '' ? item.imageUrl : item.image} />
            </div>
            <div className="user__info">
              <ul>
                <li><span>ФИО:</span> {item.surname + ' ' + item.name + ' ' + item.patronymic}</li>
                <li><span>Отдел:</span> {item.departaments}</li>
                <li><span>Должность:</span> {item.position}</li>
                <li><span>Возраст:</span> {item.age}</li>
                <li><span>Телефон:</span> {item.phone}</li>
                <li><span>Email:</span> {item.email}</li>
                <li><span>Логин:</span> {item.login}</li>
                <li><span>Пароль:</span> {item.password}</li>
              </ul>
            </div>
          </div>
        }) : null
      }
    </div>
  );
}
export default User;