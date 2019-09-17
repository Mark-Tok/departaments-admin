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

    render() {
        return (
            <div className="App">
                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    onChange={this.inputLoginChange}
                    className={this.state.classValidInputLogin}
                    value={this.state.login}
                    placeholder="Login"
                    onKeyPress={this.loginKeyPress} />

                <input
                    type="text"
                    pattern="[a-z,0-9,A-Z,_]*"
                    className={this.state.classValidInputPassword}
                    placeholder="Password"
                    onChange={this.inputPasswordChange}
                    value={this.state.password}
                    onKeyPress={this.loginKeyPress} />
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}

export default Form;