import React  from 'react';
import { useRef, useEffect, forwardRef } from 'react';


const Card = forwardRef(({ name, avatar, email, company, followers, following, repos }, ref) => {
    return (
      <div ref={ref} className="card">
        <img src={avatar} alt="..." />
        <div className='card-body'>
          <h2>{name}</h2>
          <h4>{email}</h4>
          <h4>{company}</h4>
          <h4>{followers} | {following}</h4>
          <h4> Public Repos: {repos}</h4>
        </div>
      </div>
    );
  });

export default function Table({users, onUserRefUpdate}){
    const lastUserRef = useRef(null);
    useEffect(() => {
        onUserRefUpdate(lastUserRef.current);
      }, [onUserRefUpdate]);
    
    
    return(
        <div className="table">
            {(users.length > 0) ? users.map((user, index) =>{
                return <Card ref={(index === users.length - 1) ? lastUserRef : null } key={user.id} {...user}/>;
            }) : <p>Search for Users on Github!!</p>}
        </div>
    );
}