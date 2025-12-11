import React from 'react';
import { useNavigate } from 'react-router-dom';
import InternetExplorer from '../components/InternetExplorer';
import bgImage from '../assets/main.bmp';
import '../styles/BicyclePage.css';
import Bicycle from "@/components/Bicycle.jsx";

export default function BicyclePage() {
    const navigate = useNavigate();

    return (
        <div className="bicycle-page-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bicycle-window-wrapper">
                <InternetExplorer
                    url="http://www.bicycle-shop.com"
                    onClose={() => navigate('/')}>
                    <Bicycle/>
                </InternetExplorer>
            </div>
        </div>
    );
}