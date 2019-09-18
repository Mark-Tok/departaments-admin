import React from 'react';

class Userpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [JSON.parse(localStorage.getItem('userAuth')).user]
    };
  }

  exit = () => {
    localStorage.removeItem('userAuth');
  }

  render() {
    return (
      <div className="user">
        {
          this.state.user.map((item, index) => {
            return <div key={index} className="user__wrapper">
              <div className="userAdmin__avatar">
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
          })
        }
        <a href='' onClick={this.exit}>Выйти</a>
      </div>
    );
  }
}

export default Userpage;