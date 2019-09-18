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
    }
    inputPasswordChange = (event) => {
        const password = (event.target.validity.valid) ? event.target.value : this.state.password;
        this.setState({ password: password, classValidInputPassword: 'inlet' });
    }

    inputLoginChange = (event) => {
        const login = (event.target.validity.valid) ? event.target.value : this.state.login;
        this.setState({ login: login, classValidInputLogin: 'inlet' });
    }

    loginKeyPress = (event) => {
        if (event.charCode === 13) {
            this.login()
        }
    }

    login = () => {
        if (this.state.password === '' || this.state.login === '') {
            if (this.state.password === '' && this.state.login === '') {
                alert('Введите логин и пароль')
                this.setState({ classValidInputLogin: 'error', classValidInputPassword: 'error' })
            }
            else if (this.state.login === '') {
                alert('Введите логин')
                this.setState({ classValidInputLogin: 'error' })
            }
            else if (this.state.password === '') {
                alert('Введите пароль')
                this.setState({ classValidInputPassword: 'error' })
            }
        }
        else {
            this.props.login(this.state.login, this.state.password)
        }
    }

    render() {
        return (
            <div className="form">
                <div className="form__wrapper">
                <div>    
                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    onChange={this.inputLoginChange}
                    className={this.state.classValidInputLogin}
                    value={this.state.login}
                    placeholder="Логин"
                    onKeyPress={this.loginKeyPress} />
                </div>    
                <div>
                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    className={this.state.classValidInputPassword}
                    placeholder="Пароль"
                    type="password"
                    onChange={this.inputPasswordChange}
                    value={this.state.password}
                    onKeyPress={this.loginKeyPress} />
                 </div>   
                <button onClick={this.login}>войти</button>
                </div>
            </div>
        );
    }
}

export default Form;