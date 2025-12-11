import React from 'react';
import '@/styles/IntroWindow.css';

export default function IntroWindow() {
    return (
        <div className="intro-container">
            <div className="intro-sidebar">
                <div className="sidebar-box">
                    <div className="sidebar-header">내 정보</div>
                    <div className="sidebar-content">
                        <img
                            src="/images/myimage.jpg"
                            onError={(e) => e.target.src = "https://win98icons.alexmeub.com/icons/png/user-4.png"}
                            alt="Profile"
                            className="sidebar-profile-img"
                        />
                        <strong>황동주</strong><br/>
                        Frontend Developer<br/>
                        Seoul, Korea
                    </div>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-header">바로가기</div>
                    <div className="sidebar-content" style={{ cursor: 'pointer' }}>
                        <span onClick={() => window.open('https://github.com/dongju1311')} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                             <img src="/images/apple-touch-icon" alt="git" style={{width:16}} /> Github
                        </span>
                        <div style={{marginTop:5}}>📧 Email</div>
                    </div>
                </div>
            </div>

            <div className="intro-main">
                <div className="intro-header-title">About Me</div>
                <div className="intro-header-desc">
                    안녕하세요. 성실하게 나아가는 신입 프론트엔드 개발자 황동주 입니다.
                </div>

                <div className="resume-section">
                    <span className="resume-legend">경력 사항 (Career)</span>
                    <div className="resume-list">
                        <div className="resume-item">
                            <span className="resume-date">2022.10.04 ~ 2025.03.05</span>
                            <span className="resume-content">(주)삼호저축은행</span>
                            <span className="resume-detail">여신부</span>
                        </div>
                        <div className="resume-item">
                            <span className="resume-date">2019.09.04 ~ 2020.03.25</span>
                            <span className="resume-content">(주)지오다노</span>
                            <span className="resume-detail">판매부</span>
                        </div>
                        <div className="resume-item">
                            <span className="resume-date">2019.01.03 ~ 2019.07.03</span>
                            <span className="resume-content">육군본부</span>
                            <span className="resume-detail">보급부</span>
                        </div>
                        <div className="resume-item-detail" style={{marginTop: 5, fontSize: 11, color: '#666'}}>
                            * 고객 응대 및 영업 지원 경험을 바탕으로, 사용자가 편안함을 느끼는 UI/UX를 고민합니다.
                        </div>
                    </div>
                </div>

                <div className="resume-section">
                    <span className="resume-legend">교육 이수 (Education)</span>
                    <div className="resume-list">
                        <div className="resume-item">
                            <span className="resume-date">2025.06.24 ~ 2026.01.08</span>
                            <span className="resume-content">JAVA 풀스택 웹&앱 개발자(클라우드) 취업캠프</span>
                            <span className="resume-detail">더조은컴퓨터아카데미 강남캠퍼스</span>
                        </div>
                    </div>
                </div>

                <div className="resume-section">
                    <span className="resume-legend">학력 사항 (Academic)</span>
                    <div className="resume-list">
                        <div className="resume-item">
                            <span className="resume-date">2023.08 ~ 현재</span>
                            <span className="resume-content">경희사이버대학교(자산관리학부)</span>
                            <span className="resume-detail">재학중</span>
                        </div>
                        <div className="resume-item">
                            <span className="resume-date">2019.03 ~ 2025.05</span>
                            <span className="resume-content">강원대학교(글로벌인재학부)</span>
                            <span className="resume-detail">중퇴</span>
                        </div>
                        <div className="resume-item">
                            <span className="resume-date">2014.03 ~ 2017.02</span>
                            <span className="resume-content">신도림고등학교</span>
                            <span className="resume-detail">졸업</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}