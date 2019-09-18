import React from 'react';
const initialState = {
  password: '',
  login: '',
  departaments: 'developers',
  image: null,
  name: '',
  surname: '',
  position: '',
  age: '',
  patronymic: '',
  phone: '',
  email: '',
  imageurl: '',
  isLoadFile: false,
  valid: false,
  done: false
};
class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  inputPasswordChange = (event) => {
    const password = (event.target.validity.valid) ? event.target.value : this.state.password;
    this.setState(state => ({ password: password, valid: state.valid = false }));
  }

  inputImageurlChange = (event) => {
    const imageurl = (event.target.validity.valid) ? event.target.value : this.state.imageurl;
    this.setState(state => ({ imageurl: imageurl, valid: state.valid = false }));
  }

  inputEmailChange = (event) => {
    const email = (event.target.validity.valid) ? event.target.value : this.state.email;
    this.setState(state => ({ email: email, valid: state.valid = false }));
  }

  inputPhoneChange = (event) => {
    const phone = (event.target.validity.valid) ? event.target.value : this.state.phone;
    this.setState(state => ({ phone: phone, valid: state.valid = false }));
  }

  inputAgeChange = (event) => {
    const age = (event.target.validity.valid) ? event.target.value : this.state.age;
    this.setState(state => ({ age: age, valid: state.valid = false }));
  }

  inputPositionChange = (event) => {
    const password = (event.target.validity.valid) ? event.target.value : this.state.password;
    this.setState(state => ({ password: password, valid: state.valid = false }));
  }

  inputNameChange = (event) => {
    const name = (event.target.validity.valid) ? event.target.value : this.state.name;
    this.setState(state => ({ name: name, valid: state.valid = false }));
  }

  inputSurnameChange = (event) => {
    const surname = (event.target.validity.valid) ? event.target.value : this.state.surname;
    this.setState(state => ({ surname: surname, valid: state.valid = false }));
  }

  inputPatronymicChange = (event) => {
    const patronymic = (event.target.validity.valid) ? event.target.value : this.state.patronymic;
    this.setState(state => ({ patronymic: patronymic, valid: state.valid = false }));
  }

  inputPositionChange = (event) => {
    const position = (event.target.validity.valid) ? event.target.value : this.state.position;
    this.setState(state => ({ position: position, valid: state.valid = false }));
  }

  inputLoginChange = (event) => {
    const login = (event.target.validity.valid) ? event.target.value : this.state.login;
    this.setState(state => ({ login: login, valid: state.valid = false }));
  }

  // load local image file
  handleFileSelect = (event) => {
    let files = event.target.files;
    for (let i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      let reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          this.setState({ image: e.target.result }, () => {
            this.setState(state => ({ isLoadFile: !state.isLoadFile }))
          })
        }.bind(this);
      }).bind(this)(f);
      reader.readAsDataURL(f);
    }
  }

  handleChange = (event) => {
    this.setState({ departaments: event.target.value });
  }

  makeId = () => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  add = () => {
    let { name, login, password, surname, patronymic, position, email, phone, age } = this.state
    let arrayLoginFormDb = this.props.dataBase.map((item) => {
      if (item.login === login) {
        return item.login;
      }
    })
    let getLoginFomArray = [...new Set(arrayLoginFormDb)];
    let clearArrayLogin = getLoginFomArray.filter(function (el) {
      return el != undefined;
    });
     if (name === '' ||
      surname === '' ||
      patronymic === '' ||
      position === '' ||
      email === '' ||
      phone === '' ||
      age === '' ||
      login === '' ||
      password === '') {
      this.setState(state => ({ valid: !state.valid }))
    }
    else if (clearArrayLogin.join() == login) {
      alert('Пользователь с таким ником уже существует, придумайте новый')
    }
    else {
      let currentData = {
        position: this.state.position,
        name: this.state.name,
        surname: this.state.surname,
        phone: this.state.phone,
        email: this.state.email,
        age: this.state.age,
        departaments: this.state.departaments,
        login: this.state.login,
        patronymic: this.state.patronymic,
        password: this.state.password,
        image: this.state.image,
        imageUrl: this.state.imageurl,
        id: this.makeId()
      }
      this.props.getData(currentData);
      this.setState(initialState);
      setTimeout(() => {
        alert('Сотрудник добавлен')
      }, 300);
    }
  }
  render() {

    return (
      <div className="modal">
        <div className="modal__title">Новый сотрудник</div>
        <div className="modal__wrapper">
          {this.state.valid && <span class="modal__valid">Не все поля заполены!</span>}
          {this.state.done && <span class="modal__valid">Сотрудник добавлен!</span>}
          <div className="modal__general">
            <p>ФИО могут содержать только кириллицу</p>
            <div><input pattern="[а-я,А-Я, ,]*" value={this.state.name} onChange={this.inputNameChange} placeholder="Имя сотрудника" type="text" /></div>
            <div><input pattern="[а-я,А-Я, ,]*" value={this.state.surname} onChange={this.inputSurnameChange} placeholder="Фамилия сотрудника" type="text" /></div>
            <div><input pattern="[а-я,А-Я, ,]*" value={this.state.patronymic} onChange={this.inputPatronymicChange} placeholder="Отчество" type="text" /></div>
            <p>Можно использовать только цифры</p>
            <div><input pattern="[0-9]*" value={this.state.age} onChange={this.inputAgeChange} placeholder="Возраст" type="text" /></div>
            <div><input pattern="[a-z,A-Z,а-я,А-Я, ,]*" value={this.state.position} onChange={this.inputPositionChange} placeholder="Должность" type="text" /></div>
            <span>Выберете отдел из списка</span>
            <select onChange={this.handleChange}>
              <option value="developers">Отдел разработки</option>
              <option value="developers">Отдел разработки</option>
              <option value="sale">Отдел продаж</option>
              <option value="designers">Отдел дизайна</option>
              <option value="support">Отдел тех.поддержки</option>
              <option value="headhunter">Отдел кадров</option>
              <option value="management">Департамент управления</option>
              <option value="marketing">Отдел маркетинга</option>
              <option value="accounting">Бухгалтерия</option>
            </select>
          </div>
          <div className="modal__contacts">
            <p>Можно использовать только цифры</p>
            <div><input pattern="[0-9]*" value={this.state.phone} onChange={this.inputPhoneChange} placeholder="Телефон" type="text" /></div>
            <p>Можно использовать буквы латинского алфавита цифры, точки, и нижнее подчеркивание</p>
            <div><input pattern="[0-9,_,@,a-z,A-Z,.]*" value={this.state.email} onChange={this.inputEmailChange} placeholder="Email" type="text" /></div>
          </div>
          <div className="modal__account">
            <p>Пароль и логин могут содержать только латинские буквы и цифры </p>
            <div><input pattern="[a-z,0-9,A-Z,_]*" value={this.state.password} onChange={this.inputPasswordChange} placeholder="Пароль" type="text" /></div>
            <div><input pattern="[a-z,0-9,A-Z,_]*" value={this.state.login} onChange={this.inputLoginChange} placeholder="Логин" type="text" /></div>
            {this.state.isLoadFile === false ? <span>Нажмите что бы загрузить фото сотрудника</span> : <span>Изображение загруженно</span>}
            <input type="file" accept="image/x-png,image/gif,image/jpeg"  onChange={this.handleFileSelect} name="files[]" multiple />    
            <button className="modal__add" onClick={() => { this.add() }}>Добавить сотрудника</button>
            <button className="modal__close" onClick={this.props.closeModal}>Закрыть</button>
          </div>
        </div>
        <div className="modal__prompt">Поля помеченные звездочкой * являются обязательными для заполнения</div>
      </div>);
  }
}
export default Adduser;
