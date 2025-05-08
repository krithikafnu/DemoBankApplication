/**import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState({ users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Check what data you're getting from backend
  console.log('Backend data:', backendData);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!backendData.users || backendData.users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div>
      <h1>Users from Backend</h1>
      {backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </div>
  );
}

export default App;**/
//-----------------------------------------------------------------

/*
import React from 'react';
import './styles/n2.css';
import SearchForm from './components/SearchForm';
import ClientTable from './components/ClientTable';

function App() {
  return (
    <div className="main-container">
      <SearchForm />
      <ClientTable />
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import ClientTable from './components/ClientTable';
import './styles/n2.css';

function App() {
  // Start with null to indicate "no filters"
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    // If all fields are empty, set searchParams back to null to trigger full list
    const isEmpty = Object.values(params).every(val => val === '');
    setSearchParams(isEmpty ? null : params);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <ClientTable searchParams={searchParams} />
    </div>
  );
}

export default App;


