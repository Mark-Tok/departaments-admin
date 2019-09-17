import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
            classValidInputLogin: '',
            classValidInputPassword: ''
        };
        this.inputPasswordChange = this.inputPasswordChange.bind(this);
        this.inputLoginChange = this.inputLoginChange.bind(this);
        this.login = this.login.bind(this);
        this.validSymbol = this.validSymbol.bind(this);
    }
    inputPasswordChange(event) {
        const password = (event.target.validity.valid) ? event.target.value : this.state.password;
        this.setState({ password: password, classValidInputPassword: 'inlet' });
    }

    inputLoginChange(event) {
        const login = (event.target.validity.valid) ? event.target.value : this.state.login;
        this.setState({ login: login, classValidInputLogin: 'inlet' });
    }

    login() {
        if (this.state.password === '' || this.state.login === '') {
            if (this.state.password === '' && this.state.login === '') {
                alert('Введите логин и пароль')
                this.setState({ classValidInputLogin: 'erorr', classValidInputPassword: 'erorr' })
            }
            else if (this.state.login === '') {
                alert('Введите логин')
                this.setState({ classValidInputLogin: 'erorr' })
            }
            else if (this.state.password === '') {
                alert('Введите пароль')
                this.setState({ classValidInputPassword: 'erorr' })
            }
        }
        else {
            this.props.login(this.state.login, this.state.password)
        }
    }

    validSymbol(event) {
        return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)
    }

    render() {
        return (
            <div className="App">
                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    onChange={this.inputLoginChange}
                    className={this.state.classValidInputLogin}
                    value={this.state.login}
                    placeholder="Login" />

                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    className={this.state.classValidInputPassword}
                    placeholder="Password"
                    onChange={this.inputPasswordChange}
                    value={this.state.password} />
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}

export default Form;