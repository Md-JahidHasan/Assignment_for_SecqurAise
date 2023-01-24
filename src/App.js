import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase-config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Sidenav from './Components/Sidenav';
import Details from './Components/Details';
import Picture from './Components/Picture';
import Events from './Components/Events';
import Header from './Components/Header';

function App() {
  const [users, setUsers] = useState([]);

  const [userDetails, setUserDetails] = useState({});

  const usersCollectionRef = collection(db, "users")

  const handleClick =(id)=>{
    console.log("clicked ", id);
    
      const getUser = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        if (docSnap.exists()) {
          
          setUserDetails({ ...docSnap.data(), id: docSnap.id})
          console.log(userDetails);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }
      getUser()
  }

  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef)
      // console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  // console.log(users);

  return (
    <div className="App">
      
      <Header users={users} ></Header>

      <div className='flex '>
        <Sidenav></Sidenav>
        <Details userDetails={userDetails}></Details>
        <Picture userDetails={userDetails}></Picture>
        <Events handleClick={handleClick} users={users}></Events>
      </div>

    </div>
  );
}

export default App;
