import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Form from './Form'
import User from './../admin/User'
import Userpage from '../user/Userpage'
import Departaments from './../admin/Departaments'

const dbName = "departments";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: null,
            userData: [],
            currentUser: '',
        };
    }

    inputPasswordChange = (event) => {
        this.setState({ password: event.target.value, classValidInputPassword: 'inlet' });
    }

    inputLoginChange = (event) => {
        this.setState({ login: event.target.value, classValidInputLogin: 'inlet' });
    }

    login = (login, password) => {
        if (password === 'admin' && login === 'admin') {
            localStorage.setItem('adminAuth', true)
            this.forceUpdate()
        }
        else {
           let auth = () => this.state.userData.map((item) => {
                if (item.password === password && item.login === login) {
                    localStorage.setItem('userAuth', JSON.stringify({ auth: true, user: item }))
                    this.forceUpdate()
                }
                else {
                    return false;
                }
            })
            let responseAuth = auth()[auth().length - 1];
            if (responseAuth === false) {
                alert('Пользователь с такими данными не найден, проверьте правильность ввода данных')
            }
        }
    }

    createStores = () => {
        let request = indexedDB.open(dbName, 1);
        // get data from db for auth
        request.onsuccess = (function (event) {
            let db = event.target.result;
            db.transaction('developers').objectStore('developers').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('designers').objectStore('designers').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('sale').objectStore('sale').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('accounting').objectStore('accounting').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('management').objectStore('management').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('marketing').objectStore('marketing').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('headhunter').objectStore('headhunter').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
            db.transaction('support').objectStore('support').getAll().onsuccess = (function (event) {
                let result = event.target.result;
                result.map((item) => {
                    this.setState(state => ({ userData: [...state.userData, item] }))
                })
            }.bind(this));
        }.bind(this));
    }

    newUser = (newItem) => {
        this.setState({ userData: [...this.state.userData, newItem] })
    }

    componentDidMount() {
        this.createStores();
    }

    render() {
        if (JSON.parse(localStorage.getItem('userAuth')) !== null) {
            return (
                <Router>
                    <Route
                        path={'/id' + JSON.parse(localStorage.getItem('userAuth')).user.id}
                        component={Userpage} />
                    <Redirect to={'/id' + JSON.parse(localStorage.getItem('userAuth')).user.id} />
                </Router>
            )
        }

        else if (JSON.parse(localStorage.getItem('adminAuth')) === true) {
            // render page user from id url
            if (window.location.href.includes('id')) {
                if (this.state.userData != 0) {
                    // delete duplicate
                    let cloneUserData = this.state.userData;
                    cloneUserData = Array.from(new Set(this.state.userData.map(JSON.stringify))).map(JSON.parse);
                    let currentUrl = window.location.href;
                    let idFromUrl = currentUrl.split('id').pop();
                    let currentUserArray = cloneUserData.map((item) => {
                        if (item.id === idFromUrl) {
                            return item
                        }
                    })
                    // remove unnecessary values
                    let clearCurrentUserArray = currentUserArray.filter(function (el) {
                        return el != undefined;
                    });
                    if (clearCurrentUserArray != 0) {
                        return (
                            <Router>
                                <Route exact
                                    path='/admin'
                                    render={(props) => <Departaments {...props} newUser={(item) => { this.newUser(item) }} />} />
                                <Route
                                    path={'/admin/id' + clearCurrentUserArray[0].id}
                                    render={(props) => <User {...props} data={clearCurrentUserArray} />} />
                            </Router>
                        )
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            else {
                return (
                    <Router>
                        <Route
                            path='/admin'
                            render={(props) => <Departaments {...props} newUser={(item) => { this.newUser(item) }} />} />
                        <Redirect to="/admin" />
                    </Router>
                )
            }
        }
        else {
            return (
                <div>
                    <Router>
                        <Route
                            path='/'
                            render={(props) => <Form {...props} login={(login, password) => { this.login(login, password) }} />} />
                        <Redirect to="/" />
                    </Router>
                </div>
            )
        }
    }
}

export default Authorization;