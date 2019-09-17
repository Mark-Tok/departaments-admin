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
  imageurl: ''
};
class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.inputImageLocal = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.makeId = this.makeId.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.inputPasswordChange = this.inputPasswordChange.bind(this);
    this.inputLoginChange = this.inputLoginChange.bind(this);
    this.inputNameChange = this.inputNameChange.bind(this);
    this.inputSurnameChange = this.inputSurnameChange.bind(this);
    this.inputPositionChange = this.inputPositionChange.bind(this);
    this.inputAgeChange = this.inputAgeChange.bind(this);
    this.inputPatronymicChange = this.inputPatronymicChange.bind(this);
    this.inputPhoneChange = this.inputPhoneChange.bind(this);
    this.inputEmailChange = this.inputEmailChange.bind(this);
    this.inputImageurlChange = this.inputImageurlChange.bind(this);
    this.state = initialState
  }

  

  inputPasswordChange(event) {
    const password = (event.target.validity.valid) ? event.target.value : this.state.password;
    this.setState({ password: password});
  }

  inputImageurlChange(event) {
    const imageurl = (event.target.validity.valid) ? event.target.value : this.state.imageurl;
    this.setState({ imageurl: imageurl});
  }

  inputEmailChange(event) {
    const email = (event.target.validity.valid) ? event.target.value : this.state.email;
    this.setState({ email: email});
  }

  inputPhoneChange(event) {
    const phone = (event.target.validity.valid) ? event.target.value : this.state.phone;
    this.setState({ phone: phone});
  }

  inputAgeChange(event) {
    const age = (event.target.validity.valid) ? event.target.value : this.state.age;
    this.setState({age: age});
  }

  inputPositionChange(event) {
    const password = (event.target.validity.valid) ? event.target.value : this.state.password;
    this.setState({ password: password});
  }

  inputNameChange(event) {
    const name = (event.target.validity.valid) ? event.target.value : this.state.name;
    this.setState({ name: name});
  }
  
  inputSurnameChange(event) {
    const surname = (event.target.validity.valid) ? event.target.value : this.state.surname;
    this.setState({ surname: surname});
  }

  inputPatronymicChange(event) {
    const patronymic = (event.target.validity.valid) ? event.target.value : this.state.patronymic;
    this.setState({ patronymic: patronymic});
  }

  inputPositionChange(event) {
    const position = (event.target.validity.valid) ? event.target.value : this.state.position;
    this.setState({ position: position});
  }

  inputLoginChange(event) {
    const login = (event.target.validity.valid) ? event.target.value : this.state.login;
    this.setState({ login: login});
  }

  // load local image file
  handleFileSelect(event) {
    let files = event.target.files;
    for (let i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      let reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          this.setState({ image: e.target.result })
        }.bind(this);
      }).bind(this)(f);
      reader.readAsDataURL(f);
    }
  }

  handleChange(event) {
    this.setState({ departaments: event.target.value });
  }

  makeId() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  add() {
   let  {name, login, password, surname, patronymic, position, email, phone, age} = this.state
   if(name === '' || 
      surname === '' || 
      patronymic === '' || 
      position === '' || 
      email === '' || 
      phone === '' || 
      age === '' || 
      login === '' || 
      password === '') {
     alert('Не все поля заполнены')
   }
   else {
    let currentData = {
      position: this.state.position,
      name: this.state.name,
      surname: this.state.suname,
      phone: this.state.phone,
      email: this.state.email,
      age: this.state.age,
      departaments: this.state.departaments,
      login: this.state.login,
      patronymic: this.state. patronymic,
      password: this.state.password,
      image: this.state.image,
      imageUrl: this.state.imageurl,
      id: this.makeId()
    }
    this.props.getData(currentData);
    this.setState(initialState)
   }
  }

  render() {
    return (
      <div className="form">
        <input pattern="[а-я,А-Я, ,]*" value={this.state.name}  onChange={this.inputNameChange} placeholder="Имя сотрудника" type="text" />
        <input pattern="[а-я,А-Я, ,]*" value={this.state.surname}  onChange={this.inputSurnameChange} placeholder="Фамилия сотрудника" type="text" />
        <input pattern="[а-я,А-Я, ,]*" value={this.state.patronymic}  onChange={this.inputPatronymicChange} placeholder="Отчество" type="text" />
        <input pattern="[a-z,A-Z,а-я,А-Я, ,]*" value={this.state.position}  onChange={this.inputPositionChange} placeholder="Должность" type="text" />
        <input pattern="[0-9]*" value={this.state.phone}  onChange={this.inputPhoneChange} placeholder="Телефон" type="text" />
        <input pattern="[0-9,_,@,a-z,A-Z]*" value={this.state.email}  onChange={this.inputEmailChange} placeholder="Email" type="text" />
        <input pattern="[0-9]*" value={this.state.age}  onChange={this.inputAgeChange} placeholder="Возраст" type="text" />
        <input type="file" onChange={this.handleFileSelect} name="files[]" multiple />
        <input pattern="[0-9,_,@,a-z,A-Z,/,:,.,+,-,=,;]*" value={this.state.imageurl} onChange={this.inputImageurlChange}  placeholder="URL image" type="text" />
        <select onChange={this.handleChange}>
          <option value="developers">Отдел разработки</option>
          <option value="sale">Отдел продаж</option>
          <option value="designers">Отдел дизайна</option>
          <option value="support">Отдел тех.поддержки</option>
          <option value="headhunter">Отдел кадров</option>
          <option value="management">Департамент управления</option>
          <option value="marketing">Отдел маркетинга</option>
          <option value="accounting">Бухгалтерия</option>
        </select>
        <input pattern="[a-z,0-9,A-Z,_]*" value={this.state.password} onChange={this.inputPasswordChange}  placeholder="Пароль" type="text" />
        <input pattern="[a-z,0-9,A-Z,_]*" value={this.state.login} onChange={this.inputLoginChange}  placeholder="Логин" type="text" />
        <button onClick={() => { this.add() }}>Добавить сотрудника</button>
      </div>);
  }
}
export default Adduser;
