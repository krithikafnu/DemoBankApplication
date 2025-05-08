import React, { useEffect, useState } from 'react';
import '../styles/n2.css';
import { motion } from 'framer-motion';

function ClientTable({ searchParams }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const query = new URLSearchParams(searchParams).toString();
      const url = query
        ? `http://localhost:5001/api/clients/search?${query}`
        : `http://localhost:5001/api/clients`;

      const res = await fetch(url);
      const data = await res.json();
      setClients(data);
    };

    fetchClients();
  }, [searchParams]);

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
              <td className="col-actions" colo = "#650000">Details | Transfer | Close Account</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </motion.div>
  );
}

export default ClientTable;