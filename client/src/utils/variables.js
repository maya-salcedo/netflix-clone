import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Variables() {
  const [value, setValue] = useState();
  const getValue = async () => {
    try {
      const { data } = await axios.get('/testServer');
      setValue(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <h1>
      {value?.apiKey}
      {console.log(value?.apiKey)}
      HEy
    </h1>
  );
}
