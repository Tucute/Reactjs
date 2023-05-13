import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Showcard from './Showcard';

export default function Lifecycle2() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getUserAPI = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

    axios.get(getUserAPI)
      .then((res) => setListUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Showcard listUser={listUser} />
    </div>
  );
}