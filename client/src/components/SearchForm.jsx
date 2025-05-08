import React, { useState } from 'react';
import '../styles/n2.css';

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({ 
    name: '', 
    birthday: '', 
    type: '' 
  });
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(filters);
  };

  const settingsOptions = [
    "Account Settings",
    "Transaction History",
    "Security Settings",
    "Help Center"
  ];

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
          <img src="/assets/search_icon.png" alt="Search" className="search-icon" />
        </button>
        <span className="icons">
          <div className="icon-container">
            <img 
              src="/assets/bell_icon.png" 
              alt="Notifications" 
              className="icon bell" 
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {showNotifications && (
              <div className="notification-popup">
                <div className="popup-header">
                  <span>Notifications</span>
                  <button onClick={() => setShowNotifications(false)}>X</button>
                </div>
                <p>No New Notifications</p>
              </div>
            )}
          </div>
          
          <div className="icon-container">
            <img 
              src="/assets/gear_icon.png" 
              alt="Settings" 
              className="icon gear" 
              onClick={() => setShowSettings(!showSettings)}
            />
            {showSettings && (
              <div className="settings-popup">
                <div className="popup-header">
                  <span>Settings</span>
                  <button onClick={() => setShowSettings(false)}>X</button>
                </div>
                <ul>
                  {settingsOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="icon-container">
            <img 
              src="/assets/user_profile.jpg" 
              alt="User Profile" 
              className="user-profile" 
              onClick={() => setShowProfile(!showProfile)}
            />
            {showProfile && (
              <div className="profile-popup">
                <div className="popup-header">
                  <span>Profile</span>
                  <button onClick={() => setShowProfile(false)}>X</button>
                </div>
                <img 
                  src="/assets/user_profile.jpg" 
                  alt="User Profile" 
                  className="profile-image-expanded" 
                />
              </div>
            )}
          </div>
        </span>
      </form>
    </div>
  );
}

export default SearchForm;