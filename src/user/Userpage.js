import React from 'react';

class Userpage extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        user: [JSON.parse(localStorage.getItem('userAuth')).user]
      };
  }

  exit = () =>  {
    localStorage.removeItem('userAuth');
  }

  render() {
  return (
    <div>
        {
          this.state.user.map((item) => {
            return <div>
              <ul>
                <li>{item.name}</li>
                <li>{item.position}</li>
                <li>{item.departaments}</li>
              </ul>
              <img src ={item.image === null ? item.imageUrl : item.image}/>
            </div>
          })
        }
    <a href='' onClick={this.exit}>Выйти</a>
    </div>
  );
  }
}

export default Userpage;