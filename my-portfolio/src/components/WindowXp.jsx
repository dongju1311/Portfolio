import React from 'react';
import { Rnd } from 'react-rnd';
import "xp.css/dist/XP.css";
import "../styles/WindowXp.css";

export default function WindowXP({
                                     id, title, children, onClose, zIndex, onFocus,
                                     defaultX = 100, defaultY = 100,
                                     width = 500, height = 400
                                 }) {
    return (
        <Rnd
            default={{ x: defaultX, y: defaultY, width: width, height: height }}
            minWidth={200} minHeight={150}
            bounds="window"
            onMouseDown={() => onFocus(id)}
            style={{ zIndex: zIndex }}
            dragHandleClassName="title-bar"
        >
            <div className="window window-content-wrapper">
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" onClick={() => onClose(id)} />
                    </div>
                </div>
                <div className="window-body window-body-custom">
                    {children}
                </div>
            </div>
        </Rnd>
    );
}