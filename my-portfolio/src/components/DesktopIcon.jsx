import React from 'react';
import '@/styles/DesktopIcon.css';

export default function DesktopIcon({ icon, title, onDoubleClick }) {
    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick}>
            <img src={icon} alt={title} />
            <span>{title}</span>
        </div>
    );
}