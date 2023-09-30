import './style/App.css';
import Header from './components/header'
import Table from './components/table';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const lastUserRef = useRef(null);
  const headRef = useRef(null);

  const handleUserRefUpdate = (userRef) => {
    lastUserRef.current = userRef;
  };

  const handleUserNotFound = () => {
    headRef.current.classList.add("error")
      setTimeout(()=>{
        headRef.current.classList.remove("error")
      },400);
  }

  async function handleSearch(userName){
    if(users.length > 0 && users[users.length -1].userName.toLowerCase() === userName.toLowerCase()){
      lastUserRef.current.scrollIntoView({behavior: 'smooth',});
      lastUserRef.current.classList.add("outline")
      setTimeout(()=>{
        lastUserRef.current.classList.remove("outline")
      },1000);
    }else if(users.find(user => user.userName.toLowerCase() === userName.toLowerCase())){
    }else{
      try{
        let response = await fetch("https://api.github.com/users/" + userName);
        if(response.status !== 200)  
          throw new Error("user not found");
        let user = await response.json();
        setUsers([
          ...users,
          {
            id: user.id,
            userName:user.login,
            name: user.name, 
            avatar: user.avatar_url, 
            email: user.email, 
            company: user.company, 
            followers: user.followers, 
            following: user.following, 
            repos: user.public_repos
          }
        ]);
      } catch (e){
        handleUserNotFound();
        console.log(e.message);
      }
    }
  }

  return (
    <div className="App">
      <Header search={handleSearch} ref={headRef}/>
      <Table onUserRefUpdate={handleUserRefUpdate} users={users}/>
    </div>
  );
}

export default App;
