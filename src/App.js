import React, {useState, useContext} from 'react'
import { UserContext } from './context/UserContext';
function App() {
const {globalVariable, user, setUser} = useContext(UserContext)


setUser("Monday logged in")
  return (
    <div >
     {globalVariable}
     <br/>
     {user}
    </div>
  );
}

export default App;
