import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
const [name, setName] = useState('');
const [room, setRoom] = useState('');

  return (
    <div className="joinContainer">
      <div className="welcomingContainer">
        <h1 className="welcomeHeading">Welcome to DevChat</h1>
        <span className="welcomeMsg">Join in the fun below by entering your name and choice of chatroom!</span>
      </div>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
      
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Name</div>
            </div>
            <input
              className="joinInput form-control" 
              type="text" 
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text room">Room</div>
            </div>
            <input
              className="joinInput form-control" 
              type="text" 
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>

          <Link 
            onClick={(e) => (!name || !room) ? e.preventDefault() : null} 
            to={`/DevChat-App/chat?name=${name}&room=${room}`
          }>
            <button className="button mt-20" type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;