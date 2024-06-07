import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function DataDisplay() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.example.com/data') // Replace with an actual API
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>{t('data')}</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
