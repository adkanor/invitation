import React, { useState } from 'react';
import styles from './Toast.module.css'; // добавьте стили для уведомлений

const Toast = ({ message, onClose }) => {
    return (
        <div className={styles.toast}>
            <p>{message}</p>
            <button onClick={onClose} className={styles.closeButton}>×</button>
        </div>
    );
};

export default Toast;
