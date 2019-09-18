import React from 'react';
import Adduser from './Adduser';
import Userinfo from '../user/Userinfo';
require('indexeddb-getall-shim');

const dbName = "departments";

class Departaments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
      sale: [],
      designers: [],
      support: [],
      marketing: [],
      headhunter: [],
      accounting: [],
      management: [],
      isOpenModal: false
    };
    this.addDataState = this.addDataState.bind(this);
    this.exit = this.exit.bind(this);
    this.deleteItemState = this.deleteItemState.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  exit() {
    localStorage.removeItem('adminAuth');
  }

  handleOpenModal() {
    this.setState(state => ({isOpenModal: !state.isOpenModal}))
  }
  
  addDataState(data) {
    if (data.departaments === 'developers') {
      let index = this.state.developers.length;
      data.index = index;
      this.setState(state => ({
        developers: [...state.developers, data] 
      }))
    }
    if (data.departaments === 'designers') {
      let index = this.state.designers.length;
      data.index = index;
      this.setState(state => ({
        designers: [...state.designers, data]
      }))
    }
    if (data.departaments === 'accounting') {
      let index = this.state.accounting.length;
      data.index = index;
      this.setState(state => ({
        accounting: [...state.accounting, data]
      }))
    }
    if (data.departaments === 'sale') {
      let index = this.state.sale.length;
      data.index = index;
      this.setState(state => ({
        sale: [...state.sale, data]
      }))
    }
    if (data.departaments === 'marketing') {
      let index = this.state.marketing.length;
      data.index = index;
      this.setState(state => ({
        marketing: [...state.marketing, data]
      }))
    }
    if (data.departaments === 'headhunter') {
      let index = this.state.headhunter.length;
      data.index = index;
      this.setState(state => ({
        headhunter: [...state.headhunter, data]
      }))
    }
    if (data.departaments === 'support') {
      let index = this.state.support.length;
      data.index = index;
      this.setState(state => ({
        support: [...state.support, data]
      }))
    }
    if (data.departaments === 'management') {
      let index = this.state.management.length;
      data.index = index;
      this.setState(state => ({
        management: [...state.management, data]
      }))
    }
  }

 addDataInDb(newData, store) {
    let request = indexedDB.open(dbName, 1);
    request.onsuccess = function (event) {
      let db = event.target.result;
      let transaction = db.transaction(store, 'readwrite');
      transaction.onerror = function (event) {
        console.log(event.target.error.message)
      };
      let objectStore = transaction.objectStore(store);
      objectStore.put(newData);
    };
  }

  deleteItemState(item, index, departament) {
    switch (departament) {
      case 'developers':
        this.state.developers.splice(index, 1)
        this.setState(state => ({
          developers: state.developers
        }))
        this.deleteItemDb('developers', item.id);
        break;
      case 'designers':
        this.state.designers.splice(index, 1)
        this.setState(state => ({
          designers: state.designers
        }))
        this.deleteItemDb('designers', item.id);
        break;
      case 'headhunter':
        this.state.headhunter.splice(index, 1)
        this.setState(state => ({
          headhunter: state.headhunter
        }))
        this.deleteItemDb('headhunter', item.id);
        break;
      case 'accounting':
        this.state.accounting.splice(index, 1)
        this.setState(state => ({
          accounting: state.accounting
        }))
        this.deleteItemDb('accounting', item.id);
        break;
      case 'sale':
        this.state.sale.splice(index, 1)
        this.setState(state => ({
          sale: state.sale
        }))
        this.deleteItemDb('sale', item.id);
        break;
      case 'marketing':
        this.state.marketing.splice(index, 1)
        this.setState(state => ({
          marketing: state.marketing
        }))
        this.deleteItemDb('marketing', item.id);
        break;
      case 'management':
        this.state.management.splice(index, 1)
        this.setState(state => ({
          management: state.management
        }))
        this.deleteItemDb('management', item.id);
        break;
      case 'support':
        this.state.support.splice(index, 1)
        this.setState(state => ({
          support: state.support
        }))
        this.deleteItemDb('support', item.id);
        break;
    }
  }

  deleteItemDb(store, id) {
    let request = indexedDB.open(dbName, 1);
    request.onsuccess = function (event) {
      let db = event.target.result;
      let request = db.transaction(store, "readwrite")
        .objectStore(store)
        .delete(id);
      request.onsuccess = function (event) {
        alert('Сотрудник удален')
      };
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      developers,
      sale,
      designers,
      support,
      management,
      headhunter,
      accounting,
      marketing
    } = prevState;
    //  add data in db
    if (developers.length < this.state.developers.length) {
      let newItem = this.state.developers[this.state.developers.length - 1];
      this.addDataInDb(newItem, 'developers')
    }
    if (designers.length < this.state.designers.length) {
      let newItem = this.state.designers[this.state.designers.length - 1];
      this.addDataInDb(newItem, 'designers')
    }
    if (sale.length < this.state.sale.length) {
      let newItem = this.state.sale[this.state.sale.length - 1];
      this.addDataInDb(newItem, 'sale')
    }
    if (support.length < this.state.support.length) {
      let newItem = this.state.support[this.state.support.length - 1];
      this.addDataInDb(newItem, 'support')
    }
    if (headhunter.length < this.state.headhunter.length) {
      let newItem = this.state.headhunter[this.state.headhunter.length - 1];
      this.addDataInDb(newItem, 'headhunter')
    }
    if (management.length < this.state.management.length) {
      let newItem = this.state.management[this.state.management.length - 1];
      this.addDataInDb(newItem, 'management')
    }
    if (accounting.length < this.state.accounting.length) {
      let newItem = this.state.accounting[this.state.accounting.length - 1];
      this.addDataInDb(newItem, 'accounting')
    }
    if (marketing.length < this.state.marketing.length) {
      let newItem = this.state.marketing[this.state.marketing.length - 1];
      this.addDataInDb(newItem, 'marketing')
    }
  }

  componentDidMount() {
    let request = indexedDB.open(dbName, 1);
    // get store form indexdb for state
    request.onsuccess = (function (event) {
      let db = event.target.result;
      db.transaction('developers').objectStore('developers').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          developers: state.developers.concat(result)
        }));
      }.bind(this));
      db.transaction('designers').objectStore('designers').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          designers: state.designers.concat(result)
        }));
      }.bind(this));
      db.transaction('sale').objectStore('sale').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          sale: state.sale.concat(result)
        }));
      }.bind(this));
      db.transaction('support').objectStore('support').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          support: state.support.concat(result)
        }));
      }.bind(this));
      db.transaction('headhunter').objectStore('headhunter').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          headhunter: state.headhunter.concat(result)
        }));
      }.bind(this));
      db.transaction('accounting').objectStore('accounting').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          accounting: state.accounting.concat(result)
        }));
      }.bind(this));
      db.transaction('management').objectStore('management').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          management: state.management.concat(result)
        }));
      }.bind(this));
      db.transaction('marketing').objectStore('marketing').getAll().onsuccess = (function (event) {
        let result = event.target.result;
        result.sort((prev, next) => prev.index - next.index);
        this.setState(state => ({
          marketing: state.marketing.concat(result)
        }));
      }.bind(this));
    }.bind(this));
  }

  render() {
    return (
      <div className="departaments">
        <button className="departaments__add" onClick={this.handleOpenModal}>Добавить</button>
        <a href="" className="departaments__exit" onClick={this.exit}>Выйти</a>
        {
          this.state.isOpenModal &&  <Adduser closeModal={this.handleOpenModal} getData={this.addDataState} />
        }
        <div className="departaments__wrapper">
        <div className="departaments__dev">
          <p>Отдел разработки</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}} departament='developers' info={this.state.developers} delete={this.deleteItemState} />
        </div>
        <div className="departaments__designer">
          <p>Отдел дизайна</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='designers' info={this.state.designers} delete={this.deleteItemState} />
        </div>
        <div className="departaments__sale">
          <p>Отдел продаж</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='sale' info={this.state.sale} delete={this.deleteItemState} />
        </div>
        <div className="departaments__support">
          <p>Техническая поддержка</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='support' info={this.state.support} delete={this.deleteItemState} />
        </div>
        <div className="departaments__headhunter">
          <p>Отдел кадров</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='headhunter' info={this.state.headhunter} delete={this.deleteItemState} />
        </div>
        <div className="departaments__accounting">
          <p>Отдел бухгалтерии</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='accounting' info={this.state.accounting} delete={this.deleteItemState} />
        </div>
        <div className="departaments__marketing">
          <p>Отдел маркетинга</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}} departament='marketing' info={this.state.marketing} delete={this.deleteItemState} />
        </div>
        <div className="departaments__management">
          <p>Отдел управления</p>
          <Userinfo newUser={(item) => {this.props.newUser(item)}}  departament='management' info={this.state.management} delete={this.deleteItemState} />
        </div>
        </div>
      </div>);
  }
}
export default Departaments;
