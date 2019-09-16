import React from 'react';

class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.inputPositionRef = React.createRef();
    this.inputNameRef = React.createRef();
    this.inputAgeRef = React.createRef();
    this.inputPasswordRef = React.createRef();
    this.inputNickNameRef = React.createRef();
    this.inputImageLocal = React.createRef();
    this.state = { departaments: 'developers', image: null };
    this.handleChange = this.handleChange.bind(this);
    this.makeId = this.makeId.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
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
    let currentData = {
      position: this.inputPositionRef.current.value,
      name: this.inputNameRef.current.value,
      age: this.inputAgeRef.current.value,
      password: this.inputPasswordRef.current.value,
      departaments: this.state.departaments,
      login: this.inputNickNameRef.current.value,
      image: this.state.image,
      imageUrl: this.inputImageLocal.current.value,
      id: this.makeId()
    }
    this.props.getData(currentData);
    this.inputPositionRef.current.value = '';
    this.inputAgeRef.current.value = '';
    this.inputPasswordRef.current.value = '';
    this.inputNameRef.current.value = '';
    this.inputNickNameRef.current.value = ''
  }

  render() {
    return (
      <div className="form">
        <input ref={this.inputNameRef} placeholder="Имя сотрудника" type="text" />
        <input ref={this.inputPositionRef} placeholder="Должность" type="text" />
        <input ref={this.inputAgeRef} placeholder="Возраст" type="text" />
        <input ref={this.inputPasswordRef} placeholder="Пароль" type="text" />
        <input ref={this.inputNickNameRef} placeholder="Логин" type="text" />
        <input type="file" onChange={this.handleFileSelect} name="files[]" multiple />
        <input ref={this.inputImageLocal} placeholder="URL" type="text" />
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
        <button onClick={() => { this.add() }}>Добавить сотрудника</button>
      </div>);
  }
}
export default Adduser;
