import React, { useState } from 'react';
import WindowXptem from '../components/WindowXptem.jsx';
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
        },
        {
            id: 'troubleshoot-memo',
            title: 'troubleshoot.txt - 메모장',
            isOpen: false,
            zIndex: 1,
            defaultX: 200, defaultY: 200,
            width: 1000, height: 800
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

            case 'troubleshoot-memo':
                return (
                    <div className="notepad-container" style={{ height: '100%', backgroundColor: '#fff' }}>
            <textarea
                style={{
                    width: '100%', height: '100%',
                    border: 'none', outline: 'none',
                    padding: '10px', fontFamily: 'Fixedsys, Courier, monospace', fontSize: '1.5rem',
                }}
                readOnly={true}
                defaultValue={`[마이그레이션 트러블슈팅 리포트]

                    1. SSR 환경에서의 인증 유실 문제 (Cookie Forwarding)
                    - 문제: 서버 컴포넌트 데이터 요청 시 세션/인증 정보 유실
                    - 원인: Next.js 서버에서 백엔드로의 요청 시 브라우저 쿠키가 자동 전달되지 않음
                    - 해결: next/headers의 cookies()를 사용하여 쿠키 추출 후 axios 헤더에 직접 주입
                    
                    2. 결제 위젯 비동기 초기화 오류 (Toss Payments)
                    - 문제: 결제 페이지 진입 시 위젯 렌더링 실패 또는 금액 오류 발생
                    - 원인: 데이터 페칭보다 SDK 초기화가 먼저 실행되는 레이스 컨디션(Race Condition)
                    - 해결: totalPrice 상태값에 따른 조건부 렌더링 및 useEffect 의존성 배열 최적화
                    - 결과: 결제 위젯 로딩 안정성 100% 확보 및 예외 상황 방어 코드 구축
                    
                    3. 결제 데이터 무결성 검증 (Backend)
                    - 문제: 클라이언트 사이드 금액 위변조 가능성 차단 필요
                    - 해결: 결제 승인(confirm) 단계에서 토스 API 응답 값과 DB 주문 금액을 2차 대조하는 로직 도입`}
            />
                    </div>
                );

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
                <DesktopIcon
                    title="troubleshoot.txt"
                    icon="https://win98icons.alexmeub.com/icons/png/notepad_file-0.png"
                    onDoubleClick={() => openWindow('troubleshoot-memo')}
                />
            </div>

            {windows.map(win => win.isOpen && (
                <WindowXptem
                    key={win.id}
                    {...win}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                >
                    {renderWindowContent(win.id)}
                </WindowXptem>
            ))}

            <Taskbar />
        </div>
    );
}