import {useNavigate} from "react-router-dom";
import InternetExplorer from "@/components/InternetExplorer.jsx";
import bgImage from "@/assets/main.bmp";
import React from "react";
import Skill from "@/components/Skill.jsx";

export default function SkillPage(){
    const navigate = useNavigate();

    return (
        <div className="bicycle-page-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bicycle-window-wrapper">
                <InternetExplorer
                    url="http://www.bicycle-shop.com"
                    onClose={() => navigate('/')}
                >
                    <Skill/>
                </InternetExplorer>
            </div>
        </div>
    );
}