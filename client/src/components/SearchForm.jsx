import React, { useState } from 'react';
import '../styles/n2.css';

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({ 
    name: '', 
    birthday: '', 
    type: '' 
  });

  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Client Directory</h2>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <span className="form-group name-group">
          <label htmlFor="name" className="name-label">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="name-input" 
            placeholder="Enter name" 
            onChange={handleChange}
          />
        </span>
        <span className="form-group birthday-group">
          <label htmlFor="birthday" className="birthday-label">Birthday</label>
          <input 
            type="text" 
            id="birthday" 
            name="birthday"
            className="birthday-input" 
            placeholder="MM / DD / YYYY" 
            onChange={handleChange}
          />
        </span>
        <span className="form-group account-group">
          <label htmlFor="account-type" className="account-type-label">Account Type</label>
          <select 
            id="account-type" 
            name="type"
            className="account-type-select"
            onChange={handleChange}
          >
            <option value="">All</option>
            <option>Checking</option>
            <option>Savings</option>
          </select>
        </span>
        <button type="submit" className="search-button">
          <img src="/assets/searchicon.png" alt="Search" className="search-icon" />
        </button>
        <span className="icons">
          <img src="/assets/bell.png" alt="Notifications" className="icon bell" />
          <img src="/assets/gear.png" alt="Settings" className="icon gear" />
          <img src="/assets/user-profile.jpg" alt="User Profile" className="user-profile" />
        </span>
      </form>
    </div>
  );
}

export default SearchForm;





/*import React from 'react';
import '../styles/n2.css';

function SearchForm() {
  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Client Directory</h2>
      </div>
      <form className="search-form">
        <span className="form-group name-group">
          <span className="name-label">Name</span>
          <input type="text" id="name" className="name-input" placeholder="Enter name" />
        </span>
        <span className="form-group birthday-group">
          <label htmlFor="birthday" className="birthday-label">Birthday</label>
          <input type="text" id="birthday" className="birthday-input" placeholder="MM / DD / YYYY" />
        </span>
        <span className="form-group account-group">
          <label htmlFor="account-type" className="account-type-label">Account Type</label>
          <select id="account-type" className="account-type-select">
            <option value="">All</option>
            <option>Checking</option>
            <option>Savings</option>
          </select>
        </span>
        <button type="submit" className="search-button">
          <img src="/assets/searchicon.png" alt="Search" className="search-icon" />
        </button>
        <span className="icons">
          <img src="/assets/bell.png" alt="Notifications" className="icon bell" />
          <img src="/assets/gear.png" alt="Settings" className="icon gear" />
          <img src="/assets/user-profile.jpg" alt="User Profile" className="user-profile" />
        </span>
      </form>
    </div>
  );
}

export default SearchForm;*/

/*
import React, { useState } from 'react';
import '../styles/n2.css';

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({ name: '', birthday: '', type: '' });

  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="birthday" placeholder="YYYY-MM-DD" onChange={handleChange} />
      <select name="type" onChange={handleChange}>
        <option value="">All</option>
        <option>Checking</option>
        <option>Savings</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;*/

