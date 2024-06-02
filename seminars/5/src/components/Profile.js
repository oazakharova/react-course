import React, { useContext, useState} from "react";
import { ThemeContext } from "./Context";

import {useDispatch} from 'react-redux';



function Profile() {
  const { theme } = useContext(ThemeContext);


  const updateName = (name) => ( {type: 'UPDATE_NAME', payload : name} );
  const updateEmail = (email) => ( {type: 'UPDATE_EMAIL', payload : email} );



  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateName(name));
    dispatch(updateEmail(email));
  }

  // return <div>Тема интерфейса: {theme}</div>;

  return (
    <div>
      <div>Тема интерфейса: {theme}</div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name"/>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}  placeholder="Email"/>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default Profile;
