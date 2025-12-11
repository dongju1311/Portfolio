import React, { useState, useEffect } from 'react';
import "xp.css/dist/XP.css";
import '../styles/Taskbar.css';

export default function Taskbar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="taskbar">
            <button className="start-button">
                <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" width={18} alt="Start"/>
                start
            </button>
            <div className="taskbar-spacer"></div>
            <div className="taskbar-clock">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    );
}