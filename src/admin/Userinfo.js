import React from 'react';

function Userinfo(props) {
    return (
      <div>
        <ul>
        {props.info.length === 0 ? null : props.info.map((item, index) => {
              return <li key={index}>{item.name} <button onClick={()=>{props.delete(item, index, props.departament)}}>Удалить</button></li>
            })
        }
        </ul>
      </div>
    );
}

export default Userinfo;