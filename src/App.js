import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import Sidenav from './Components/Sidenav';
import Details from './Components/Details';
import Picture from './Components/Picture';
import Events from './Components/Events';
import Header from './Components/Header';

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")

  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef)
      console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])
  console.log(users);
  return (
    <div className="App">
      
      <Header></Header>
      <div className='flex '>
        <Sidenav></Sidenav>
        <Details></Details>
        <Picture></Picture>
        <Events users={users}></Events>
      </div>
    </div>
  );
}

export default App;
