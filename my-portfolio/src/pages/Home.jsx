import React, { useState } from 'react';
import WindowXP from '../components/WindowXP';
import Taskbar from '../components/Taskbar';
import DesktopIcon from '../components/DesktopIcon';
import IntroWindow from '../components/IntroWindow';
import PortfolioFolder from '../components/PortfolioFolder';
import ProjectListFolder from '../components/ProjectListFolder';
import bgImage from '../assets/main.bmp';
import '../styles/App.css';

export default function Home() {
    const [windows, setWindows] = useState([
        {
            id: 'intro-window',
            title: '시스템 등록 정보 (내 소개)',
            isOpen: false,
            zIndex: 1,
            defaultX: 50, defaultY: 50,
            width: 1200, height: 800
        },
        {
            id: 'portfolio-folder',
            title: 'C:\\Portfolio',
            isOpen: false,
            zIndex: 1,
            defaultX: 100, defaultY: 100,
            width: 500, height: 400
        },
        {
            id: 'projects-folder',
            title: 'C:\\Portfolio\\Projects',
            isOpen: false,
            zIndex: 1,
            defaultX: 150, defaultY: 150,
            width: 500, height: 400
        }
    ]);

    const openWindow = (id) => {
        setWindows(windows.map(w => w.id === id ? { ...w, isOpen: true, zIndex: 10 } : { ...w, zIndex: 1 }));
    };
    const closeWindow = (id) => {
        setWindows(windows.map(w => w.id === id ? { ...w, isOpen: false } : w));
    };
    const focusWindow = (id) => {
        setWindows(windows.map(w => ({ ...w, zIndex: w.id === id ? 10 : 1 })));
    };
    const handleOpenWindow = (id) => {
        openWindow(id);
    };

    const renderWindowContent = (id) => {
        switch (id) {
            case 'intro-window':
                return <IntroWindow />;

            case 'portfolio-folder':
                return <PortfolioFolder onOpenWindow={handleOpenWindow} />;

            case 'projects-folder':
                return <ProjectListFolder />;

            default:
                return null;
        }
    };

    return (
        <div className="desktop-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="desktop-icons-area">
                <DesktopIcon
                    title="내 컴퓨터"
                    icon="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png"
                    onDoubleClick={() => openWindow('intro-window')}
                />

                <DesktopIcon
                    title="포트폴리오"
                    icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
                    onDoubleClick={() => openWindow('portfolio-folder')}
                />
            </div>

            {windows.map(win => win.isOpen && (
                <WindowXP
                    key={win.id}
                    {...win}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                >
                    {renderWindowContent(win.id)}
                </WindowXP>
            ))}

            <Taskbar />
        </div>
    );
}