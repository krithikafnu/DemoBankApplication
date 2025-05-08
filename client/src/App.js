
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



