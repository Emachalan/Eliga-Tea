import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {

  const[usersList, setUsersList] = useState(null);

  useEffect(() => {
    fetch("http://192.168.101.21:3001/users/")
    .then(res => {
      console.log("users list....", res)
    })
    .catch(err => console.log("catch error"));
  },[]);

  return (
    <div className="App">
     <div style={{display: 'flex', height: 60, width: '100%', backgroundColor: 'red', alignSelf: 'center', justifyContent: 'center'}}>
       <div>
         <h3 style={{color: 'white'}}>Eliga</h3>
       </div>
     </div>
     <div style={{marginTop: 50}}>
       <div>
          {/* <div>Today's Tea Count = {}</div> */}
       </div>
     </div>
    </div>
  );
}

export default App;
