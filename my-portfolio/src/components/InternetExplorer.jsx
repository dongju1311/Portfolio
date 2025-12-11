import React from 'react';
import '@/styles/InternetExplorer.css';

export default function InternetExplorer({ url, children, onClose }) {
    return (
        <div className="ie-container">
            <div className="ie-title-bar">
                <span>Microsoft Internet Explorer</span>
                <button className="ie-close-btn" onClick={onClose}>×</button>
            </div>
            <div className="ie-menu-bar">
                <span>파일(F)</span> <span>편집(E)</span> <span>보기(V)</span> <span>즐겨찾기(A)</span> <span>도구(T)</span> <span>도움말(H)</span>
            </div>
            <div className="ie-address-bar">
                <span>주소(D):</span>
                <input type="text" className="ie-address-input" value={url} readOnly />
                <button>이동</button>
            </div>
            <div className="ie-content-area">
                {children}
            </div>
        </div>
    );
}