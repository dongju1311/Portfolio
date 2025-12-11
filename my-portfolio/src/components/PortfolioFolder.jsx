import React from 'react';
import DesktopIcon from './DesktopIcon';
import {useNavigate} from "react-router-dom";
import '@/styles/PortfolioFolder.css';

export default function PortfolioFolder({ onOpenWindow }) {
    const navigate = useNavigate();
    return (
        <div className="portfolio-folder-container">
            <div className="folder-address-bar">
                <span>Address:</span>
                <input type="text" value="C:\Users\DongJu\Portfolio" readOnly />
            </div>

            <div className="folder-content">
                <DesktopIcon
                    title="프로젝트 모음"
                    icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
                    onDoubleClick={() => onOpenWindow('projects-folder')}
                />
                <DesktopIcon
                    title="기술 스택"
                    icon="https://win98icons.alexmeub.com/icons/png/settings_gear-4.png"
                    onDoubleClick={() => navigate("/skill")}
                />
            </div>
        </div>
    );
}