/*import React, { useState } from 'react';
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

export default App;*/


import React, { useState, Suspense, lazy } from 'react';
import './styles/n2.css';

const ClientTable = lazy(() => import('./components/ClientTable'));
const SearchForm = lazy(() => import('./components/SearchForm'));

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    const isEmpty = Object.values(params).every(val => val === '');
    setSearchParams(isEmpty ? null : params);
  };

  return (
    <div className="main-container">
      <Suspense fallback={<div>Loading Search Form...</div>}>
        <SearchForm onSearch={handleSearch} />
      </Suspense>
      <Suspense fallback={<div>Loading Table...</div>}>
        <ClientTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default App;



