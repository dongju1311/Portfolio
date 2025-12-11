import React from "react";
import useSkills from "@/hooks/useSkills.js"
import '@/styles/skills.css';

export default function Skill(){
    const skills = useSkills();
    return(
        <div className="skill-container">
            <div className="skill-header">
                <h2>Tech Stack</h2>
                <p>프로젝트에 활용 가능한 기술 목록입니다.</p>
            </div>

            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon-box">
                            <img src={skill.icon} alt={skill.title} className="skill-icon" />
                        </div>
                        <div className="skill-title">{skill.title}</div>
                        <div className="skill-desc">{skill.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}