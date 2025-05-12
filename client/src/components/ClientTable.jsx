import React, { useEffect, useState } from 'react';
import '../styles/n2.css';
import { motion } from 'framer-motion';

function ClientTable({ searchParams }) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [clientToClose, setClientToClose] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      const query = new URLSearchParams(searchParams).toString();
      const url = query
        ? `https://bankapplication-5y36.onrender.com/api/clients/search?${query}`
        : `https://bankapplication-5y36.onrender.com/api/clients`;

      const res = await fetch(url);
      const data = await res.json();
      setClients(data);
    };

    fetchClients();
  }, [searchParams]);

  const fetchClientDetails = async (account) => {
    const res = await fetch(`https://bankapplication-5y36.onrender.com/api/clients/${account}`);
    const data = await res.json();
    setSelectedClient(data);
    setShowDetails(true);
  };

  const handleCloseAccount = async () => {
    try {
      const response = await fetch(
        `https://bankapplication-5y36.onrender.com/api/clients/${clientToClose}/close`,
        { method: 'PATCH' }
      );
      if (response.ok) {
        // Update local state to reflect the change
        setClients(clients.map(client => 
          client.account === clientToClose 
            ? { ...client, status: 'disabled' } 
            : client
        ));
      }
      setShowCloseConfirm(false);
    } catch (err) {
      console.error('Error closing account:', err);
    }
  };

  return (
    <motion.div
      className="table-wrapper"
      layout
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="table-container">
        <table>
          <thead>
            <tr className="table-header">
              <th className="row-header-name">Name</th>
              <th className="row-header-birthday">Birthday</th>
              <th className="row-header-type">Type</th>
              <th className="row-header-account">Account</th>
              <th className="row-header-balance">Balance</th>
              <th className="row-header-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'row-background-odd' : 'row-background-even'}
              >
                <td className="col-name">{client.name}</td>
                <td className="col-birthday">{client.birthday}</td>
                <td className="col-type">{client.type}</td>
                <td className="col-account">{client.account}</td>
                <td className="col-balance">${client.balance.toFixed(2)}</td>
                <td className="col-actions">
                  <button 
                    className="action-link"
                    onClick={() => fetchClientDetails(client.account)}
                  >
                    Details
                  </button>
                  <span> | </span>
                  <button 
                    className="action-link"
                    onClick={() => setShowTransfer(true)}
                  >
                    Transfer
                  </button>
                  <span> | </span>
                  <button 
                    className="action-link"
                    onClick={() => {
                      setClientToClose(client.account);
                      setShowCloseConfirm(true);
                    }}
                    disabled={client.status === 'disabled'}
                  >
                    Close Account
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Client Details Popup */}
      {showDetails && selectedClient && (
        <div className="popup-overlay">
          <div className="client-details-popup">
            <div className="popup-header">
              <h3>Client Details</h3>
              <button onClick={() => setShowDetails(false)}>X</button>
            </div>
            <div className="popup-content">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span>{selectedClient.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Account:</span>
                <span>{selectedClient.account}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Balance:</span>
                <span>${selectedClient.balance.toFixed(2)}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span>{selectedClient.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span>{selectedClient.phoneNumber}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span>{selectedClient.status}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Member Since:</span>
                <span>{selectedClient.member_since}</span>
              </div>
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      )}

      {/* Transfer Popup */}
      {showTransfer && (
        <div className="popup-overlay">
          <div className="transfer-popup">
            <div className="popup-header">
              <h3>Transfer Account</h3>
              <button onClick={() => setShowTransfer(false)}>X</button>
            </div>
            <div className="popup-content">
              <p>Only regional managers can transfer accounts.</p>
              <p>Please contact admin department for access.</p>
            </div>
          </div>
        </div>
      )}

      {/* Close Account Confirmation */}
      {showCloseConfirm && (
        <div className="popup-overlay">
          <div className="confirm-popup">
            <div className="popup-header">
              <h3>Confirm Account Closure</h3>
              <button onClick={() => setShowCloseConfirm(false)}>X</button>
            </div>
            <div className="popup-content">
              <p>Are you sure you want to close this account?</p>
              <div className="button-group">
                <button 
                  className="confirm-button"
                  onClick={handleCloseAccount}
                >
                  Confirm
                </button>
                <button 
                  className="cancel-button"
                  onClick={() => setShowCloseConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ClientTable;