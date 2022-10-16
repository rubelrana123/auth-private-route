import React, { useContext } from 'react';
import { AuthContext } from '../context/userContext';

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
     name : {user.email}
    </div>
  );
};

export default Home;