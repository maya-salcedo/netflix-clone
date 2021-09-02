import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    try {
      const { data } = await axios.get('http://localhost:9000/testServer');
      setInfo(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return <div>{info}</div>;
};

export default HomeScreen;
