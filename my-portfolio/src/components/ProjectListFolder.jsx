import React from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopIcon from './DesktopIcon';
import '@/styles/PortfolioFolder.css';

export default function ProjectListFolder() {
    const navigate = useNavigate();
    return (
        <div className="project-folder-container">
            <div className="folder-address-bar">
                <span>Address: </span>
                <input type="text" value="C:\Portfolio\Projects" readOnly />
            </div>
            <div className="folder-content">
                <DesktopIcon
                    title="자전거 쇼핑몰"
                    icon="https://win98icons.alexmeub.com/icons/png/html-1.png"
                    onDoubleClick={() => navigate('/projects/bicycle')}
                />
            </div>
        </div>
    );
}