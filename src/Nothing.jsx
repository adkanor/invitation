// src/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Упс, как ты сюда попал?</h1>
      <p>Похоже, ты зашел на страницу, которой не существует.</p>
      <p>
        <Link to="/guest/5678">Вернуться к делу!</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
